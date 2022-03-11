/*
Card component to display searched results of search bar.
*/

//import requirements
import React from 'react'
import './Card.css'



//define component
const Card = (props) => {

    let cards = [];

    // console.log("card list "+ JSON.stringify(props.list))

    const handleSelect = (e) => {
        console.log("handle select "+ e.target.value)
        props.setSelectedCard(e.target.value)
    }

    //display all contents of list by mapping
    if(props.list!==null) {

    
        cards=props.list.map((x)=>{
            if(x!=null){
                return(
                    <div className = "card-item" onClick={handleSelect}>
                    
                    <div className = "price" style = {{background: "#D41D3F"}}>{x.tid}</div>
                    {/* <div className = "priority" style = {{background: "#D41D3F"}}>{x.techniquename}</div> */}
                    <div className = "text">
                    <div className = "section">{x.techniquename}</div>
                    <div className = "section">{x.tactic}</div>
                    </div>   
        
                   </div>
                )
            }else return null
            
            
        })
    }

    
    return(
        <div className = "outer-container">
            {cards}
        </div>
    )
}

export default Card;