/*Reducer to update techniques state with constants defined too.*/

import axios from "axios";

//Define constantss
const FETCH_TECHID = 'FETCH_TECHID';
const FETCH_TECHNAME = 'FETCH_TECHNAME';
const FETCH_TECHALL= 'FETCH_TECHALL';
const FETCH_TECHSUB= 'FETCH_TECHSUB';
const FETCH_TECHTACTIC= 'FETCH_TECHTACTIC';


//Define Endpoints and also base path to be mapped
const ENDPOINTS = {
    //"base_path": "/mit/els-api-service",
    //"base_path": "https://a85263f971abe47ee9429220e351b65f-c60ac902f2bae3ba.elb.us-east-1.amazonaws.com/mit/els-api-service",
    "base_path": "http://localhost:8080/",
    "techID": "/techID",
    "techName": "/techName",
    "techTactic": "/techTactic",
    "techSubtechnique": "/techSubtechnique",
    "techSubtechniqueOf": "/techSubtechniqueOf",
    "techAll":"/techAll"
}

//Axios create headers and allow cross origin
const http = axios.create({
    headers: {
        "Content-type": "application/json",
        "Access-Control-Allow-Origin": "*"
    }
});
axios.defaults.headers.post['Access-Control-Allow-Origin'] = '*';


//Define initial state as empty array of techniqueObject
const initialState = {

    techniqueObject: []

};

//Tech reducer mapping state and actions in switch-case
const techReducer = function (state = initialState, action) {
    if (typeof state === 'undefined') state = initialState;


    switch (action.type) {

        case FETCH_TECHID:
            
            return {
                ...state,
                techniqueObject: action.payload
            }
        case FETCH_TECHNAME:

            return {
                ...state,
                techniqueObject: action.payload
            }
        
        case FETCH_TECHALL:
            return{
                ...state,
                techniqueObject:action.payload
            }

        case FETCH_TECHSUB:
            return{
                ...state,
                techniqueObject:action.payload
            }

        case FETCH_TECHSUB:
            return{
                ...state,
                techniqueObject:action.payload
            }

        case FETCH_TECHTACTIC:
            return{
                ...state,
                techniqueObject:action.payload
            }

        default:
            return state;
    }
}

/*
Define all initialised constants, use http to get interact with REST endpoint and dispatch data 
with type and data in payload for mapping in reducer
*/
export const findTechByID = (id) => (dispatch) => {


    http.get(ENDPOINTS.base_path + ENDPOINTS.techID + `/${id}`).then((response) => {

        console.log("RESPONSE " + JSON.stringify(response))
        console.log("RESPONSE data" + JSON.stringify(response.data))
        console.log(typeof(response.data))
        let response_list=[]
        response_list = response.data.map((obj)=>{
            return obj
        })

        dispatch({
            type: FETCH_TECHID,
            payload: response_list
        })
    })
};

export const findTechByName = (name) => (dispatch) => {

    console.log("find tech")
    http.get(ENDPOINTS.base_path + ENDPOINTS.techName + `/${name}`).then((response) => {

        dispatch({
            type: FETCH_TECHNAME,
            payload: response.data
        })
    })
};

export const findTechByAll=(all)=>(dispatch)=>{
    console.log("find tech allll")
    http.get(ENDPOINTS.base_path + ENDPOINTS.techAll + `/${all}`).then((response) => {
        console.log(response.data)
        dispatch({
            type: FETCH_TECHALL,
            payload: response.data
        })
    })
};

export const findTechBySub=(sub)=>(dispatch)=>{
    http.get(ENDPOINTS.base_path + ENDPOINTS.techSubtechnique + `/${sub}`).then((response) => {

        dispatch({
            type: FETCH_TECHSUB,
            payload: response.data
        })
    })
};


export const findTechByTactic=(tactic)=>(dispatch)=>{
    http.get(ENDPOINTS.base_path + ENDPOINTS.techTactic + `/${tactic}`).then((response) => {

        dispatch({
            type: FETCH_TECHTACTIC,
            payload: response.data
        })
    })
};


export default techReducer;