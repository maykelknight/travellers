import React from 'react';
import Trip from "./Trip";

export default function TripsGrid (props) {

    let allTrips = props.trips.map((trip, index) =>
        <Trip trip={trip} key={index}/>
    );

    return (
        <>
            <div className="trips-grid-component">
                {allTrips}
            </div>
        </>
    )
}
