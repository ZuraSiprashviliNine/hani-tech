
import React from 'react';
import {render} from 'react-dom';

import App from './Application';

import {Provider} from 'react-redux';

import Store from './store';

import 'swiper/dist/css/swiper.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'animate.css/animate.css';
import './stylesheets/bootstrap.scss';
import './stylesheets/style.scss';

render(
    <Provider
        store={Store}>
        <App />
    </Provider>,
    document.getElementById('root')
);