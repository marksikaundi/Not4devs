import { StatusBar } from "expo-status-bar";

import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import FeedPost from "./src/components/FeedPost";
import posts from "./assets/data/posts.json"
export default function App() {
  return (
    <View style={styles.container}>
      
      
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgrey",
    alignItems: "center",
    justifyContent: "center",
  },
});
