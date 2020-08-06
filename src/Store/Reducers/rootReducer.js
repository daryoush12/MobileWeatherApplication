import { combineReducers } from 'redux'
import CityReducer from './CityReducer'

const rootReducer = combineReducers({
    cities: CityReducer,
})

export default rootReducer
