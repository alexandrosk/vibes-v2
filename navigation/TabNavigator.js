import React from 'react';
import {Text} from 'react-native';
import Home from '../screens/Home';
import Search from '../screens/Search';
import Upload from '../screens/Upload';
import Activity from '../screens/Activity';
import Profile from '../screens/Profile';
import style from '../styles';

import {createBottomTabNavigator, createAppContainer} from 'react-navigation';


const TabNavigator = createBottomTabNavigator({
        Home: {
            screen: Home,
            navigationOptions: {
                tabBarLabel: 'Feed',
                tabBarIcon: ({focused}) => (
                    <Text style={{fontSize: 20}}>🌃</Text>
                )
            }
        },
        Search: {
            screen: Search,
            navigationOptions: {
                tabBarLabel: 'Search',
                tabBarIcon: () => (
                    <Text style={{fontSize: 20}}>🔍</Text>
                )
            }
        },
        Upload: {
            screen: Upload,
            navigationOptions: {
                tabBarLabel: 'New post',
                tabBarIcon: () => (
                    <Text style={{fontSize: 20}}>🖊️</Text>
                )
            }
        },
        Activity: {
            screen: Activity,
            navigationOptions: {
                tabBarLabel: 'Activity',
                tabBarIcon: () => (
                    <Text style={{fontSize: 20}}>🌱</Text>
                )
            }
        },
        Profile: {
            screen: Profile,
            navigationOptions: {
                tabBarLabel: 'Profile',
                tabBarIcon: () => (
                    <Text style={{fontSize: 20}}>👤</Text>
                )
            }
        }
    },
    {
        defaultNavigationOptions: {
            tabBarOptions: {
                style: style.tabBarStyling
            },
            headerTintColor: '#D7DEDC',
        },
    }
);

export default createAppContainer(TabNavigator);
