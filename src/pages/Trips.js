import React, {useEffect} from 'react';
import TripsGrid from "../components/TripsGrid";
import TripsFilter from "../components/TripsFilter";
import {connect} from "react-redux";
import {filterTrips} from "../store/actions";


const mapStateToProps = state => ({
    trips: state.trips,
    filteredTrips: state.filteredTrips,
});

const mapDispatchToProps = (dispatch) => (
    {
        filterTrips: filter => dispatch(filterTrips(filter)),
    }
);

function Trips ({filteredTrips}) {

    let searchInfo = null;

    if(filteredTrips.length) {
        searchInfo = <div>We found {filteredTrips.length} {filteredTrips.length > 1 ? 'trips' : 'trip'} that meet your requirements</div>
    } else {
        searchInfo = <div>We didnt found any trip that meets your requirements :(</div>
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
