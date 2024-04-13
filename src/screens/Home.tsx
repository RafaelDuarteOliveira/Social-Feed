import { View, Text, StyleSheet, FlatList } from "react-native";
import Card from "../components/Card";
import { FeedItem } from "../types/Feed";
import { Appbar } from "react-native-paper";

const Home = () => {
  const posts: FeedItem[] = [
    {
      id: "1",
      avatar: "https://picsum.photos/100",
      username: "Fael ",
      content: "LA",
      image: "https://picsum.photos/205",
      likes: 10,
      reposts: 50,
      comments: 100,
    },
    {
      id: "2",
      avatar: "https://picsum.photos/233",
      username: "Bill",
      content: "kkkkkk",
      image: "https://picsum.photos/210",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
    {
      id: "3",
      avatar: "https://picsum.photos/215",
      username: "Jason",
      content: "Sei lá",
      image: "https://picsum.photos/207",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
    {
      id: "4",
      avatar: "https://picsum.photos/290",
      username: "Bullet",
      content: "Like",
      image: "https://picsum.photos/293",
      likes: 1,
      reposts: 5,
      comments: 10,
    },
  ];

  return (
    <View style={styles.container}>
      <Appbar.Header>
      <Appbar.Content title="SocialReact" />
    </Appbar.Header>
      <FlatList
        data={posts}
        renderItem={({ item }) => (
          <Card
            id={item.id}
            avatar={item.avatar}
            username={item.username}
            content={item.content}
            image={item.image}
            likes={item.likes}
            reposts={item.reposts}
            comments={item.comments}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    width: '100%'
  },
  title: {
    fontSize: 60,
    marginVertical: 10,
    fontWeight: "bold",
  },
});



export default Home;