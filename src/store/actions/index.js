import Client from '../../Contentful';
import {SET_TRIPS, FILTER_TRIPS, TRIPS_LOADING} from "../constants/action-types";

export function filterTrips (payload) {
    return {
        type: FILTER_TRIPS,
        payload
    }
}

export function setTrips (payload) {
    return {
        type: SET_TRIPS,
        payload
    }
}

export function tripsLoading() {
    console.log('C');
    return {
        type: TRIPS_LOADING
    }
}

export function getTrips () {
    console.log('B');
    return dispatch => {
        console.log('Dispacz');
        dispatch(tripsLoading());
        Client.getEntries({content_type: 'travellers'}).then(response => {
            console.log('res');
            var fields = response.items.map(item => item.fields);
            console.log('fields', fields);
            var parsedTrips = fields.map((field) => {return {
                id: field.id,
                place: field.place,
                cost: field.cost,
                periodInDays: field.periodInDays,
                mealsInTheHotel: field.mealsInTheHotel,
                privateCar: field.privateCar,
                travelInsurance: field.travelInsurance,
                extras: field.extras,
                images: field.images.map(image => {console.log(image.fields.file.url); return image.fields.file.url}),
                description: field.description.content[0].content[0].value,
                rating: field.rating
            }});
            console.log('fields', fields);
            console.log('parsedTrips', parsedTrips);
            dispatch(setTrips(parsedTrips));
        });
    }
}
