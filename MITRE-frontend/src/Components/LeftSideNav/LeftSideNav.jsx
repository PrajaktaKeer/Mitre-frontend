/*
Left side navigation to view account details along with additional.
*/

//import requirements
import React from 'react'
import './LeftSideNav.css'

import dashboard from '../../images/speedometer.png';
import risk from '../../images/caution-sign.png';
import account from '../../images/acc-vio.png';
import business from '../../images/business-unit.png';
import report from '../../images/search-report.png';


//define component
function LeftSideNav() {
    return (
        <div className = "icon-container1">
            <div className = "icon-item"><img className = "limg" src = {dashboard} alt = "invalid"/><div className = "ltext">Dashboard<hr/></div></div>
            <div className = "icon-item"><img className = "limg" src = {account} alt = "invalid"/><div className = "ltext">Account Violation<hr width="60"/></div></div>
            <div className = "icon-item"><img className = "limg" src = {business} alt = "invalid"/><div className = "ltext">Business Unit<hr width="60"/></div></div>
            <div className = "icon-item"><img className = "limg" src = {risk} alt = "invalid"/><div className = "ltext">Risk Category<hr width="60"/></div></div>
            <div className = "icon-item"><img className = "limg" src = {report} alt = "invalid"/><div className = "ltext">Search Report<hr width="60"/></div></div>
        </div>
       
    )
}

export default LeftSideNav
