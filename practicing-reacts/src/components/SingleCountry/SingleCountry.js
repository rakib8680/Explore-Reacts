import React from 'react';
import './SingleCountry.css'

function SingleCountry(props) {
    const { name, population, region, area } = props.country
    return (
        <div className='country'>
            <h4>Name: {name.common}</h4>
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Area: {area} sq/km</p>
        </div>
    )
}

export default SingleCountry;