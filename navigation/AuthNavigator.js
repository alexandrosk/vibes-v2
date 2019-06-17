import React from 'react';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';

import { createStackNavigator, createAppContainer } from 'react-navigation';


const StackNavigator = createStackNavigator({
    Login: {
        screen: Login,
    },
    SignUp: {
        screen: SignUp
    }
});

export default createAppContainer(StackNavigator);
