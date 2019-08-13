import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";

interface IHomeScreenProps extends NavigationScreenProps {

}

export class HomeScreen extends React.Component<IHomeScreenProps, {}> {
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Home Screen</Text>
                <Button
                    title="Go to Details"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

