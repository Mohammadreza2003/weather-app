import {combineReducers} from "redux";
import themeReducer from "./theme/themeReducer";


const rootReducer = combineReducers({
    themeDark: themeReducer,
    
})

export default rootReducer;