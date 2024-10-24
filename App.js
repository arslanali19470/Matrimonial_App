// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import store from './src/toolkit/store';
import MianNavigation from './src/routes/MainNavigation';



const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>

        {/* <StatusBar
          backgroundColor={'transparent'}
          barStyle="dark-content"
          hidden={false}
        /> */}
        <MianNavigation />



      </NavigationContainer>
    </Provider>
  );
};

export default App;
