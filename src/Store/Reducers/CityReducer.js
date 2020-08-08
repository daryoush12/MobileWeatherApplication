import actions from '../Actions/Types'

const initialState = {}

const CityReducer = (state = initialState, action) => {
    switch (action.type) {
        case actions.cities.GET_CITIES_SUCCESS: {
            return action.payload.data
        }
        case actions.cities.GET_CITIES_BY_SEARCHVALUE: {
            return {
                ...state,
                filteredData: state.list.filter((city) => city.name.includes(action.payload.name)),
            }
        }
        default:
            return { ...state }
    }
}

export default CityReducer
