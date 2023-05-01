import { StatusBar } from "expo-status-bar";

import { StyleSheet, FlatList, Text, View, Image } from "react-native";
import FeedPost from "./src/components/FeedPost";
import posts from "./assets/data/posts.json"
export default function App() {
  return (
    <View style={styles.container}>
      
      <FlatList 
      data={posts}
      renderItem={({item}) => <FeedPost post={item}/>}
      />
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
