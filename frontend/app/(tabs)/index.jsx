import { useState, useEffect, useRef } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Accelerometer } from "expo-sensors";

export default function App() {
  const [{ x, y, z }, setData] = useState({ x: 0, y: 0, z: 0 });
  const [subscription, setSubscription] = useState(null);
  const [steps, setSteps] = useState(0);
  const [lastMagnitude, setLastMagnitude] = useState(null);
  const [threshold] = useState(1.3);
  const lastStepTime = useRef(0);
  const debounceTime = 300;

  const _subscribe = () => {
    Accelerometer.setUpdateInterval(16);
    setSubscription(Accelerometer.addListener(setData));
  };

  const _unsubscribe = () => {
    subscription && subscription.remove();
    setSubscription(null);
  };

  useEffect(() => {
    _subscribe();
    return () => _unsubscribe();
  }, []);

  useEffect(() => {
    const magnitude = Math.sqrt(x * x + y * y + z * z);

    if (lastMagnitude === null) {
      setLastMagnitude(magnitude);
      return;
    }

    if (magnitude > threshold && lastMagnitude <= threshold) {
      const now = Date.now();
      if (now - lastStepTime.current > debounceTime) {
        setSteps((prevSteps) => prevSteps + 1);
        lastStepTime.current = now;
      }
    }

    setLastMagnitude(magnitude);
  }, [x, y, z]);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Koraci: {steps}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",
  },
  button: {
    backgroundColor: "red",
  },
});
