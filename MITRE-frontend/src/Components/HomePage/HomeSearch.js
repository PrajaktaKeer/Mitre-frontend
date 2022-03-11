/*Main search on home page*/

import React from 'react';
import './HomeSearch.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'
import {ReactComponent as Search_pic} from '../../images/search_pic_svg.svg';

function HomeSearch() {
    return(
        <>
        
        <div className="searchBox">

            <input className="searchInput"type="text" name="" placeholder="Search"/>
            <button className="searchButton" href="#">
            <FontAwesomeIcon id="i" className="fas" icon={faSearch} />
            </button>

            <div className="search_pic">
                <Search_pic style={{height:'200px', width: '500px', marginTop: 150, marginLeft: 20}}/>
                {/* <img height="200" src={search_pic} alt="Logo" /> */}
            </div>
        
        </div>
        </>
    );
}

export default HomeSearch;