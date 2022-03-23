import React, { Component, useState, useEffect } from "react";
import axios from "axios";
import './Model.css'


function Model() {

    const [initialData, setInitialData] = useState(null)
    const [scrapperOp, setscrapperOp] = useState(null)


 function showScrapperHistory(){
   axios({
     method:"GET",
     url: "/history",
   })
   .then((response) => {
     const res = response.data
     console.log(res)

     setInitialData(res)
   }).catch((error) => {
    if(error.response){
     console.log(error.response)
     console.log(error.response.status)
     console.log(error.response.headers)
    }
  })

  // console.log(initialData);
  
 }

  function startScraping() {
    axios({
      method:"GET",
      url: "/scrape",
    })
    .then((response) => {
      const res = response.data
      // console.log(res);
      // setscrapperOp(res)
      setscrapperOp(({
        log: res.log,
        date: res.date,
        time: res.time
      }))
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
            <div className="live_scraping">
              <button className = "scrape_button" onClick = {startScraping}>Scrape Data</button>
              {scrapperOp && <pre> <b>Date : </b>{scrapperOp.date} <b>     Time : </b> {scrapperOp.time}</pre>
              }
              <div className = "scrape_output">
                  {scrapperOp && <pre>{scrapperOp.log}</pre> }
              </div>
            </div>
            
            <div className="display_logs">
                  <button className = "status_button" onClick={showScrapperHistory}>Show Scrapper History</button>
                  {/* {initialData && <div className = "timestamp">
              <h3>Data Scraped on Date: {initialData.curr_date}, Time: {initialData.curr_time}</h3>
                  </div> */}
                  <div className="log_output">
                    {/* {initialData} */}

                    <table>
                    <tr>
                      <th>Timestamp</th>
                      <th>Log</th>
                    </tr>

                        {initialData && Object.entries(initialData).map(([key, value]) => (

                          <tr>
                            <td><pre>{key}</pre></td>
                            <td><pre>{value}</pre></td>
                          </tr>
                        // <div> {key} : {value}</div>
                        // <p key = {key}>
                          
                        // </p>
                      ))}
                    </table>

                  
                  </div>
            </div>
        </div>
    )
}

export default Model

