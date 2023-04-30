import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Image } from "react-native";
import FeedPost from "./src/components/FeedPost";

export default function App() {
  return (
    <View style={styles.container}>
      <FeedPost />
      <FeedPost />
      <StatusBar style="auto" />
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
