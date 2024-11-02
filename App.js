// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import store from './src/toolkit/store';
import MianNavigation from './src/routes/MainNavigation';
import { GestureHandlerRootView } from 'react-native-gesture-handler';



const App = () => {
  return (
    <GestureHandlerRootView>
      <Provider store={store}>
        <NavigationContainer>
          <MianNavigation />
        </NavigationContainer>
      </Provider>
    </GestureHandlerRootView>
  );
};

export default App;
