/*Main reducer index page*/

import { combineReducers } from "redux";
import techReducer from "./techniques";
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from 'redux-thunk';


//rootReducer which combines all reducers
const rootReducer=combineReducers({

  techniqueObj:techReducer
  
});
//middleware
const middleware=[thunk];

//creating store with middleware and rootReducer
const store=createStore(rootReducer,[],composeWithDevTools(applyMiddleware(...middleware)));

//exort store to be used as central state.
export default store;