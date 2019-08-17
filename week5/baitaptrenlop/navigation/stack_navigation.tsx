import React from "react";
import { createStackNavigator } from "react-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailsScreen } from "../screens/DetailScreen";
import { LoginScreen } from "../screens/LoginScreen";
import { TabBarIcon } from '../components/TabBarIcon'

export const HomeStack = createStackNavigator(
    {
        Login: LoginScreen,
        Home: HomeScreen,
        Details: DetailsScreen,
    }
);

HomeStack.navigationOptions = {
    tabBarLabel: "Trang chủ",
    tabBarIcon: ({ focused }) => {
        return <TabBarIcon
            focused={focused}
            name="ios-information-circle"
        />
    }
}