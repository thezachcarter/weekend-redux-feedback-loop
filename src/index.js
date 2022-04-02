import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker'
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';

const feedback = {
    feeling: 0,
    understanding: 0,
    support: 0,
    comments: '',
    flagged: false,
    date: Date(),
}

const feedbackReducer = (state = feedback, action) => {
    console.log(state);

    switch (action.type) {
        case 'ADD_FEELING':
            state.feeling = action.payload;
        case 'ADD_UNDERSTANDING':
            state.understanding = action.payload;
        case 'ADD_SUPPORT':
            state.support = action.payload;
        case 'ADD_COMMENTS':
            state.comments = action.payload
        default:
            return state;
    }
}

const storeInstance = createStore(
    combineReducers({
        feedbackReducer,
    }),
    applyMiddleware(logger),
);

ReactDOM.render(<Provider store={storeInstance}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
