import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import App from './App';

import 'bulma/css/bulma.css';
import './styles.scss';

import { carSalesReducer } from './reducers/carSalesReducer';

const store = createStore(carSalesReducer)
const rootElement = document.getElementById('root');
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , rootElement);
