 import "./Country.css"
 
const Country = ({country}) => {
    console.log(country)
    const {name,flags} = country
    return (
        <div className="style">
            <h4>Name : {name.common}</h4>
            <img src={flags.png}></img>
        </div>
    );
};

export default Country;