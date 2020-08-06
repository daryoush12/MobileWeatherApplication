import cities from '../Actions/Types'

const initialState = {}

const CityReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'GETCITIES_SUCCESS': {
            return action.payload.data
        }
        case 'FIND_CITIES_BY_SEARCHVALUE': {
            return {
                ...state,
                filteredData: state.list.filter((city) => city.name.includes(action.payload.name)),
            }
        }
        default:
            return state
    }
}

export default CityReducer
