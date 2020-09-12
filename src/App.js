import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Route } from 'react-router-dom';
import signUp from './container/signUp';
import {store, persistor} from './store/configureStore';
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
         <Route exact path="/" component={signUp}/>
        </BrowserRouter>
    </Provider>
  );
}

export default App;
