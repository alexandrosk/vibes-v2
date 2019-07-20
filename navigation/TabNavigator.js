import React from 'react';

import Post from '../screens/Post';
import Activity from '../screens/Activity';

import style from '../styles';

import {HomeNavigator, SearchNavigator, ProfileNavigator} from './StackNavigator';

import SearchIcon from '../icons/search'
import HeartIcon from '../icons/heart'
import UserIcon from '../icons/user'
import CityScapeIcon from '../icons/cityscape'
import PlusIcon from '../icons/plus'

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: HomeNavigator,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({focused}) => (
                    focused ?
                        <CityScapeIcon/> :
                    <CityScapeIcon style={{opacity:0.65}}/>
                )
            }
        },
        Search: {
            screen: SearchNavigator,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({focused}) => (
                    focused ? <SearchIcon/> :
                    <SearchIcon style={{opacity:0.65}}/>
                )
            }
        },
        Post: {
            screen: Post,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({focused}) => (
                    focused ? <PlusIcon/> :
                    <PlusIcon style={{opacity:0.8}}/>
                ),
            }
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                tabBarLabel: ' ',
                tabBarIcon: ({focused}) => (
                    focused ? <HeartIcon/> :
                    <HeartIcon style={{opacity:0.65}}/>
                )
            }
        },
        Profile: {
            screen: ProfileNavigator,
            navigationOptions: {
                tabBarLabel: ' ',
                title: 'Profile',
                tabBarIcon: ({focused}) => (
                    focused ? <UserIcon/> :
                    <UserIcon style={{opacity:0.65}}/>
                )
            },
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
