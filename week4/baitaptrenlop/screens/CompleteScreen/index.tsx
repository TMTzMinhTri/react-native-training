import React from "react";
import { View, Text, Button } from "react-native";
import { NavigationScreenProps } from "react-navigation";

interface IHomeScreenProps extends NavigationScreenProps {

}

export class CompleteScreen extends React.Component<IHomeScreenProps, {}> {
    static navigationOptions = {
        title: 'Home',
    };
    render() {
        return (
            <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
                <Text>Complete Screen</Text>
                <Button
                    title="Go to to do list"
                    onPress={() => this.props.navigation.navigate('Details')}
                />
            </View>
        );
    }
}

