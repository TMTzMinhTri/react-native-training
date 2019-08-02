import React, { useState, FunctionComponent, SFC } from 'react';
import { Text, View, TouchableOpacity } from 'react-native';
import { styles } from "./index.styles";

interface IButton {
    name: string,
    uri: string
}
interface IButtonProps {
    data: IButton[]
}

export const Button: React.SFC<{}> = (props) => {

    return <TouchableOpacity style={styles.buttonStyle} onPress={() => { console.log('aaa') }}>
        <Text style={styles.buttonText}>item.name</Text>
    </TouchableOpacity>
}