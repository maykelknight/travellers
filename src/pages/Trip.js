import React, {useEffect} from "react";
import {getTrips} from "../store/actions";
import {connect} from 'react-redux';
import ImageSlider from '../components/ImageSlider';
import img2 from '../assets/img/img2.jpg';

function Trip (props) {

    useEffect(() => {
        props.getTrips();
    }, []);

    const {match: {params}} = props;
    const trip = props.trips.find(trip => trip.id.toString() === params.id.toString());
    console.log('trips', props.trips);
    console.log('trip', trip);

    var el = null;

    if (trip) {

        const firstSection = (
            <div className="section main-info">
                <div className="columns">
                    <div className="column is-three-fifths">
                        <ImageSlider images={trip.images}/>
                    </div>
                    <div className="column">
                        <h2 className="is-size-3">{trip.place}</h2>
                        <p>{trip.description}</p>
                    </div>
                </div>
            </div>
        );

        const secondSection = (
            <div className="section extras">
                <div className="columns ">
                    <div className="column">
                        <h2 className="is-size-3">Extras</h2>
                        <ul>
                            {trip.extras.map(extra => <li>{extra}</li>)}
                        </ul>
                    </div>
                    <div className="column">
                        <img src={img2} alt=""/>
                    </div>
                </div>
            </div>
        );

        el = <div className="trip-page">
            <div className="container">
                {firstSection}
                {secondSection}
            </div>
        </div>
    } else {
        //show loader
    }


    return el;
}

const mapStateToProps = state => (
    {
        trips: state.trips,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        getTrips: filter => dispatch(getTrips(filter)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
