import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationScreenProp, NavigationState, NavigationParams } from "react-navigation";

interface IPropsSingleTodoScreen {
    navigation: NavigationScreenProp<NavigationState, NavigationParams>;
}
export const SingleTodoScreen: React.SFC<IPropsSingleTodoScreen> = props => {
    const { id, status, body } = props.navigation.state.params.updatedTodo;
    return (
        <View style={styles.container}>
            <Text style={styles.headerText}>
                {id}. {status}
            </Text>
            <Text style={styles.bodyText}>{body}</Text>
        </View>
    );
};

// SingleTodoScreen.navigationOptions = {
//     title: 'SingleTodoScreen'
// };


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    headerContainer: {
        flexDirection: 'row'
    },
    headerText: {
        fontSize: 30
    },
    bodyText: {
        fontSize: 50
    }
});
