import './house.css'
import React, { useState } from 'react';
import icon from './icon.png' 
import Inquiry from './Inquiry';

const House = ({ house }) => {

    const [inquiryShown, setInquireShown] = useState(false);
    const inquiryClick = ()=>{
       setInquireShown(!inquiryShown);
    }
    
    return (
        <div>
            <div className='row'>
                <h3 className='col-md-12'>{house.country}</h3>
            </div>
            <div className='row'>
                <h3 className='col-md-12'>{house.address}</h3>
            </div>
            <div className='row'>
                <div className='col-md-7'>
                    <img src={`/images/${house.photo}.jpeg`} alt='house'/>

                </div>
                <div className='col-md-5'>
                    <p className='price'>${house.price}</p>
                    <p>${house.description}</p>
                    <img src={icon} alt='feedback' height='50px'
                        //the onclicke makes ssure the state of the form 
                        onClick={inquiryClick}
                    />
                    {inquiryShown && <Inquiry house={house}/>}
                    
                </div>
            </div>
        </div>
    );
};

export default House;
