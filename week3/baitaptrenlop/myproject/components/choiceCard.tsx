import React, { useState } from 'react';
import { Text, View, TouchableOpacity, Image } from 'react-native';
import { styles } from "../assets/styles";
import { Ichoices } from "../App";




interface IPropsChoiceCard {
    player: string,
    choice?: Ichoices
  }
export const ChoiceCard: React.SFC<IPropsChoiceCard> = ({ player}) => {
    // const title = name && name.charAt(0).toUpperCase() + name.slice(1);
    return (
      <View style={styles.choiceContainer}>
        <Text style={styles.choiceDescription}>{player}</Text>
        {/* <Image source={{uri:uri}} resizeMode="contain" style={styles.choiceImage} /> */}
        {/* <Text style={styles.choiceCardTitle}>{title}</Text> */}
      </View>
    )
}