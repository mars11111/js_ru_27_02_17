import {createStore, applyMiddleware} from 'redux'
import reducer from '../reducer/index'
import logger from '../middlewares/logger'
import commentIdGenerator from '../middlewares/commentIdGenerator'

const enhancer = applyMiddleware(logger, commentIdGenerator)

const store = createStore(reducer, {}, enhancer)

//dev only
window.store = store

export default store