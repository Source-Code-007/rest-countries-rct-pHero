import React, { useEffect, useState } from 'react';
import './Countries.css'

const Countries = () => {
let [countries, setCountries] = useState([])
useEffect(()=>{
    fetch('https://restcountries.com/v3.1/all')
    .then(res=> res.json())
    .then(data=> setCountries(data))
}, [])
    return (
      <div className="container">
          <div className='countries'>
            {
                countries.map(country=> <Country key={country.cca2} country={country} />)
            }
        </div>
      </div>
    );
};

const Country = (props) => {
    let {region, name, population, flags} = props.country
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