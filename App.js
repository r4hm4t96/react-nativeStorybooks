import React,{Component} from 'react';

import {StackNavigator} from 'react-navigation';

import CreateLogin from './src/CreateLogin'
import SplashScreen from './src/SplashScreen'
import HomeScreen from './src/HomeScreen'



const Root  = StackNavigator({
  Login:{screen:CreateLogin},
  HomeScreen:{ screen: HomeScreen},
  SplashScreen:{screen:SplashScreen}
  }, 
  {
    initialRouteName: 'SplashScreen',
    headerMode: 'float',
  }
);


export default class App extends React.Component {

  render() {
    return <Root/>
  }
}
