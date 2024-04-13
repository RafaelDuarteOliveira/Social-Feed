import React from 'react';
import { View, StyleSheet, Image, ScrollView} from 'react-native';
import { Appbar, Card, Title, Paragraph, Avatar } from 'react-native-paper';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import Home from './src/screens/Home';

const App = () => {
  return (
    <SafeAreaProvider style={styles.container}>
     <Home />
    </SafeAreaProvider>
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

export default App;

