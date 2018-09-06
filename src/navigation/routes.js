
import React, {Component} from 'react';
import {SignUp} from '../components/signUp'
import SignInContainer from '../reduxCode/container/signInContainer'  // for redux
import {SignIn} from '../components/signIn'
 import {Profile} from '../components/profile'
// import {Dashboard} from './dashboard'
 import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
// import {Settings} from './settings'
 import {UserList} from '../components/userLIst'


export const StackNavigation = createStackNavigator({
  
 // SignIn: { screen:SignInContainer },    // for redux
 SignIn: { screen:SignIn },
 SignUp: { screen:SignUp },
  UserList:{screen:UserList}, 
  Profile:{screen:Profile},
},
);

