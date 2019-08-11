import { createBottomTabNavigator } from "react-navigation";
import { CompleteStack, AllScreenStack } from "./stack_navigation";



const tabNavigator = createBottomTabNavigator({
    CompleteStack,
    AllScreenStack
});

export default tabNavigator;