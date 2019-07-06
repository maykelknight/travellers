import React from 'react';
import TripsGrid from "../components/TripsGrid";
import TripsFilter from "../components/TripsFilter";
import {connect} from "react-redux";
import {filterTrips, adda} from "../store/actions";


const mapStateToProps = state => ({
    filteredTrips: state.filteredTrips,
    sumed: state.sumed
});

const mapDispatchToProps = (dispatch) => (
    {
        filterTrips: filter => dispatch(filterTrips(filter)),
        add: value => dispatch(adda(value))
    }
);

function Trips ({filteredTrips, sumed, add}) {
    let searchInfo = null;

    function af () {
        console.log('butt');
        add(99);
    }

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
                        <p>Value {sumed} </p>
                        <button onClick={af}>Add</button>

                        <TripsGrid trips={filteredTrips}/>
                    </div>
                </div>



        </>
    )
}

const TripsPage = connect(mapStateToProps, mapDispatchToProps)(Trips);
export default TripsPage;
