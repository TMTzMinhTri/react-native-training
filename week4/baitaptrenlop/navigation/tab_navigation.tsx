import { createBottomTabNavigator } from "react-navigation";
import { HomeStack } from "./stack_navigation";

const tabNavigator = createBottomTabNavigator({
    HomeStack
});

export default tabNavigator;