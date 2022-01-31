import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './Store/store';
import Notes from './Notes';
import CheckedNote from './CheckedNote';
import 'bootstrap/dist/css/bootstrap.min.css';
import Hello from './Hello';
import './style.css';

const App = () => {
  return (
    <Provider store={store}>
      <Notes />
      <CheckedNote />
    </Provider>
  );
};

render(<App />, document.getElementById('root'));
