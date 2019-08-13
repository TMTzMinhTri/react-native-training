import React from "react";
import { createStackNavigator } from "react-navigation";
import { HomeScreen } from "../screens/HomeScreen";
import { DetailsScreen } from "../screens/DetailScreen";
import { TabBarIcon } from '../components/TabBarIcon'

export const HomeStack = createStackNavigator(
    {
        Home: HomeScreen,
        Details: DetailsScreen
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