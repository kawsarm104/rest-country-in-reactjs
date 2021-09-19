// import { render } from "@testing-library/react";
import React, { useEffect, useState } from "react";
// import restcountry from './RestCountry'; wrong way to import css
import "./RestCountry.css";
function RestCountry() {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <div>
        <h2>Travelling around the world</h2>
        <h2>Available Countries: {countries.length}</h2>
      </div>
      <div className="container-fluid restcountry-parent row">
        {countries.map((country) => (
          <Country
            // flag={country.flag}
            // name={country.name}
            // capital={country.capital}
            key={country.alpha3Code}// for uniqness
            country={country} // sending full object
          />
        ))}
      </div>
    </div>
  );
}
const Country = (props) => {
    const {flag, name, capital} = props.country
  return (
    <div className="restcountry-child col  border g-3 m-3 p-3 rounded-3 w-75 shadow-sm ">
        <img src={flag} className="" alt="" />
        <h2>Name: {name}</h2>
        <h4>Capital: {capital}</h4>
      </div>
  );
};

export default RestCountry;
