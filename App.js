/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import 'react-native-gesture-handler';
import React, { useEffect } from 'react';

import {  useDispatch } from 'react-redux';

import ReactNavigator from './utils/ReactNavigator';
import { getMainUserfromid } from './reducers/UserReducer';



const App = () => {
  const dispatch = useDispatch()
  const id = 1 // is gonna change after auth
  useEffect(() => {
    dispatch(getMainUserfromid(id))
  }, [])


  return (

    <ReactNavigator />

  );
};



export default App;
