import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import './Scrapebtn.css';

function Status(){
  // const [initialData, setInitialData] = useState([{}])

  // useEffect(()=>{
  //   fetch('/date').then(
  //     response => response.json()
  //   ).then( data => setInitialData(data))
  // },[]);

  const [initialData, setInitialData] = useState(null)

 function showtimestamp(){
   axios({
     method:"GET",
     url: "/date",
   })
   .then((response) => {
     const res = response.data
     setInitialData(({
       curr_date: res.date,
       curr_time: res.time
     }))
   }).catch((error) => {
    if(error.response){
     console.log(error.response)
     console.log(error.response.status)
     console.log(error.response.headers)
    }
  })
  
 }
  return(
    <div className="Status">
      <button className='scrape_button' onClick={showtimestamp}>Show Timestamp</button>  
      {/* <h3>Data Scraped on Date: {initialData.curr_date}, Time: {initialData.curr_time}</h3> */}
      {initialData && <div>
        <h3>Data Scraped on Date: {initialData.curr_date}, Time: {initialData.curr_time}</h3>
            </div>
        }
    </div>
  );
}
// class Status extends Component {
//   constructor(props){
//     super(props)
//     this.state = {
//         message: ''
//     }
// }

// showtimestamp(){
//     this.setState({
//         message:'Scraping is In-progress'
//     })
// }
// render(){
//     return(
//         <>
//          <button className='scrape_button' onClick={this.showtimestamp.bind(this)}>Show Timestamp</button>     
//         <h3>{this.state.message}</h3>
//      </>
//     )
// }
// }
export default Status;