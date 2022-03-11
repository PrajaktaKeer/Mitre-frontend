import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import  Button  from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router';
import './policyscreen.css';
// import { Button } from 'bootstrap';
import upload from '../../images/upload.png'

const PolicyScreen=props=>{

    const hiddenFileInput=React.useRef(null);
    const handleClick=event=>{
        hiddenFileInput.current.click();
    }
    const handleChange=event=>{
        const fileUpload=event.target.files[0];
        props.handleFile(fileUpload);
    }
    return(
          
        <div className = "policy">
            <div className="policy_title">
                <h1> Upload a Report</h1>
                <img src={upload} alt=""/>
            </div>
            

            <div className="policy_searchbar">
                Choose a File :
                <input   type="file" className = "input-section" ref={hiddenFileInput} onChange={handleChange}/>

            </div>

            <h1 className = "policy_result">Search Results</h1>
            {/* <FontAwesomeIcon  id="i" className="fas" icon={faSearch} />      */}
        </div> 
    );



};


export default PolicyScreen