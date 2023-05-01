import { Text, StyleSheet, View, Image } from "react-native";

const user = {
  id: "u1",
  image:
    "https://notjustdev-dummy.s3.us-east-2.amazonaws.com/avatars/vadim.jpg",
  name: "Mark Sikaundi",
};

const CreatePostScreen = () => {
  return (
    <View style={StyleSheet.container}>
      <View>
        <Image source={{ uri: user.image }} />
        <Text>{user.name}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default CreatePostScreen;
