import React, {useEffect} from "react";
import {getTrips} from "../store/actions/trips";
import {connect} from 'react-redux';
import ImageSlider from '../components/ImageSlider';
import img2 from '../assets/img/img2.jpg';

function Trip (props) {

    useEffect(() => {
        props.getTrips();
    }, []);

    const {match: {params}} = props;
    const trip = props.trips.find(trip => trip.id.toString() === params.id.toString());

    var el = null;

    if (trip) {

        const firstSection = (
            <div className="section trip-page__main-info">
                <div className="columns">
                    <div className="column is-three-fifths">
                        <ImageSlider images={trip.images}/>
                    </div>
                    <div className="column">
                        <h2 className="is-size-3 is-size-4-mobile label-with-line">{trip.place}</h2>
                        <p>{trip.description}</p>
                    </div>
                </div>
            </div>
        );

        const secondSection = (
            <div className="section trip-page__extras">
                <div className="columns ">
                    <div className="column">
                        <h2 className="is-size-3 is-size-4-mobile label-with-line">Extras</h2>
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

                <div className="section trip-page__description">
                    <div className="has-text-weight-bold is-size-3 is-size-4-mobile label-in-lines">The deal</div>
                    <div>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid asperiores commodi cupiditate deleniti dignissimos dolorem ducimus enim fuga magnam nesciunt nulla numquam, officiis praesentium quidem repellat similique tempora veritatis vero.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa est ipsam numquam obcaecati praesentium repudiandae velit! Blanditiis deleniti ducimus eligendi, est facilis ipsum quam tempore ullam voluptas voluptates. Assumenda.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur eaque earum eligendi eum hic illum in laboriosam, laborum nihil optio perferendis porro, possimus praesentium quasi reiciendis similique soluta sunt, vitae?
                    </div>
                </div>

                {secondSection}

                <div className="section trip-page__description">
                    <div className="has-text-weight-bold is-size-3 is-size-4-mobile label-in-lines">Whats included</div>
                    <div>Lorem ipsum orem ducimus enim fuga magnam nesciunt nulla numquam, officiis praesentium quidem repellat similique tempora veritatis vero.
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa est ipsam numquam obcaecati praesentium repudiandae velit! Blanditiis
                        deleniti ducimus eligendi, est facilis ipsum quam tempore ullam voluptas voluptates. Assumenda.
                        <br/>
                        <br/>
                        Aliquid culpa est ipsam numquam obcaecati praesentium repudiandae velit! Blanditiis
                        deleniti ducimus eligendi, est facilis ipsum quam tempore ullam voluptas voluptates. Assumenda.
                    </div>
                </div>

                <div className="trip-page__promo">
                    Explore the glamour of {trip.place} with transport included throughout the trip!
                </div>

            </div>
        </div>
    } else {
        //show loader
    }


    return el;
}

const mapStateToProps = state => (
    {
        trips: state.trips.trips,
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        getTrips: filter => dispatch(getTrips(filter)),
    }
);

export default connect(mapStateToProps, mapDispatchToProps)(Trip);
