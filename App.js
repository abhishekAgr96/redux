

import React, {Component} from 'react';
import {StackNavigation} from './src/navigation/routes'
import {createStore,applyMiddleware} from 'redux'
// import {Provider} from 'react-redux'
import {Provider} from 'mobx-react'
import thunk from 'redux-thunk'
import RootReducer from '/home/user/Desktop/reduxProfile/src/reduxCode/reducer/rootReducer.js'
import Store from './src/mobexCode/store'

// const store = createStore(RootReducer,undefined,applyMiddleware(thunk))
// const store=new Store()
export default class App extends Component {
  render() {
    return (  
       <Provider store={new Store()}>
     <StackNavigation/>
      </Provider>
    );
  }
}

