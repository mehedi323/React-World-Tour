import { useEffect } from "react";
import { useState } from "react";
import Countrys from "./Countrys";
import './Country.css'


const Country = () => {
    const [country, setCountry] = useState([]);

    const [visitedCountry , setVisitedCountry] = useState([]);
    const [flagsCountry , setFlagsCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountry(data))
    }, [])

    const handleMarkVisited = countrys =>{ 
        console.log(countrys)
        const newVisitedCountry = [...visitedCountry, countrys];
        setVisitedCountry(newVisitedCountry)
    };
    
    const handleFlagsCountry = countrys =>{
        const newFlagsCountry = [...flagsCountry , countrys];
        setFlagsCountry(newFlagsCountry)
    }

    return (
        <div>
            <h3>Country: {country.length} </h3>
            <h3>Visited Country:  {visitedCountry.length} </h3>
            <ul>
               {
                visitedCountry.map(country=> <li>{country.name.common}</li>)
                }
            </ul>
            <div className="flags-container">
                {
                    flagsCountry.map(country => <img src={country.flags.png}></img>)
                }
            </div>
            <div className="country-container">
                {
                    country.map(countrys => 
                    <Countrys key={Country.cca3} 
                    handleFlagsCountry={handleFlagsCountry}
                    handleMarkVisited={handleMarkVisited}
                    countrys={countrys}></Countrys>)
                }
            </div>
        </div>
    );
};

export default Country;