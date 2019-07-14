import React from 'react';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import {theme} from '../constants'

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import Post from '../screens/Post';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';

import {createStackNavigator, createAppContainer} from 'react-navigation';

import BackIcon from '../icons/back';

export const HomeNavigator = createStackNavigator({

        Home: {
            screen: HomeScreen,
            navigationOptions: {
                title: ' ',
            },
            headerMode: 'none',
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                height: theme.sizes.base * 4,
                backgroundColor: theme.colors.black,
                borderBottomColor: "transparent",
                elevation: 0, // for android
            },
            headerBackImage: <BackIcon/>,
            headerBackTitle: null,
        }
    }
);


export const SearchNavigator = createStackNavigator({

        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: ' '
            }
        },
    }
);
