import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import './Scrapebtn.css';

class Scrapebtn extends Component{
    constructor(props){
        super(props)
        this.state = {
            message: ''
        }
    }
    
    scrapedata(){
        this.setState({
            message:'Scraping is In-progress'

        })
    }
    render(){
        return(
            <>
             <button className='scrape_button' onClick={this.scrapedata.bind(this)}>Scrape the data</button>     
            <h3>{this.state.message}</h3>
         </>
        )
    }
}


// function Scrapebtn(){
//     const [initialData, setInitialData] = useState(null)
  
//    function showtimestamp(){
//      axios({
//        method:"GET",
//        url: "/scrape",
//      })
//      .then((response) => {
//        const res = response.data
//        console.log(res)
//      }).catch((error) => {
//       if(error.response){
//        console.log(error.response)
//        console.log(error.response.status)
//        console.log(error.response.headers)
//       }
//     })
    
//    }
//     return(
//       <div className="Status">
//         <button className='scrape_button' onClick={showtimestamp}>Scrape data</button>  
//         {/* <h3>Data Scraped on Date: {initialData.curr_date}, Time: {initialData.curr_time}</h3> */}
//         {/* {initialData && <div>
//           <h3>Data Scraped on Date: {initialData.curr_date}, Time: {initialData.curr_time}</h3>
//               </div>
//           } */}
//       </div>
//     );
//   }
export default Scrapebtn