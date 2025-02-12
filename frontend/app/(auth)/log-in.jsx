import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

import Button from "../../components/Button";
export default function LogScreen() {
  const a = useRoute();
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.headerTxt}>Step Blocker</Text>
      </View>
      <View style={styles.logContainer}>
        <Text>Login</Text>
        <Button label={"Log in"} />
        <Text style={styles.text}>Don't have account?</Text>
        <Link href={"/sign-in"}>
          <Text style={styles.text}>Sign up</Text>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#25292e",
    // alignItems: "center",
    // justifyContent: "center",
  },
  logContainer: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "auto",
    marginBottom: 80,
  },
  headerTxt: {
    color: "#ffd33d",
    fontSize: 26,
  },
  title: { padding: 20 },
  text: {
    color: "#fff",
  },
  button: {
    backgroundColor: "red",
  },
});
