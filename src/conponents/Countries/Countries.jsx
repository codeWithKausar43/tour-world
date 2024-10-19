import { useEffect } from "react";
import { useState } from "react";
import Country from "../Country/Country";

 const Countries = () => {
    const [countries,setCountries] = useState([])
    const [visited,setvisited] = useState([])
    useEffect( () =>{
        fetch("https://restcountries.com/v3.1/all")
        .then(res => res.json())
        .then(data => setCountries(data))
    },[])
    const visitedCountry = (countrys) =>{
         console.log(countrys)
         const newArray  = [...visited, countrys]
         setvisited(newArray)
    }


    return (
        <div>
            <div>
                <h5>visited country : {visited.length}</h5>
                <ul>
                        {
                            visited.map(country =><li>{country.name.common} <img src={country.flags.png}></img></li>)
                     }
                </ul>
                     
                

            </div>
            <h3>Countries : {countries.length}</h3>
            <div className="country-container">
                  {
                      countries.map(country => <Country key={countries.cca3} visitedCountry={visitedCountry}  country={country}></Country>)
                  }
                  
            </div>
             
        </div>
    );
 };
 
 export default Countries;