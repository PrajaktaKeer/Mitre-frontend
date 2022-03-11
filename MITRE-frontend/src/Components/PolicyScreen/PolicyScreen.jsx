import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import  Button  from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router';
import './policyscreen.css';
// import { Button } from 'bootstrap';
import upload from '../../images/upload.png'
import axios from 'axios';

const PolicyScreen=props=>{

    function uploadFile(e) {
        e.preventDefault();
        const fileUpload=e.target.files[0];
        const formData = new FormData();
        formData.append("file", fileUpload);
        console.log(formData)
        axios
          .post("http://127.0.0.1:5000/upload", formData)
          .then(res => console.log(res))
          .catch(err => console.warn(err));
    }

    return(
          
        <div className = "policy">
            <div className="policy_title">
                <h1> Upload a Report</h1>
                <img src={upload} alt=""/>
            </div>
            

            <div className="policy_searchbar">
                Choose a File :
                <input className = "input-section" type="file" name="file" onChange={uploadFile}/>
            </div>

            <h1 className = "policy_result">Search Results</h1>
            {/* <FontAwesomeIcon  id="i" className="fas" icon={faSearch} />      */}
        </div> 
    );



};


export default PolicyScreen