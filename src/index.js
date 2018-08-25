import React from 'react';
import ReactDOM from 'react-dom';
import {Provider } from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import { searchRobots, getRobots } from './reducers';
import {whyDidYouUpdate} from 'why-did-you-update';

import 'tachyons';

const logger = createLogger();
const rootReducer = combineReducers({searchRobots, getRobots})
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));
whyDidYouUpdate(React);

ReactDOM.render(
    <Provider store={store}>
        <App />
     </Provider>, document.getElementById('root'));
registerServiceWorker();
