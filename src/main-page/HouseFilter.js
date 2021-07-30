import React from 'react';
import { useHistory } from 'react-router';

const HouseFilter = ({ allHouses }) => {
    //this allHouses is clearly an array
    console.log(allHouses)
    //in sets it will not consider duplicates
    //countries is an array
    const countries = allHouses ? Array.from(new Set(allHouses.map((h) => h.country))) : [];
    //array of countries
    console.log(countries);

    //history hook
    const history = useHistory();
    console.log(history);

    //we use unshift because the first value of the array is set to be null
    //to avoid mapping through null we unshift it
    countries.unshift(null);

    const onSearchChange = (e) => {
        const country = e.target.value;
        //adds something to current URL
        //pushes something to the URL
        console.log(country);
        return history.push(`searchresults/${country}`);
    }

    return (
        <div className='row mt-3'>
            <div className='offset-md-2 col-md-4'>
                Look for your house in a country:
            </div>
            <div className='col-md-4 mb-3'>
                <select className='form-select' onChange={onSearchChange}>
                    {/* //if value is not added the option will not get selected
                    //here we add key, because if it is rerendered, then if key
                    //is absent the options will be selected all the time */}
                    {countries.map((c) =>{
                        return (
                            <option key={c} value={c}>
                            {c}
                            {/* this prints the countries */}
                            {console.log(c)}
                            </option>
                        );
                    }
                    )}
                </select>
            </div>
        </div>
    );
};

export default HouseFilter;

/*
problem here is that the countries are being pushed into the history array or stack but their respective tables are not being displayed, and also the URL is acting wierd
*/