import cities from '../Actions/Types'

const initialState = {}

const CityReducer = (state = initialState, action) => {
    console.log(action)
    switch (action.type) {
        case 'GETCITIES_SUCCESS': {
            return action.payload.data
        }
        default:
            return state
    }
}

export default CityReducer
