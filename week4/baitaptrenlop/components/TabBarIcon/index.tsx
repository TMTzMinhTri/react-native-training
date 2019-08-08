import React from 'react';
import { Ionicons } from '@expo/vector-icons';


interface ITapIconProps {
    focused: boolean,
    name: string
}
export const TabBarIcon: React.SFC<ITapIconProps> = props => {
    return (
        <Ionicons
            name={props.name}
            size={26}
            style={{ marginBottom: -3 }}
            color={props.focused ? Colors.tabIconSelected : Colors.tabIconDefault}
        />
    );
}

const Colors = {
    tabIconSelected: '#2f95dc',
    tabIconDefault: "#ccc"
}