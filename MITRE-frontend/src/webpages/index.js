import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Model from '../Components/Model/Model';
import NavigationBar from '../Components/Navbar/navbar';
import PolicyScreen from '../Components/PolicyScreen/PolicyScreen';
import Home from './Home';

const Webpages = () => {
    return(
        <Router>
            <NavigationBar />

            <Routes>
                <Route exact path="/" element= {<Home />} />
                <Route path = "/policy" element = { <PolicyScreen />} />
                <Route path = "/model" element = {<Model />} />
            </Routes>
        </Router>
    );
};export default Webpages;