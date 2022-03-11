import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import  Button  from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router';
import './policyscreen.css';
import axios from 'axios';
// import { Button } from 'bootstrap';

const PolicyScreen=props=>{

    // const hiddenFileInput=React.useRef(null);
    // const handleClick=event=>{
    //     hiddenFileInput.current.click();
    // }

    const [file, setFile] = useState();

    const handleChange=event=>{
        const fileUpload=event.target.files[0];
        //props.handleFile(fileUpload);
        setFile(fileUpload);
        //uploadFile(file);
    }

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
        <div className="outer">
             <div className = "search-section">
             <input className = "input-section" type="file" name="file" onChange={uploadFile}/>
                {/* <input   type="file" className = "input-section" ref={hiddenFileInput} onChange={handleChange}/> */}
                {/* <FontAwesomeIcon  id="i" className="fas" icon={faSearch} />      */}
            </div>

            <div className = "search-results"> 
                
            </div>
            
        </div>
    );



};


export default PolicyScreen