
import { createAppContainer, createSwitchNavigator } from "react-navigation";

import tabNavigator from "./tab_navigation";

export default createAppContainer(
    createSwitchNavigator({
        Main: tabNavigator
    })
);