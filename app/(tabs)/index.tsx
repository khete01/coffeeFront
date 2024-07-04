import Profile from "@/components/profile";
import { Image, StyleSheet, Platform, View, Dimensions } from "react-native";

export default function HomeScreen() {
  return (
    <View>
      <View>
        <Profile />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
