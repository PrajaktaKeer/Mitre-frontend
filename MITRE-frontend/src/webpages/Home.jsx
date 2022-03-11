import React from 'react';
import { Link } from 'react-router-dom';

import NavigationBar from '../Components/Navbar/navbar.jsx';
import Section2 from '../Components/Section2/section2';
import RingView from '../Components/RingView/RingView';
import CardDetails from '../Components/CardDetails/CardDetails'
import {useState} from 'react'

const Home = () => {
    
    //update states using useState hook
    const [isOpened, setIsOpened] = useState(true);
    const [list, setList] = useState(null);
    const [selectedCard, setSelectedCard] = useState(null);
    
    //toggle to open/close cards
    const toggle = () => {
            setIsOpened(isOpened => !isOpened);
        };

    //define object to be displayed as null
    const object=undefined;

    return (
        <div>
            {/* <NavigationBar/> */}
            <Section2 setList={setList} list={list} setSelectedCard={setSelectedCard}/>
            <RingView list={list}/>
            {/* <h1>Hello</h1> */}
        </div>
    );
};

export default Home;