import React from "react";
import { Platform } from "react-native";
import { createStackNavigator, NavigationStackScreenOptions } from "react-navigation";
import { CompleteScreen } from "../screens/CompleteScreen";
import { DetailsScreen } from "../screens/CompleteScreen/DetailScreen";

import { AllScreen } from "../screens/AllScreen";
import { SingleTodoScreen } from "../screens/AllScreen/todoItem/detailItem";
import { TabBarIcon } from '../components/TabBarIcon'

export const CompleteStack = createStackNavigator(
    {
        Home: CompleteScreen,
        Details: DetailsScreen
    }
);

CompleteStack.navigationOptions = {
    tabBarLabel: "Complete",
    tabBarIcon: ({ focused }) => {
        return <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'ios-done-all' : 'md-link'}
        />
    }
}

export const AllScreenStack = createStackNavigator(
    {
        AllScreen: AllScreen,
        SingleTodo: SingleTodoScreen
    }
)
AllScreenStack.navigationOptions = {
    tabBarLabel: "All Todos",
    tabBarIcon: ({ focused }) => {
        return <TabBarIcon
            focused={focused}
            name={Platform.OS === 'ios' ? 'md-add-circle-outline' : 'md-link'}
        />
    }
}
