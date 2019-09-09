import React from 'react';
import Login from '../screens/Auth/Login';
import SignUp from '../screens/Auth/SignUp';
import {theme} from '../constants'
import { TouchableOpacity,Image } from 'react-native';

import HomeScreen from '../screens/Home';
import SearchScreen from '../screens/Search';
import Post from '../screens/Post';
import Activity from '../screens/Activity';
import ProfileScreen from '../screens/Profile';
import MessagesScreen from '../screens/Messages/List';


import {createStackNavigator, createAppContainer} from 'react-navigation';

import BackIcon from '../icons/back';
import Universe from '../icons/universe';
import Envelope from '../icons/envelope';
let hours = new Date().getMinutes(); //Current Hours

export const HomeNavigator = createStackNavigator({

        Home: {
            screen: HomeScreen,
            navigationOptions: ({ navigation }) => ({
                headerTitle: 'v i b e s',
                headerTintColor: '#fff',
                headerRight: (
                    <TouchableOpacity onPress={() => navigation.navigate('Messages')}>
                        <Envelope style={{marginRight:10,opacity:0.8}}/>
                    </TouchableOpacity>
                ),
            }),
        },
        Messages: {
            screen: MessagesScreen
        }
    },
    {
        defaultNavigationOptions: {
            headerStyle: {
                backgroundColor: theme.colors.black,
                borderBottomColor: "transparent",
                elevation: 0, // for android
            },
            headerTintColor: theme.colors.white,
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
            headerTintColor: theme.colors.white,
            headerBackImage: <BackIcon/>
        }
    }
);

export const ProfileNavigator = createStackNavigator({

        Search: {
            screen: ProfileScreen,
            navigationOptions: {
                title: 'Profile',
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
            headerTintColor: theme.colors.white,
            headerBackImage: <BackIcon/>
        }
    }
);
