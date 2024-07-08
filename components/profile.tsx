import {
  Image,
  StyleSheet,
  Platform,
  View,
  Dimensions,
  Text,
  TextInput,
  Pressable,
} from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import { useState } from "react";
export default function Profile() {
  const [text, setText] = useState<string>();
  const [inputActive, setInputActive] = useState<boolean>(false);
  const onChangeText = (text: string) => {
    setText(text);
  };
  return (
    <View>
      <View style={styles.box}>
        <View style={styles.inputDiv}>
          {inputActive ? (
            <TextInput
              onChangeText={onChangeText}
              value={text}
              autoFocus
              onBlur={() => setInputActive(false)}
              style={styles.input}
              placeholder=" search"
            />
          ) : (
            <View style={styles.titleContainer}>
              <View style={styles.profile}>
                <View style={styles.profilePic}></View>
                <View>
                  <Text style={styles.name}>asmo</Text>
                  <Text style={styles.goodMorning}>Good Morning!</Text>
                </View>
              </View>
              <Pressable onPress={() => setInputActive(true)}>
                <Icon name="search" style={styles.icon} size={30} />
              </Pressable>
            </View>
          )}
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
    gap: 10,
    padding: 10,
  },
  inputDiv: {
    marginTop: 20,
    marginBottom: 10,
  },
  input: {
    marginTop: 40,
    width: "100%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    backgroundColor: "white",
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  icon: {
    color: "white",
  },
  titleContainer: {
    top: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10,
    paddingHorizontal: 15,
    width: 350,
  },
  title: {
    color: "white",
    fontSize: 32,
    fontWeight: "bold",
  },
  profile: { flex: 1, flexDirection: "row", gap: 10 },
  name: {
    fontWeight: 600,
    fontSize: 22,
    color: "white",
  },
  goodMorning: {
    color: "white",
    fontWeight: 300,
    fontSize: 20,
  },
});
