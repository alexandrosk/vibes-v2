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
import CityIcon from '../icons/cityscape';
let hours = new Date().getMinutes(); //Current Hours

export const HomeNavigator = createStackNavigator({

        Home: {
            screen: HomeScreen,
            navigationOptions: {
                headerTitle: <CityIcon/>,
                headerTintColor: '#fff',
            },
        },
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: theme.colors.black,
                borderBottomColor: "transparent",
                elevation: 0, // for android
            },
            headerBackImage: <BackIcon/>
        }
    }
);


export const SearchNavigator = createStackNavigator({

        Search: {
            screen: SearchScreen,
            navigationOptions: {
                title: 'Search'
            },
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: theme.colors.black,
                borderBottomColor: "transparent",
                elevation: 0, // for android
            },
            headerBackImage: <BackIcon/>
        }
    }
);
