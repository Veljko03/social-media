import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

export default function AboutScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>About screen</Text>
      <Link href={"/log-in"} style={styles.button}>
        Go to log in
      </Link>

      <Text>-------------</Text>
      <Link href={"/sign-in"} style={styles.button}>
        Go to sign in
      </Link>
      <Text>-------------</Text>
      <Pressable style={styles.button} onPress={() => alert("bravo")}>
        <Text style={styles.text}>Press me</Text>
      </Pressable>
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
