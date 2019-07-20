import Client from '../../Contentful';
import {FILTER_TRIPS, SET_TRIPS, TRIPS_LOADING} from "../actionTypes/trips";

export const filterTrips = payload => ({type: FILTER_TRIPS, payload});
export const setTrips = payload => ({type: SET_TRIPS, payload});
export const tripsLoading = () => ({type: TRIPS_LOADING});

export function getTrips () {
    return dispatch => {
        dispatch(tripsLoading());
        Client.getEntries({content_type: 'travellers'}).then(response => {
            var fields = response.items.map(item => item.fields);
            var parsedTrips = fields.map((field) => {
                return {
                    id: field.id,
                    place: field.place,
                    cost: field.cost,
                    periodInDays: field.periodInDays,
                    mealsInTheHotel: field.mealsInTheHotel,
                    privateCar: field.privateCar,
                    travelInsurance: field.travelInsurance,
                    extras: field.extras,
                    images: field.images.map(image => {
                        console.log(image.fields.file.url);
                        return image.fields.file.url
                    }),
                    description: field.description.content[0].content[0].value,
                    rating: field.rating
                }
            });
            dispatch(setTrips(parsedTrips));
        });
    }
}
