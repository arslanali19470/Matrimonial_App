// src/App.js
import React from 'react';
import { Provider } from 'react-redux';
import Counter from './src/components/Conter';
import store from './src/toolkit/store';

const App = () => {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
};

export default App;
