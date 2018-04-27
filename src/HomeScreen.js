"use strict";

import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    Button,
    TextInput,
    Image,
    TouchableOpacity,
    Text,
    ActivityIndicator,
    ToastAndroid,
    StatusBar,
} from 'react-native';

import { TabNavigator } from 'react-navigation';
import InputFile from './components/InputFile';
import ListMenu from './components/ListMenu';
import FlatListComp from './components/FlatListComp';
import Search from './components/SearchBar';

// import ListView from './components/ListView';
import { Icon } from 'react-native-elements';
import { RequestHelper, setInitialRoute } from '../assets/libraries/Helpers';

const TabNavigators = TabNavigator({
    
    
    People: {
        screen: ListMenu, navigationOptions: {
            title: "Tes1",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="home" color='white' />

            ),
        }
    },
    List: {
        screen: InputFile, navigationOptions: {
            title: "Tes2",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="search" color='white' type='octicons' />
            ),
        }
    },
    Dashboard: {
        screen: FlatListComp, navigationOptions: {
            title: "Dashboard",
            tabBarIcon: ({ tintColor }) => (
                <Icon name='plus' type='font-awesome' color='white' />
            ),
        }
    },
    Camera: {
        screen: Search, navigationOptions: {
            title: "Camera",
            tabBarIcon: ({ tintColor }) => (
                <Icon name="heart" type='octicon' color='white' />
            ),
        }
    },
    Logout: {
        screen: ListMenu, navigationOptions: {
            title: "Logout",

            tabBarIcon: ({ tintColor }) => (
                <Icon name="face" color='white' />
            ),
        }
    },
}, {
        tabBarPosition: 'bottom',
        tabBarOptions: {
            showIcon: true,
            showLabel: false,
        },
        swipeEnabled: true,
        initialRouteName: 'Dashboard'
    })


export default class HomeScreen extends Component {
    
    render() {

        return (

            <TabNavigators />

        );

    };
};

