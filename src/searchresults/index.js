import React from 'react';
import { useParams } from 'react-router';
import SearchResultsRow from './search-results-row';
import './search-results.css';

const SearchResults = ({allHouses}) => {
    //fetches name from the URL
    const {country} = useParams();
    
    const filteredHouses = allHouses.filter((h)=>{
        return(
            h.country === country
        )
    });
    //filtered houses is an array 
    console.log(filteredHouses);
    return (
        <div className='mt-2'>
            <h4>Results for {country} : </h4>
            <table className='table table-hover'>
                <tbody>
                    {filteredHouses.map( (h) => {
                        //displays array of the selected counrty
                        return (
                            <SearchResultsRow key={h.id} house={h}/>
                        )
                    })
                    }
                </tbody>
            </table>
        </div>
    );
};

export default SearchResults;

