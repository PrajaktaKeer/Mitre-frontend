import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import './Model.css'


function Model() {

    const [initialData, setInitialData] = useState(null)
    const [scrapperOp, setscrapperOp] = useState(null)

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

  function startScraping() {
    axios({
      method:"GET",
      url: "http://127.0.0.1:8089/scrape",
    })
    .then((response) => {
      const res = response.data
      console.log(res);
      setscrapperOp(res)
    }).catch((error) => {
     if(error.response){
      console.log(error.response)
      console.log(error.response.status)
      console.log(error.response.headers)
     }
   })
  }

    return (
        <div className = "model">
            
            <button className = "scrape_button" onClick = {startScraping}>Scrape Data</button>
            <div className = "scrape_output">
                {scrapperOp}
            </div>

            <button className = "status_button" onClick={showtimestamp}>Show TimeStamp</button>
            {initialData && <div className = "timestamp">
        <h3>Data Scraped on Date: {initialData.curr_date}, Time: {initialData.curr_time}</h3>
            </div>
        }

        </div>
    )
}

export default Model;