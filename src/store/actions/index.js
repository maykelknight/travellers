export function filterTrips (payload) {
    return {
        type: 'FILTER_TRIPS',
        payload
    }
}

export function addAsync (payload) {
    console.log('add', payload );
    return {
        type: 'ADD',
        payload
    }
}

export function adda (payload) {
    console.log('adda');
    return dispatch => {
        setTimeout(() => {
            dispatch(addAsync(payload))
        }, 5000)
    }
}
