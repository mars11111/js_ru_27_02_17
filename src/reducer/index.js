import {combineReducers} from 'redux'
import articleReducer from './articles'
import counterReducer from './counter'
import idsReducer from './ids'


export default combineReducers({
    articles: articleReducer,
    count: counterReducer,
    ids: idsReducer
    // articles: [articleReducer, filterReducer]
})