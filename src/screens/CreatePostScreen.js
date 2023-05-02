import { useState } from "react";
import { Text, StyleSheet, View, Image, TextInput, Button } from "react-native";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Mark Sikaundi",
};

//states
const CreatePostScreen = () => {
  const [description, setDescription] = useState("");

  const onPost = () => {
    console.warn("Posting: ", description);
    setDescription("");
  };

  const onSubmit = () => {
    console.log("On submit");
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={{ uri: user.image }} style={styles.image} />
        <Text style={styles.name}>{user.name}</Text>
      </View>

      <TextInput placeholder="What's on your mind?" multiline />
      <Button title="Post" onPress={onSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    padding: 20,
    marginTop: 20,
    backgroundColor: "#fff",
    paddingTop: 30,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    marginBottom: 10,
  },
  image: {
    height: 40,
    window: 40,
    borderRadius: 30,
    marginRight: 10,
  },
  name: {
    fontWeight: "500",
  },
});

export default CreatePostScreen;
