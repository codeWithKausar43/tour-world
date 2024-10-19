 import { useCallback, useState } from "react";
import "./Country.css"
 
const Country = ({country, visitedCountry}) => {
    const {name,flags,population,maps} = country

const [vesited,setVesited] = useState(false)

const handleVisitede = () =>{
    setVesited(!vesited)
}
 
 

    return (
        <div className= {`style ${vesited? 'vesited':'black'}` }>
            <h4 style={{color:vesited? 'white' : 'black'}}>Name : {name.common}</h4>
            <img src={flags.png}></img>
            <p>population: {population}</p>
            <p>maps: {maps.googleMaps}</p>
            <button onClick={()=>visitedCountry(country)}>finish</button>
            <br />
            <br />
            <button onClick={handleVisitede}>{vesited ?'vesited' : 'going'}</button>
            
        </div>
    );
};

export default Country;