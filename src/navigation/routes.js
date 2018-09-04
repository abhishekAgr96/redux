
import React, {Component} from 'react';
import {SignUp} from '../components/signUp'
import SignInContainer from '../reduxCode/container/container'
 import {Profile} from '../components/profile'
// import {Dashboard} from './dashboard'
 import {createStackNavigator,createBottomTabNavigator} from 'react-navigation';
// import {Settings} from './settings'
// import {UserList} from './userList'


export const StackNavigation = createStackNavigator({
 
  SignIn: { screen:SignInContainer},
  SignUp: { screen:SignUp },
//   UserList:{screen:UserList}, 
  Profile:{screen:Profile},
},
);

