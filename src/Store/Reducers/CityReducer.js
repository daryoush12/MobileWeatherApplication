import actions from '../Actions/Types'

const initialState = {}

const CityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.cities.GET_CITIES_SUCCESS: {
            return { ...state, data: action.payload.data }
        }
        case actions.cities.GET_CITIES_BY_SEARCHVALUE_SUCCESS: {
            return {
                ...state,
                foundCity: action.payload.data,
            }
        }
        case actions.cities.GET_CITIES_BY_SEARCHVALUE_FAILURE: {
            return { ...state, foundCity: undefined }
        }
        default:
            return { ...state }
    }
}

export default CityReducer
