import React from 'react';
import {Text} from 'react-native';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import {theme} from '../constants'
import {createStackNavigator, createAppContainer} from 'react-navigation';

import BackIcon from '../icons/back';

const StackNavigator = createStackNavigator({

        Login: {
            screen: Login,
        },
        SignUp: {
            screen: SignUp
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: "#15191c", // or 'white
                borderBottomColor: "transparent",
                elevation: 0, // for android
            },
            headerBackImage: <BackIcon/>,
            headerBackTitle: null,
            headerLeftContainerStyle: {
                alignItems: 'center',
                marginLeft: theme.sizes.base * 2,
                paddingRight: theme.sizes.base,
            },
            headerRightContainerStyle: {
                alignItems: 'center',
                paddingRight: theme.sizes.base,
            },
        }

    }
);

export default createAppContainer(StackNavigator);
