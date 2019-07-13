import React, {useEffect} from 'react';
import poster from '../assets/img/poster.jpg';
import img1 from '../assets/img/img1.jpg';

import video from '../assets/video/video.mp4';
import {getTrips} from "../store/actions";

// import trips from '../const/trips';
import TripsGrid from "../components/TripsGrid";
import {connect} from "react-redux";

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

function Homepage ({getTrips, trips}) {

    useEffect(() => {
        getTrips();
    });

    return (
        <>
            <section className="home-section">
                <div className="main-banner">
                    <h1>Welcome to paradise</h1>
                    <div className="video-wrapper">
                        <div className="video-overlay"/>
                        <video autoPlay loop muted poster={poster}>
                            <source src={video} type="video/mp4"/>
                        </video>
                    </div>
                </div>

                <div className="section">
                    <h2 className="is-size-3 has-text-centered">Explore Our Most Popular Tours</h2>
                    <TripsGrid trips={trips}/>
                    <div className="has-text-centered mt60">
                        <a className="button is-primary is-medium is-centered">See more</a>
                    </div>
                </div>

                <div className="columns image-with-description">

                    <div className="column">
                        <img src={img1} className="image"/>
                    </div>

                    <div className="column description">

                        <h3 className="is-size-3 mb20">Liberty Travel’s Exclusive Exotic Vacations</h3>

                        <div className="mb20">
                            Journeys: Visiting Africa, Asia, New Zealand, Australia, the United Arab Emirates, the South Pacific, the Indian Ocean, or South America? Liberty Travel’s Journeys take you
                            to
                            exotic destinations around the world, with your Travel Butler caring for every detail, every step of the way.
                        </div>
                        <div>
                            Escapes: Whether you want to explore the exotic beaches of the Caribbean, delve deeper into Mayan culture in Mexico, explore the rainforest in Costa Rica, or go diving in
                            Hawaii, Liberty Travel’s escapes take your exotic vacation to the next level with authentic local experiences and guided adventures. Plus, you get access to Liberty
                            Travel’s
                            personal concierge and 24-hour emergency priority access.
                            CITYbreaks: The exotic can also be a new city to explore. Whether you want to discover Reykjavik or the catacombs of Rome, Liberty Travel matches you with a City Insider, a
                            local guide.
                        </div>
                    </div>
                </div>

                <div className="section features">
                    <h3 className="is-size-3 mb20 has-text-centered">Cruise Vacation Packages</h3>
                    <ul>
                        <li>
                            <span className="label">All Inclusive</span>
                            <span className="description">Have it all. Accommodations, meals, drinks, entertainment, and activities are all included.</span>
                        </li>
                        <li>
                            <span className="label">Family</span>
                            <span className="description">Experience a vacation with kids, teens, and parents in mind.</span>
                        </li>
                        <li>
                            <span className="label">Honeymoon</span>
                            <span className="description">Before you call your wedding planner, call Liberty Travel for a tailor-made honeymoon package.</span>
                        </li>
                        <li>
                            <span className="label">Casino</span>
                            <span className="description">Toss the dice or spin the wheel at one of our thrilling casino destinations.</span>
                        </li>
                        <li>
                            <span className="label">Exotic</span>
                            <span className="description">Once-in-a-lifetime vacations: think private island in the South Pacific or African safari.</span>
                        </li>
                        <li>
                            <span className="label">Golf and Spa</span>
                            <span className="description"> Tee-off or enjoy a massage at one of our golf or spa resorts.</span>
                        </li>
                        <li>
                            <span className="label">Luxury</span>
                            <span className="description">Opulent accommodations, exquisite cuisine, and personalized service await you.</span>
                        </li>
                        <li>
                            <span className="label">Cruise</span>
                            <span className="description">Sail to popular ports with our cruise vacations.</span>
                        </li>
                    </ul>
                </div>


            </section>
        </>
    )
}

const Home = connect(mapStateToProps, mapDispatchToProps)(Homepage);
export default Home;
