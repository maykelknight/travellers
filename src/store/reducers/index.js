import {FILTER_TRIPS, SET_TRIPS} from "../constants/action-types";
import {findMin, findMax} from "../../helpers/Helpers";

const initialState = {
    sumed: 0,
    trips: [],
    minCost: 0,
    maxCost: 0,
    minPeriod: 0,
    maxPeriod: 0,
    filteredTrips: [],
    filters: {
        place: '',
        cost: '',
        periodInDays: '',
        rating: null,
        mealsInTheHotel: null,
        travelInsurance: null,
        privateCar: null
    }
};

function rootReducer (state = initialState, action) {
    if (action.type === SET_TRIPS) {
        let minCost = findMin(action.payload, 'cost');
        let maxCost = findMax(action.payload, 'cost');
        let minPeriod = findMin(action.payload, 'periodInDays');
        let maxPeriod = findMax(action.payload, 'periodInDays');
        return {...state, trips: action.payload, filteredTrips: action.payload, minCost, maxCost, minPeriod, maxPeriod}
    }
    if (action.type === FILTER_TRIPS) {
        let filters = {...state.filters};
        let filteredTrips = [...state.trips];
        filters[action.payload.filterName] = action.payload.filterValue;
        if (filters.place !== '') {
            filteredTrips = filteredTrips.filter(trip => {
                    return trip.place.toLowerCase().startsWith(filters.place.toLowerCase());
                }
            );
        }
        if (filters.cost !== '') {
            filteredTrips = filteredTrips.filter(trip => trip.cost <= filters.cost);
        }
        if (filters.periodInDays !== '') {
            filteredTrips = filteredTrips.filter(trip => trip.periodInDays <= filters.periodInDays);
        }
        if (filters.rating !== '') {
            filteredTrips = filteredTrips.filter(trip => trip.rating >= filters.rating);
        }
        return Object.assign({}, state, {filteredTrips: filteredTrips, filters: filters})
    }
    return state;
}

export default rootReducer;
