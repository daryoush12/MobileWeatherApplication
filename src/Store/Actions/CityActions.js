import cities from './Types/index'

export function getCities() {
    return {
        type: 'GETCITIES',
        payload: {
            request: {
                method: 'GET',
                url: 'find?lat=55.5&lon=37.5&cnt=10&appid=50f578d622c291089e8f21a8d2730398',
            },
        },
    }
}
