import { router, useRouter } from "expo-router";
import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

export default function WelcomeScreen() {
  return (
    <ImageBackground source={{ uri: "" }} style={styles.container}>
      <Text style={styles.title}>CoffeeScript</Text>
      <Button title="Get Started" />
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 30,
    color: "white",
  },
});
