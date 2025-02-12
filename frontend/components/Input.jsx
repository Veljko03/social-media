import { useState } from "react";
import { StyleSheet, View, Pressable, Text, TextInput } from "react-native";

export default function Input({ typeOfInput, value, onChange }) {
  if (typeOfInput == "email") {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.buttonLabel}>EMAIL</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your email"
          keyboardType="email-address"
          autoCapitalize="none"
          autoCorrect={false}
          value={value}
          onChange={onChange}
        />
      </View>
    );
  } else if (typeOfInput == "password") {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.buttonLabel}>PASSWORD</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your password"
          secureTextEntry={true}
          autoCapitalize="none"
          value={value}
          onChange={onChange}
        />
      </View>
    );
  } else if (typeOfInput == "name") {
    return (
      <View style={styles.inputContainer}>
        <Text style={styles.buttonLabel}>NAME</Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Alice Rodrigese"
          value={value}
          onChange={onChange}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputContainer: {
    width: 260,
    height: 60,
    marginHorizontal: 20,

    padding: 3,
  },
  inputStyle: {
    backgroundColor: "#767676",
    borderRadius: 16,
    width: "100%",
    height: "100%",
    color: "white",
  },
  buttonLabel: {
    color: "#fff",
    fontSize: 16,
  },
});
