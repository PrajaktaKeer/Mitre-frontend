import React from 'react';
import { Route,BrowserRouter as Router,Routes } from 'react-router-dom';
import App from './App';
import Navbar from './Components/Navbar/Navbar';
import PolicyScreen from './Components/PolicyScreen/PolicyScreen';

export default(

    <Router >
        <Navbar/>
        <Routes>
        <Route path="/" component={App}/>
        <Route path="/policy" component={PolicyScreen}/>
        </Routes>
    </Router>
)