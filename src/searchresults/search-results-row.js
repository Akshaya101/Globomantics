import React from 'react';
import { useHistory } from 'react-router-dom';

const SearchResultsRow= ({house}) => {
    //when row is clicked we want to change the URL
    const history = useHistory();

    const setActive = ()=>{
        history.push(`/house/${house.id}`);
    };
    return (
        <tr onClick={setActive}>
            <td>
                {house.address}
            </td>
            <td>
                {house.price}
            </td>
            <td>
                {house.likes}
            </td>
        </tr>
    );
};

export default SearchResultsRow;