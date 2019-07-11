import React from 'react';
import {Text} from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Post from '../screens/Post';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import style from '../styles';

import SearchIcon from '../icons/search'
import HeartIcon from '../icons/heart'
import UserIcon from '../icons/user'
import CityScapeIcon from '../icons/cityscape'
import PlusIcon from '../icons/plus'

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({focused}) => (
                    <CityScapeIcon/>
                )
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: () => (
                    <SearchIcon/>
                )
            }
        },
        Post: {
            screen: Post,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: () => (
                    <PlusIcon/>
                ),
            }
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: () => (
                    <HeartIcon/>
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: () => (
                    <UserIcon/>
                )
            }
        }
    },
    {
        defaultNavigationOptions: {
            tabBarOptions: {
                style: style.tabBarStyling,
                showLabel: false,
            },
            headerTintColor: '#D7DEDC',
        },
    }
);

export default createAppContainer(TabNavigator);
