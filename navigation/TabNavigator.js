import React from 'react';
import { Text, View } from 'react-native';
import {AntDesign} from '@expo/vector-icons';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Upload from '../screens/Upload';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import style from '../styles';

import { createBottomTabNavigator, createAppContainer } from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
    Home: {
        screen: Home,
        navigationOptions: {
            tabBarOptions : {
                style: style.tabBarStyling
            },
            tabBarLabel : 'Feed',
            tabBarIcon : ({focused}) => (
                <Text style={{fontSize:20}}>🌃</Text>
            )
        }
    },
    Search: {
        screen: Search,
        navigationOptions: {
            tabBarOptions : {
                style: style.tabBarStyling
            },
            tabBarLabel : 'Search',
            tabBarIcon : () => (
                <Text style={{fontSize:20}}>🔍</Text>
            )
        }
    },
    Upload: {
        screen: Upload,
        navigationOptions: {
            tabBarOptions : {
                style: style.tabBarStyling
            },
            tabBarLabel : 'New post',
            tabBarIcon : () => (
                <Text style={{fontSize:20}}>🖊️</Text>
            )
        }
    },
    Activity: {
        screen: Activity,
        navigationOptions: {
            tabBarOptions : {
                style: style.tabBarStyling
            },
            tabBarLabel : 'Activity',
            tabBarIcon : () => (
                <Text style={{fontSize:20}}>🌱</Text>
            )
        }
    },
    Profile: {
        screen: Profile,
        navigationOptions: {
            tabBarOptions : {
                style: style.tabBarStyling
            },
            tabBarLabel : 'Profile',
            tabBarIcon : () => (
                <Text style={{fontSize:20}}>👤</Text>
            )
        }
    }
});

export default createAppContainer(TabNavigator);
