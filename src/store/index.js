import { createStore, combineReducers } from 'redux';
import { initDataReducer } from './reducers/initDataReducer'

const rootReducer = combineReducers({
  dataAll: initDataReducer
})

export default createStore(rootReducer)