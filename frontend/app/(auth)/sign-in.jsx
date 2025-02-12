import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function SignScreen() {
  const a = useRoute();
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sign in</Text>
      <Link href={"/log-in"}>
        <Text>Log In</Text>
      </Link>
      <Text>{a.name}, psth</Text>
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
