import React from 'react';
import './SingleCountry.css'

function SingleCountry(props) {
    return (
        <div className='country'>
            <h4>Name: {props.name}</h4>
            <p>Population : {props.population}</p>
            <p>Area: {props.area} sq/km</p>
        </div>
    )
}

export default SingleCountry;