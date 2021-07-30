import React from 'react';
import { useParams } from 'react-router-dom';
import House from '.';

const HouseFromQuery = ({allHouses}) => {
    //url has id to get id from url we use useParams
    //array destructuring happens here
    //id is string
    const {id} = useParams();

    const house = allHouses.find( (h)=>h.id === parseInt(id) );

    if(!house) return <div>House cannot be found</div>
    return (
        <House house={house}/>
    );
};

export default HouseFromQuery;