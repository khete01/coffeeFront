import React from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";
import { useRouter } from "expo-router";
const pages = [
  { text: "Embrace coffee essence", image: "" },
  { text: "Flavorful bean journey", image: "" },
  { text: "Unlock bean secrets", image: "" },
];

export default function OnboardingScreen() {
  const router = useRouter()
  return (
    <View style={styles.container}>
      {pages.map((page, index) => (
        <ImageBackground
          key={index}
          source={{ uri: page.image }}
          style={styles.page}
        >
          <Text style={styles.text}>{page.text}</Text>
          <Button title="Next" onPress={() => router.replace("/LoginScreen.tsx")} />
        </ImageBackground>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  page: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
    color: "white",
  },
});
