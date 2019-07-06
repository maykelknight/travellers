import React from 'react';
import { withRouter } from "react-router-dom";

const Trips = ({trip, history}) => {

    function tripStars (rate) {
        let stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(<span className={"star " + (rate >= i ? 'active' : '')}/>)
        }
        return stars
    }

    function test (id) {
        console.log('ASdz');
        history.push("/trips/" + id);
    }
    return (
        <>
            <div className="trip-component">

                <div className="trip-image-wrapper">
                    <img className="trip-image" src={trip.images[0]}/>
                    <span className="trip-price">
                        {trip.cost} $
                    </span>
                </div>

                <div className="trip-details">
                    <p className="trip-name is-size-5">{trip.place}</p>
                    <p className="trip-description">{trip.description.substring(0, 122)}</p>
                    {/*<Link to={`/trips/${trip.id}`}>*/}
                    <p onClick={() => test(trip.id)}>Read more -></p>
                    {/*</Link>*/}

                    <div className="trip-extras">
                        <div className="stars-wrapper">
                            {tripStars(trip.hotelStars)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default withRouter(Trips);
