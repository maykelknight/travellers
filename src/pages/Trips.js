import React, {useEffect} from 'react';
import TripsGrid from "../components/TripsGrid";
import TripsFilter from "../components/TripsFilter";
import {connect} from "react-redux";
import {filterTrips, getTrips} from "../store/actions/trips";


const mapStateToProps = state => ({
    trips: state.trips.trips,
    filteredTrips: state.trips.filteredTrips,
});

const mapDispatchToProps = (dispatch) => (
    {
        filterTrips: filter => dispatch(filterTrips(filter)),
        getTrips: () => dispatch(getTrips()),
    }
);

function Trips ({filteredTrips, getTrips}) {

    useEffect(() => {
        getTrips();
    }, []);

    let searchInfo = null;

    if(filteredTrips.length) {
        searchInfo = <div className="is-size-5 label-in-lines">We found {filteredTrips.length} {filteredTrips.length > 1 ? 'trips' : 'trip'} that met your requirements</div>
    } else {
        searchInfo = <div className="is-size-5 label-in-lines">We didnt found any trip that meets your requirements</div>
    }

    return (
        <>
            <div className="columns ">

                <div className="column is-one-fifth trip-filters">
                    <TripsFilter />
                </div>

                <div className="column">
                    <div className="section has-text-centered">
                        {searchInfo}
                    </div>
                    <TripsGrid trips={filteredTrips}/>
                </div>
            </div>
        </>
    )
}

const TripsPage = connect(mapStateToProps, mapDispatchToProps)(Trips);
export default TripsPage;
