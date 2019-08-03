import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from "./assets/styles";
import { ChoiceCard } from './components/choiceCard'

export interface Ichoices {
  name: string,
  uri: string
}

interface IStateApp {
  gamePrompt: string,
  choices: Ichoices[]
}

export default class App extends React.Component<{}, IStateApp> {
  constructor(props) {
    super(props);
    this.state = {
      gamePrompt: 'Choose your weapon!',
      choices: [
        {
          name: 'rock',
          uri: 'http://pngimg.com/uploads/stone/stone_PNG13622.png',
        },
        {
          name: 'paper',
          uri:
            'https://www.stickpng.com/assets/images/5887c26cbc2fc2ef3a186046.png',
        },
        {
          name: 'scissors',
          uri:
            'http://pluspng.com/img-png/png-hairdressing-scissors-beauty-salon-scissors-clipart-4704.png',
        },
      ],
    };
  }

  public render() {
    let { gamePrompt } = this.state;
    return (
      <View style={styles.container}>
        <Text>{gamePrompt}</Text>
        <View style={styles.choicesContainer}>
          {renderActionResult(this)}
          <Text style={{ color: '#250902' }}>vs</Text>
          {renderActionResult(this)}
        </View>
        {/* <ChoiceCard player="minhtri" /> */}
        {renderButtonControl(this)}
      </View>
    );
  }
}






const renderButtonControl = (Component: App) => {
  let { choices } = Component.state
  let render = choices.map((choice, index) => {
    return <TouchableOpacity
      onPress={() => console.log('Mic check, 1 2, 1 2')}
      style={styles.buttonStyle}
      key={`choice_${index}`}
    >
      <Text style={styles.buttonText}>{choice.name}</Text>
    </TouchableOpacity>
  })
  return render
}

const renderActionResult = (component: App) => {
  return <View style={styles.choiceContainer}>
    <Text style={styles.choiceDescription}> Player </Text>
    <Image
      source={{ uri: "http://pngimg.com/uploads/stone/stone_PNG13622.png" }}
      resizeMode="contain"
      style={styles.choiceImage}
    />
    <Text style={styles.choiceCardTitle}> Rock </Text>
  </View>
}

