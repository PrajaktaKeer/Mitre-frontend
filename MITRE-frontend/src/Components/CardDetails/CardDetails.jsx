/*
Details to be shown on each card component like technique-name, ID, description etc.
*/

//import requirements
import React from 'react'
import close from '../../images/circle-close.png'
import './CardDetails.css'



//define component
const CardDetails = (props) => {
    console.log(props.resp);

    return (
        <div>
            <div className = "header">
                <img className = "header-img" src = {close} onClick = {() => props.fun()} alt = "invalid"/>
            <p className = "htext">Card Details</p>
            </div>

            <div className = "details-container">
                <p>Technique Name : {props.resp[0].techniquename} </p> 
                 <p>Description : {props.resp[0].description} </p>
                <p>Subtechniques : {props.resp[0].subtechniques} </p>
                <p>Detection : {props.resp[0].detection} </p>
                <p>Data Sources : {props.resp[0].datasources} </p>  

            </div>
        </div>
    )
}

export default CardDetails
