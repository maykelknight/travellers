import React from 'react';
import {connect} from "react-redux";
import {filterTrips} from "../store/actions/trips";
import StarRating from "./StarRating";


const mapStateToProps = state => (
    {
        filteredTrips: state.trips.filteredTrips,
        minCost: state.trips.minCost,
        maxCost: state.trips.maxCost,
        minPeriod: state.trips.minPeriod,
        maxPeriod: state.trips.maxPeriod
    }
);

const mapDispatchToProps = (dispatch) => (
    {
        filterTrips: filter => dispatch(filterTrips(filter))
    }
);

function TripsFilter ({filteredTrips, filterTrips, minCost, maxCost, minPeriod, maxPeriod}) {

    const [place, changePlace] = React.useState('');
    const [maxPrice, changeMaxPrice] = React.useState(maxCost);
    const [periodInDays, changePeriodInDays] = React.useState(minPeriod);

    function onPlaceInput (e) {
        console.log('Change', e.target.value);
        changePlace(e.target.value);
        filterTrips({
            filterName: e.target.name,
            filterValue: e.target.value
        })
    }

    function onMaxPriceChanged (e) {
        changeMaxPrice(e.target.value);
        filterTrips({
            filterName: e.target.name,
            filterValue: e.target.value
        })
    }

    function onPeriodInDaysChanged (e) {
        changePeriodInDays(e.target.value);
        filterTrips({
            filterName: e.target.name,
            filterValue: e.target.value
        })
    }

    function onRatingChange (value) {
        filterTrips({
            filterName: 'rating',
            filterValue: value
        });
    }

    function setRangeFill(value, minValue, maxValue) {
        let fillPercentage = ((value - minValue) / (maxValue - minValue)) * 100;
        return {
            background: `linear-gradient(90deg, #5F65AF ${fillPercentage}%, rgb(214,214,214) 0%)`
        }
    }

    return (
        <>

            <i className="fa fa-search trip-filters__search-icon"></i>

            <p className="trip-filters__header has-text-centered">Use filters to find trip which suits your needs best</p>
            {/*Location*/}
            <div className="trip-filters__section">
                <div className="filter-label">
                    <h3 className="is-size-6">Location</h3>
                </div>
                <input type="text" value={place} name="place" onChange={onPlaceInput}/>
            </div>

            {/*max price*/}
            <div className="trip-filters__section">

                <div className="filter-label">
                    <h3 className="is-size-6">Max price:</h3>
                    <span className="has-text-weight-bold">{maxPrice}$</span>
                </div>
                <input type="range"
                       className="range-slider"
                       name="cost"
                       style={setRangeFill(maxPrice, minCost, maxCost)}
                       min={minCost}
                       max={maxCost}
                       onChange={onMaxPriceChanged}
                       value={maxPrice}
                />
            </div>

            {/*period in days*/}
            <div className="trip-filters__section">
                <div className="filter-label">
                    <h3 className="is-size-6">Minimal period:</h3>
                    <span className="has-text-weight-bold">{periodInDays} days</span>
                </div>
                <input className="range-slider"
                       type="range"
                       name="periodInDays"
                       min={minPeriod}
                       max={maxPeriod}
                       style={setRangeFill(periodInDays, minPeriod, maxPeriod)}
                       onChange={onPeriodInDaysChanged}
                       value={periodInDays}

                />
            </div>

            {/*hotel stars*/}
            <div className="trip-filters__section">
                <div className="filter-label">
                    <h3 className="is-size-6">Minimal rating</h3>
                </div>
                <StarRating onRatingChange={onRatingChange}/>
            </div>

        </>
    )
}

const List = connect(mapStateToProps, mapDispatchToProps)(TripsFilter);
export default List;
