import React from 'react';
import './SingleCountry.css'

function SingleCountry(props) {
    const { name, population, region, area, flags } = props.country
    return (
        <div className='country'>
            <h2>Name: {name.common}</h2>
            <img src={flags.png} alt="" />
            <p>Population : {population}</p>
            <p>Region : {region}</p>
            <p>Area: {area} sq/km</p>
        </div>
    )
}

export default SingleCountry;