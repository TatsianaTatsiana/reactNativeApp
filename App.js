/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { Provider } from 'react-redux';
import { NavBar } from './src/components/NavBar';

import AppNavigation from './src/navigation/AppNavigation';
import store from './src/store';


const App = () => {
  return (
    <Provider store={store}>
      <NavBar />
      <AppNavigation />
    </Provider>
  );
};


export default App;
