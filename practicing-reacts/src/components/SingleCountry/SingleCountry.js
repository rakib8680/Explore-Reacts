import React from 'react';

function SingleCountry(props) {
    return (
        <div>
            <h4>Name: {props.name}</h4>
            <p>Population : {props.population}</p>
        </div>
    )
}

export default SingleCountry;