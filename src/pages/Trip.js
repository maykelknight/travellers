import React from 'react';
import trips from '../const/trips';

export default function Trip (props) {
    const {match: {params}} = props;
    const trip = trips.find(trip => trip.id.toString() === params.id.toString());
    console.log('trip', trips, trip, params.id);
    return (
        <>
            <div className="container">
                <div className="section">
                    <div className="columns">
                        <div className="column is-three-fifths">
                            <img src={trip.images[0]}/>
                        </div>
                        <div className="column">
                            <h2 className="is-size-3">{trip.place}</h2>
                            <p>{trip.description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
