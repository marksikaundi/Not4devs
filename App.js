import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Image } from "react-native";
import { Entypo } from "@expo/vector-icons";

const post = {
  id: "p1",
  createdAt: "20 min ago",
  User: {
    id: "u1",
    image:
      "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/zuck.jpeg",
    name: "Mark Sikaundi",
  },
  description:
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.",
  image: "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/images/1.jpg",
  numberOfLikes: 11,
  numberOfShares: 2,
};

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.post}>
        {/* Header */}
        <View styles={styles.header}>
          <Image
            source={{ uri: post.User.image }}
            style={styles.profileImage}
          />
          <View>
            <Text style={styles.name}>{post.User.name}</Text>
            <Text style={styles.subtitle}>{post.createdAt}</Text>
          </View>
          <Entypo
            name="dots-three-horizontal"
            size={18}
            color="grey"
            style={styles.icon}
          />
        </View>

        {/* Body */}
        {post.description && (
          <Text style={styles.description}>{post.description}</Text>
        )}
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.image} />
        )}

        {/* Footer */}
        <View style={styles.footer}>
          <View style={styles.statsRaw}>
            <Text style={styles.likedBy}>Elon Musk and {post.numberOfLikes} others</Text>
          <Text style={styles.numberOfShares}>{post.numberOfShares} shares</Text>
          </View>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  post: {
    backgroundColor: "#fff",
    marginVertical: 5,
  },
  header: {
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 25,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
  subtitle: {
    color: "gray",
  },
  icon: {
    marginLeft: "auto",
  },

  description: {
    paddingHorizontal: 10,
    lineHeight: 20,
    letterSpacing: 0.4,
  },
  image: {
    width: "100%",
    aspectRatio: 1,
    marginTop: 10,
  },
});
