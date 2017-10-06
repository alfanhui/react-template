import React from 'react';
import {render} from 'react-dom';
import {createStore} from 'redux';
import {Provider} from 'react-redux';
import Root from './components/Root'
import {BrowserRouter} from 'react-router-dom';
import reducer from './reducers/index';
require('./favicon.ico');
import './styles/styles.scss'; //You can import SASS/CSS files too! Webpack will run the associated loader and plug this into the page.

const store = createStore(reducer);

const App = (props) => (
    <div>
      {/*<Header/>*/}
      <Root {... props}/>
      {/*<Footer/>*/}
    </div>
);

render(
      <Provider store={store}>
        <BrowserRouter>
          <App/>
        </BrowserRouter>
      </Provider>
    , document.getElementById('root')
);