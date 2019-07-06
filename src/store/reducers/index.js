import trips from '../../const/trips';

const initialState = {
    sumed: 0,
    trips: trips,
    filteredTrips: trips || [],
    filters: {
        place: '',
        cost: '',
        periodInDays: '',
        hotelStars: null,
        mealsInTheHotel: null,
        travelInsurance: null,
        privateCar: null
    }
};

function rootReducer (state = initialState, action) {
    if (action.type === 'ADD') {
        console.log("add retd", action.payload)
        return Object.assign({}, state, {sumed: state.sumed + action.payload})
    }
    if (action.type === 'FILTER_TRIPS') {
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
        if (filters.hotelStars !== '') {
            filteredTrips = filteredTrips.filter(trip => trip.hotelStars >= filters.hotelStars);
        }
        return Object.assign({}, state, {filteredTrips: filteredTrips, filters: filters})
    }
    return state;
}

export default rootReducer;
