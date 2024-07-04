// screens/RegisterScreen.js
import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function RegisterScreen() {
  const router = useRouter();
  return (
    <View style={styles.container}>
      <Text>Register your Account</Text>
      <TextInput placeholder="Full Name" style={styles.input} />
      <TextInput placeholder="E-mail Address" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <TextInput placeholder="Confirm Password" style={styles.input} />
      <Button title="Register" />
      <Button title="Login" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
});
