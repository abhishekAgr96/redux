

import React, {Component} from 'react';
import {StackNavigation} from './src/navigation/routes'
import {createStore,applyMiddleware} from 'redux'
import {Provider} from 'react-redux'
import thunk from 'redux-thunk'
import RootReducer from '/home/user/Desktop/reduxProfile/src/reduxCode/reducer/rootReducer.js'

const store = createStore(RootReducer,undefined,applyMiddleware(thunk))
export default class App extends Component {
  render() {
    return (  
      <Provider store={store}>
     <StackNavigation/>
     </Provider>
    );
  }
}

