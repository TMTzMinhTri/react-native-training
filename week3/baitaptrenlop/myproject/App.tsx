import React, { useState } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./index.styles";

import { Button } from "./button";

const fakedata = [
  { name: 'rock', uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png' },
  { name: 'paper', uri: 'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png' },
  { name: 'scissors', uri: 'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png' }
]

const App: React.SFC<{}> = () => {
  const [gamePrompt, setGamePrompt] = useState('Choose your weapon!');

  return (
    <View style={styles.container}>
      <Text>{gamePrompt}</Text>
      <Button />
    </View>
  );
}
export default App


