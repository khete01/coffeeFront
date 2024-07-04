import {
  Image,
  StyleSheet,
  Platform,
  View,
  Dimensions,
  Text,
} from "react-native";

export default function Profile() {
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.profilePic}></View>
        <View>
          <Text>asmo</Text>
          <Text>Good Morning!</Text>
        </View>
      </View>
    </View>
  );
}
const styles = StyleSheet.create({
  profilePic: {
    borderRadius: 40,
    width: 60,
    height: 60,
    backgroundColor: "black",
  },
  box: {
    display: "flex",
    flexDirection: "row",
  },
});
