import React, {useState, useEffect} from 'react';
import axios from 'axios';

function ShowAPI() {

    const [ID, setID] = useState('');
    const [tactic, setTactic] = useState('');
    const [Detection, setDetection] = useState('');

    
    useEffect(() => {
        
        axios.get('http://localhost:8080/findByTactic/Command And Control')
        .then((response) => {
            console.log("hi" + response.data);

            console.log(response.status);
            console.log(response.statusText);
            console.log(response.headers);
            console.log(response.config);
        });


    }, []);

    return(
        <>
        </>
    );

}

export default ShowAPI;