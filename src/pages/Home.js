import React from 'react';
import image from '../assets/img/poster.jpg';
import video from '../assets/video/video.mp4';

import trips from '../const/trips';
import TripsGrid from "../components/TripsGrid";

export default function Home () {
    return (
        <>
            <section className="home-section">
                <div className="main-banner">
                    <h1>Welcome to paradise</h1>
                    <div className="video-wrapper">
                        <div className="video-overlay"/>
                        <video autoPlay loop muted poster={image}>
                            <source src={video} type="video/mp4" />
                        </video>
                    </div>
                </div>

                <div className="section">
                    <h2 className="is-size-3 has-text-centered">Explore Our Most Popular Tours</h2>
                    <TripsGrid trips={trips}/>
                </div>

            </section>
        </>
    )
}
