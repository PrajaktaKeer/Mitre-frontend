/*
Ring view to diaply complete details of clicked/searched input
*/

//import requirements
import React from 'react'
import './RingView.css'



//define component
function RingView(props) {

    let cards = [];



    const getObject = (obj) => {
        if(obj!==null && obj!==undefined) 
            return (
                <div>
                {
                    Object.keys(obj).map((key, i) => (
                    <div key={i}>
                        <span><strong>{key}</strong></span>
                        <span>{obj[key]}</span>
                    </div>
                    ))
                }
                </div>
            );
        else
            return (
                <div></div>
            );
              

    }

    if(props.list!==null) {
        cards=props.list.map((x)=>{
            if(x!=null){

                let sublist = []
                if(x.subtechniques!=null) {
                    x.subtechniques.map((s)=>{
                        sublist.push(s + " , ")
                        return null
                    })
                }

                let dtslist = []
                let dtskeys = []
                console.log("DATA SOURCES : " + JSON.stringify(x.datasources))
                if(x.datasources!=undefined) {
                    dtslist = Object.keys(x.datasources).map((key)=>{
                        return x.datasources[key]                    })
                    console.log(dtslist)
                    dtskeys = Object.keys(x.datasources).map((key)=>{
                        return key
                    })
                    console.log(dtskeys)
                }

                


                return(
                    
                    <div className = "text">
                        <ul>
                            <li><strong style={{color: "#D41D3F"}}>{x.techniquename}</strong></li><br/>
                            <li><strong>ID :</strong> {x.tid}</li><br/>
                            <li><strong>Tactic :</strong> {x.tactic}</li><br/>
                            <li><strong>Platforms :</strong> {x.platforms}</li><br/>
                            <li><strong>Version :</strong> {x.version}</li><br/>
                            <li><strong>Sub-techniques : </strong>{sublist}</li><br/>
                            <li><strong>Sub technique of : </strong>{x.subtechniqueof}</li>
                            <strong>Detection:</strong>
                            <div>
                                {x.detection}
                            </div><br/>
                            <strong>Description:</strong>
                            <div>
                                {x.description}
                            </div><br/>
                            <div>
                                <strong>Mitigations:</strong>
                                {getObject(x.mitigations)}
                            </div><br/>
                            <strong>Data Sources:</strong>
                            <div>

                                {dtskeys}
                            </div>
                            {/* <li>
                                <strong>Data Sources:</strong>
                                <div>{getObject(x.datasources)}</div>
                            </li><br/> */}
                            <li>
                                <strong>Procedure Examples</strong>
                                <div>{getObject(x.procedureexamples)}</div>
                            </li><br/>
                            <li>
                                <strong>Contributers</strong>
                                <div>{x.contributors}</div>
                            </li><br/>
                        </ul>
                    </div>   
                   
                )
            }else return null
            
            
        })    
    }
    



    return (
        <>
        <div className = "header">
        <p className = "htext">Arena</p>
        </div>

        {
        props.list==null?null:
        <div className = "ring-container">
            {cards}
        </div> 
        }
        </>
    )
}

export default RingView
