import React, { useState } from 'react';
import emailjs from 'emailjs-com';

const Inquiry = () => {
    const [contactInfo, setContactInfo] = useState(
        {
            name: '',
            email: '',
            remarks: ''
        }
    );
    const onChange = (e)=>{
        //update the contact info
        //we are updatting the setContact info with the new contactInfo
        //also keeping in mind the previous value
        setContactInfo({...contactInfo,[e.target.id]:e.target.value})
    };
    const onSubmit = (e)=>{
        e.preventDefault();
        //prints the deatils entered by user in console
        console.log(contactInfo);

        //serviceID- service_7somf6l
        //templateID
        //target
        //userID
        emailjs.sendForm('service_7somf6l','template_fkp58z3',e.target,'user_qm9Bj4nt6HFz0Jm2C57PZ')
            .then((result)=>{
                console.log(result.text)
            }, (error)=>{
                console.log(error.text);
            });
            e.target.reset();
    };
    return (
        <form className='mt-2' onSubmit={onSubmit}>
            {/* for and id should be same */}
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input id='name' name='name' className='form-control' type='text' placeholder='Name' value={contactInfo.name} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='email'>Email</label>
                <input id='email' name='email' className='form-control' type='email' placeholder='Email' value={contactInfo.email} onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='remarks'>Remarks</label>
                <input id='remarks' name='remarks' className='form-control' type='remarks' placeholder='Remarks' value={contactInfo.remarks} onChange={onChange}/>
            </div>
            {/* if any of them is false then do no enable the button */}
            <input type='submit' value='submit' className='btn btn-primary mt-3' disabled={!contactInfo.name || !contactInfo.email}/>
        </form>
    );
};

export default Inquiry;

//service num - service_7somf6l
//userID - 
//
//emailjs.send("service_7somf6l","template_fkp58z3");

//whenever a form is submitted, in input tag it looks for a name, in the scripting
//languages. the values are accessed based on the name