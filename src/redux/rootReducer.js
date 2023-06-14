import {combineReducers} from "redux";
import counterReducer from "./settings/settingReducers";


const rootReducer = combineReducers({
    counter: counterReducer,
    
})

export default rootReducer;