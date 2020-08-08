import cities from './Types/index'

export function getCities() {
    return {
        type: 'GETCITIES',
        payload: {
            request: {
                method: 'GET',
                url:
                    'find?lat=40&lon=37.5&cnt=10&units=metric&appid=50f578d622c291089e8f21a8d2730398',
            },
        },
    }
}

export function getCityByName(name) {
    return {
        type: 'FIND_CITIES_BY_SEARCHVALUE',
        payload: {
            name: name,
        },
    }
}
