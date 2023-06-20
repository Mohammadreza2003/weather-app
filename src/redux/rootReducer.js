import {combineReducers} from "redux";
import settingsReducer from "./settings/settingReducers";


const rootReducer = combineReducers({
    changeTheme: settingsReducer,
    
})

export default rootReducer;