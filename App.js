/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import { Provider, useDispatch } from 'react-redux';
import { store } from './store';
import ReactNavigator from './utils/ReactNavigator';
import { fetchAllUsers } from './reducers/UserReducer';


const App = () => {
 
  

  return (
    <Provider store={store} >
      <ReactNavigator />
    </Provider>
  );
};



export default App;
