import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import ChismeList from './components/chismesList';
import * as serviceWorker from './serviceWorker';

import { Provider } from 'react-redux';
import {BrowserRouter as Router, Route,} from 'react-router-dom';

import configureStore from './configureStore';

const post_variable = '/post';

const store = configureStore();

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <div className="app">
        <Route exact path='' component={() => <App />} />
        <Route exact path={post_variable} component={() => <ChismeList /> } />
      </div>
    </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
