/*
Right side navigation to view additional informations
*/

//import requirements
import React from 'react'
import './RightSideNav.css'

import settings from '../../images/settings.png';
import video from '../../images/video-camera.png';
import analysis from '../../images/analysis.png';
import location from '../../images/location.png';
import doc from '../../images/google-docs.png';
import history from '../../images/history.png';
import chat from '../../images/chat.png';
import pie from '../../images/piechart.png'


//define component
function RightSideNav() {
    return (
        <div className = "icon-container">
            
            <img className = "rimg" src = {settings} alt = "invalid"/>
            <img className = "rimg" src = {video} alt = "invalid"/>
            <img className = "rimg" src = {analysis} alt = "invalid"/>
            <img className = "rimg" src = {location} alt = "invalid"/>
            <img className = "rimg" src = {doc} alt = "invalid"/>
            <img className = "rimg" src = {history} alt = "invalid"/>
            <img className = "rimg" src = {pie} alt = "invalid"/>
            <img className = "rimg" src = {chat} alt = "invalid"/>
            {/* <img className = "rimg" style = {{marginTop : "80px"}} src = {chat} alt = "invalid"/> */}

        </div>
    )
}

export default RightSideNav
