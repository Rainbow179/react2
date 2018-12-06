


import {createStore,applyMiddleware} from 'redux'; //applyMiddleware应用于异步中间件(这里是thunk)
import thunk from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from './reducers';

export default createStore(reducers,composeWithDevTools(applyMiddleware(thunk)));//applyMiddleware结合插件使用