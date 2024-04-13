
import { FeedItem } from "../types/Feed";
import { View, StyleSheet, Image, ScrollView} from 'react-native';
import { Appbar, Card as PaperCard, Title, Paragraph, Avatar } from 'react-native-paper';

const Card = ({
  avatar,
  username,
  content,
  image,
  likes,
  reposts,
  comments,
}: FeedItem) => {
  return (
    <View style={styles.container}>
        <PaperCard style={styles.card}>
          <PaperCard.Cover source={{ uri: image }} />
          <PaperCard.Content>
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 20 }}>
              <Avatar.Image size={24} source={{ uri: avatar }} />
              <View>
                <Title>{username}</Title>
                <Paragraph>
                  {content}
                </Paragraph>
              </View>
            </View>
          </PaperCard.Content>
        </PaperCard>
        </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    margin: 16,
  },
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  logo: {
    width: 40,
    height: 40,
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});

export default Card;
