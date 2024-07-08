import Discount from "@/components/Discount";
import Profile from "@/components/profile";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Dimensions,
  Text,
} from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Profile />
        <Discount />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
    backgroundColor: "#74512D",
  },
  box: {
    flex: 1,
    alignItems: "center",
  },
});
