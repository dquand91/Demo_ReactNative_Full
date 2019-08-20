import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';
import { createAppContainer, createStackNavigator, StackActions, NavigationActions } from 'react-navigation'; // Version can be specified in package.json
import { HomeStack, MyTabBar } from './app_navigation/Router';

// Container để chứa cái Navigation
// Sau đó mới gắn cái Container này vô trong App
// const AppContainer = createAppContainer(HomeStack);
const AppContainer = createAppContainer(MyTabBar);

export default class App extends Component {
    render() {
        return (
            <AppContainer />
        );
    }
}