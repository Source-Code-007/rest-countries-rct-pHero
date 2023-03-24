import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
    let [countries, setCountries] = useState([])
    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])
    return (
        <div className="container max-w-7xl mx-auto">
            <div className='countries'>
                {
                    countries.map(country=> <Country key={country.cca2} country={country} />)
                }
            </div>
                <div className='loader -z-10 absolute left-2/4 top-2/4 h-20 w-20 border-l-4 border-l-red-500 rounded-full animate-spin'></div>
        </div>
    );
};

const Country = (props) => {
    let { region, name, population, flags } = props.country
    document.querySelector('.loader').style.display = 'none' //The loader is hidden when the data is loaded
    return (
        <div className='country'>
            <img src={flags.png} alt="" />
            <h2>Name: {name.common}</h2>
            <h2>Region: {region}</h2>
            <h2>Population: {population}</h2>
        </div>
    );
};


export default Countries;   