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
      <View>
        <Profile />
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
});
