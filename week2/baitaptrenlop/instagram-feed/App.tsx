import React from 'react';
import { StyleSheet, Image, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { ListNewFeed } from "./components/ListNewFeed";

export default function App() {
  return (
    <View>
      <View style={styles.header}>
        <Image
          style={styles.logo}
          resizeMode="contain"
          source={{ uri: "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Instagram_logo.svg/1200px-Instagram_logo.svg.png" }}
        />
        <View style={{ position: "absolute", right: 20 }}>
          <Feather name="inbox" size={27} color="black" />
        </View>
      </View>
      <ListNewFeed />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: null,
    height: 40
  },
  logo: {
    flex: 1,
    width: null,
    height: 40
  },
  header: {
    flexDirection: 'row',
    backgroundColor: '#f3f6fa',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  }
});
