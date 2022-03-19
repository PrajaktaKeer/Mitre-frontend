import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import  Button  from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/fontawesome-free-solid';
import { Link } from 'react-router';
import './policyscreen.css';
import axios from 'axios';
// import { Button } from 'bootstrap';
import upload from '../../images/upload.png'
//import axios from 'axios';


const PolicyScreen=props=>{

    // const hiddenFileInput=React.useRef(null);
    // const handleClick=event=>{
    //     hiddenFileInput.current.click();
    // }

    const [file, setFile] = useState();
    const [data, setData] = useState([]);

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
          .then((res) => {
              setData(res.data)
              console.log(res.data)
            })
          .catch(err => console.warn(err));
    }

    return(
          
        <div className = "policy">
            <div className="policy_title">
                <h1> Upload a Report</h1>
                <img src={upload} alt=""/>
            </div>
            

            <div className="policy_searchbar">
               
                <input className = "input-section" type="file" name="file" onChange={uploadFile}/>
            </div>

            <div className="policy-table">
                <table>
                    <tr>
                        <th>Sentence</th>
                        <th>Actual ID</th>
                        <th>Predict ID</th>
                    </tr>
                    {
                    data.map((val, key) => {
                        
                        return (

                            <tr key={key}>
                                <td>{val.sentence}</td>
                                <td>{val.predict_id}</td>
                                <td>{val.actual_id}</td>
                            </tr>
                            
                        )
                    })}
                </table>
            </div>

        </div> );

};


export default PolicyScreen;