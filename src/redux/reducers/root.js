import { combineReducers } from 'redux'
import basicReducer from './basic'

const rootReducers = combineReducers({
    basic: basicReducer
})

export default rootReducers