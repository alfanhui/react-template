import React from 'react';
import ReactDOM from 'react-dom';
import {createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import Root from './components/Root';
import {BrowserRouter} from 'react-router-dom';
import reducer from './reducers/index';
require('./favicon.ico');
import './styles/styles.scss'; //You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const store = createStore(
  reducer,
  compose(applyMiddleware(thunk))
);

ReactDOM.render((
      <Provider store={store}>
        <BrowserRouter>
          <Root/>
        </BrowserRouter>
      </Provider>
 ) , document.getElementById('root')
);
