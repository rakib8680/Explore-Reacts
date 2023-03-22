import React, { useEffect, useState } from 'react';
import SingleCountry from '../SingleCountry/SingleCountry';

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
                countries.map(country => <SingleCountry name={country.name.common} population={country.population}></SingleCountry>)
            }
        </div>
    )
};


export default Country;