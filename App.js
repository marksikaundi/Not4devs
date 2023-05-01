import { StatusBar } from "expo-status-bar";

import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import FeedScreen from "./src/screens/FeedScreen";
import CreatePostScreen from "./src/screens/CreatePostScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <CreatePostScreen />
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
