import React, { useEffect, useState } from 'react';

const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))

    }, [])

    return (
        <div>
            <h1>All the countries around the world</h1>
            <h3>Available Countries: {countries.length}</h3>
            {
                countries.map(country => <Countries name={country.name.common} population={country.population}></Countries>)
            }
        </div>
    )
};
function Countries(props) {
    return (
        <div>
            <h4>Name: {props.name}</h4>
            <p>Population : {props.population}</p>
        </div>
    )
}

export default Country;