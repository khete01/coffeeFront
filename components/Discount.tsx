import {
  Image,
  StyleSheet,
  Platform,
  View,
  Dimensions,
  Text,
  TextInput,
} from "react-native";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Discount() {
  const [productId, setProductId] = useState<string>();
  const [title, setTitle] = useState<string>();
  const [description, setDescription] = useState<string>();
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:3000/api/promotion`);
      setData(response.data);
    };
    fetchData();
  }, []);
  console.log(data);
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    width: 350,
    height: 150,
    //top: 150,
    //left: 20,
    backgroundColor: "#CE97607D",
    borderRadius: 10,
  },
});
