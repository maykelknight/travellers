import React from 'react';

export default function StarComponent ({rate, onRatingChange}) {

    function setRating (event) {
        console.log(event.target.value);
        onRatingChange(event.target.value)
    }

    function createStars () {
        let items = [];
        for (let i = 5; i > 0; i--) {
            items.push(
                <>
                    <input type="radio" className="rating-input"
                           id={"rating-input-1-" + i} name="rating-input-1" value={i}/>
                    <label htmlFor={"rating-input-1-" + i} className="rating-star"/>
                </>
            )
        }
        return items;
    }

    return (
        <div>
            <span className="rating" onChange={setRating}>
                {createStars()}
            </span>
        </div>

    )
}
