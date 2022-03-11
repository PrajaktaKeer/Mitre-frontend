/*
Mid-section section-2 with search bar to diplay searched components on screen and add filters
*/

//import requirements
import React, {useState} from 'react';
import 'font-awesome/css/font-awesome.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/fontawesome-free-solid'

import Card from '../Card/Card';
import './section2.css';
import { useDispatch,useSelector } from 'react-redux';
import{
    findTechByID, findTechByName,findTechByAll,findTechBySub, findTechByTactic
} from '../../reducers/techniques';


//define component
const Section2=props=>{

   //useDispatch to dispatch imported reducer functions
    const dispatch=useDispatch();

     //useState hooks to update and set states
    const [searchValue, setVal] = useState('');
    const [searchBy, setsearchBy] = useState('All');
    const [called, setCalled] = useState(false);

    const object=useSelector(state=>state.techniqueObj.techniqueObject);
    
    const onSearchKey=e=>{ 
        setVal(e.target.value);
        console.log(searchValue)
        
    };

    //findBy defined to split searched values and dispatch to respective reducer functions
    const findBy=()=>{

        setCalled(true);
        console.log("searchby" + searchBy)
        switch(searchBy) {
            case 'ID': dispatch(findTechByID(searchValue));
                        break;
            case 'Tech': dispatch(findTechByName(searchValue));
                         break;
            case 'All':dispatch(findTechByAll(searchValue));
                        break;
            case 'Subtech':dispatch(findTechBySub(searchValue));
                            break;
            case 'Tactic':dispatch(findTechByTactic(searchValue));
                            break;
            default: break;
        }
        

    };
    
    //set searched value
    const handleSelect = (e) => {
        console.log("handle select "+ e.target.value)
        setsearchBy(e.target.value)
    }

    //set list if object not null
    if(object!==null) {
        props.setList(object);
        
    }

    return(
        <div className="outer">
             <div className = "search-section">
                <select className="dropdown" name="findby" onChange={handleSelect}>
                    <option value="All" id="dropdown-content">All</option>
                    <option value="ID" id="dropdown-content">ID</option>
                    <option value="Tech" id="dropdown-content">Technique</option>
                    <option value="Subtech" id="dropdown-content">Subtechnique</option>
                    <option value="Tactic" id="dropdown-content">Tactic</option>     
                </select> 
                <input  onChange={onSearchKey} className = "search-bar1"/>
                <FontAwesomeIcon onClick={findBy} id="i" className="fas" icon={faSearch} />     
            </div>

            <div className = "search-results"> 
                <div>{
                object==null?null:(called && <Card ID={searchValue} list={object} setSelectedCard={props.setSelectedCard}/>)
                }</div>
            </div>
            
        </div>
    );
};

export default Section2;
