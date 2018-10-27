
import {
    createStore,
    combineReducers,
    applyMiddleware
} from 'redux';

import Thunk from 'redux-thunk';
import Logger from 'redux-logger';
import Promise from 'redux-promise-middleware';

import Language from './Reducers/language';
import Common from './Reducers/common';
import Home from './Reducers/home';

export default createStore(
    combineReducers({
        Common,
        Language,
        Home
    }),
    {},
    applyMiddleware(
        Thunk,
        Promise(),
        Logger
    )
);