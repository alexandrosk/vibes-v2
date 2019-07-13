import React from 'react';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import SplashScreen from "../screens/Splash";

import {createSwitchNavigator, createAppContainer} from 'react-navigation';


const SwitchNavigator = createSwitchNavigator({
        Home: {
            screen: TabNavigator,
        },
        Auth: {
            screen: AuthNavigator
        },
        Splash: {
            screen: SplashScreen
        }
    },
    {
        initialRouteName: 'Splash',
    }
);

export default createAppContainer(SwitchNavigator);
