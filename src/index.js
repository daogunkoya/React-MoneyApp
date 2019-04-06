// import 'bootstrap/dist/css/bootstrap.min.css';
// import $ from 'jquery';
// import Popper from 'popper.js';

import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom'
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {createStore,compose,applyMiddleware,combineReducers} from 'redux'
import userReducer from './store/reducers/user'
import senderReducer from './store/reducers/senders'
import receiverReducer from './store/reducers/receiver'
import transactionReducer from './store/reducers/transactions'
import rateReducer from './store/reducers/rate'
import bankReducer from './store/reducers/bank'
import commissionReducer from './store/reducers/commission'
import currenciesReducer from './store/reducers/currencies'
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

    const rootReducer = combineReducers({
        sender:senderReducer,
        receiver:receiverReducer,
        transactions: transactionReducer,
        user:userReducer,
        rate: rateReducer,
        commission:commissionReducer,
        bank:bankReducer,
        currency:currenciesReducer
    })
    const store = createStore(rootReducer , composeEnhancers(
                                                    applyMiddleware(thunk)) );

    //const store = createStore(burgerBuilderReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
    const app = (
        <Provider store = {store}>
            <BrowserRouter>
                <App />
            </BrowserRouter>
        </Provider>
    )

ReactDOM.render(app, document.getElementById('root'));
registerServiceWorker();
