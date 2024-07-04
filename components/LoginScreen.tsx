import React from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useRouter } from "expo-router";
export default function LoginScreen() {
  return (
    <View style={styles.container}>
      <Text>Welcome to Login</Text>
      <TextInput placeholder="E-mail Address" style={styles.input} />
      <TextInput placeholder="Password" style={styles.input} />
      <Button title="Sign in" />
      <Button title="Register" />
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
