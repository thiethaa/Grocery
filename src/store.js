//import createStore & applyMiddleware,compose
//import Thunk
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {};

const midddleware = [thunk];

const store = createStore (
    rootReducer,
    initialState,
    compose(
        applyMiddleware(...midddleware),
        window.devToolsExtension ? window.devToolsExtension() : f => f
    )
)

export default store;