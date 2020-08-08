import { createStore, applyMiddleware } from 'redux'
import rootReducer from './Reducers/rootReducer'
import axiosMiddleware from 'redux-axios-middleware'
import axios from 'axios'

const AxiosClient = axios.create({
    baseURL: 'http://api.openweathermap.org/data/2.5/',
    responseType: 'json',
})

const store = createStore(rootReducer, applyMiddleware(axiosMiddleware(AxiosClient)))

export default store
