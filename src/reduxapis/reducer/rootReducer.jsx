import { combineReducers } from "redux";
import alertsSlice from "../slice/alertsSlice";
import { authReducer } from "./loginReducer";

export default combineReducers({
	alerts: alertsSlice,
    auth: authReducer,
});
