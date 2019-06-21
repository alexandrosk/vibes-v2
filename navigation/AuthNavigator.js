import React from 'react';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';

import {createStackNavigator, createAppContainer} from 'react-navigation';


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
                backgroundColor: '#15191c',
            },
            headerTintColor: '#fff',
            header: null,
        },
    }
);

export default createAppContainer(StackNavigator);
