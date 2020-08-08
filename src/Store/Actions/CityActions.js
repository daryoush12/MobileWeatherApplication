import actiontypes from './Types/'

export function getCities() {
    return {
        type: actiontypes.cities.GET_CITIES,
        payload: {
            request: {
                method: 'GET',
                url:
                    'find?lat=60.16952&lon=24.93545&cnt=50&units=metric&appid=50f578d622c291089e8f21a8d2730398',
            },
        },
    }
}

export function getCityByName(name) {
    return {
        type: actiontypes.cities.GET_CITIES_BY_SEARCHVALUE,
        payload: {
            request: {
                method: 'GET',
                url: 'weather?q=' + name + '&units=metric&appid=50f578d622c291089e8f21a8d2730398',
            },
        },
    }
}
