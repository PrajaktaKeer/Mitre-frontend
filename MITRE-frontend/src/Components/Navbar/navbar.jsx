import React from 'react';
import './navbar.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserCircle } from '@fortawesome/fontawesome-free-solid'
import { Link}  from 'react-router-dom';
import Logo from '../../images/logo.png'
//import search from '../../images/search-glass.png'
//import bell from '../../images/bell.png'
//import profile from '../../images/user.png'

//hello user
const NavigationBar=()=>{

  return(
    <>
    {/* <div className="search-bar" >
      <div className="search-icon">
          <img src={search} style = {{height : "25px", width : "25px"}} alt = "invalid"/>
      </div>

      <input className="search" />
    </div> 

    <img className = "profile" src = {profile} alt = "invalid"/>

    <img className = "bell" src = {bell} style = {{height : "30px", width : "30px"}} alt = "invalid"/>
    
    <svg className = "uo" width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path d="M8.375 0.5V2.25H4.875C3.43563 2.25 2.25 3.43563 2.25 4.875V8.375H0.5V13.625H5.75V8.375H4V4.875C4 4.37975 4.37975 4 4.875 4H8.375V5.75H13.625V0.5H8.375ZM10.125 2.25H11.875V4H10.125V2.25ZM14.5 2.25V4H17.125C17.6203 4 18 4.37975 18 4.875V8.375H16.25V13.625H21.5V8.375H19.75V4.875C19.75 3.43563 18.5644 2.25 17.125 2.25H14.5ZM2.25 10.125H4V11.875H2.25V10.125ZM18 10.125H19.75V11.875H18V10.125ZM2.25 14.5V17.125C2.25 18.5644 3.43563 19.75 4.875 19.75H8.375V21.5H13.625V16.25H8.375V18H4.875C4.37975 18 4 17.6203 4 17.125V14.5H2.25ZM18 14.5V17.125C18 17.6203 17.6203 18 17.125 18H14.5V19.75H17.125C18.5644 19.75 19.75 18.5644 19.75 17.125V14.5H18ZM10.125 18H11.875V19.75H10.125V18Z" fill="white"/>
    </svg>  */}  

    <header className='navbar'>
        <div className="navbar_logo">
          <img src = {Logo} alt=""/>
        </div>
        <div className='navbar__title navbar__item'>
            <Link to="/">Threat Report Mapper</Link>
            </div>
        <div className='navbar__item'>
          <Link to="/policy">Policy</Link>
        </div>
        <div className='navbar__item'>
        <Link to="/model">Model</Link>
          </div>
        <div className='navbar__item'>Sign In</div>
        <div className='navbar__item'>
        <FontAwesomeIcon icon={faUserCircle} size="2x"/>
        </div>
                
    </header>
    </>
);
}


export default NavigationBar;