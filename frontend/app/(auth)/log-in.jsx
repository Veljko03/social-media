import { useRoute } from "@react-navigation/native";
import { Link } from "expo-router";
import { Text, View, StyleSheet, Pressable } from "react-native";

import Button from "../../components/Button";
import Input from "../../components/Input";
export default function LogScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.title}>
        <Text style={styles.headerTxt}>Step Blocker</Text>
      </View>
      <View style={styles.logContainer}>
        <View style={styles.section1}>
          <Text style={styles.sec1Name}>Login</Text>
        </View>
        <View style={styles.section2}>
          <Input typeOfInput={"name"} />
          <Input typeOfInput={"password"} />

          <Button label={"Log in"} />
        </View>
        <View style={styles.section3}>
          <Text style={styles.text}>Don't have account?</Text>
          <Link href={"/sign-in"}>
            <Text style={styles.text}>Sign up</Text>
          </Link>
        </View>
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
    gap: 10,
  },
  sec1Name: {
    color: "white",
    fontSize: 50,
    marginBottom: 60,
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
  section1: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    alignItems: "center",
  },
  section2: {
    display: "flex",
    flexDirection: "column",
    gap: 50,
    alignItems: "center",
  },
  section3: {
    display: "flex",
    flexDirection: "column",
    gap: 2,
    justifyContent: "center",
    alignItems: "center",
  },
});
