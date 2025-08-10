import userReducer from './user/userSlice'
import { combineReducers, configureStore } from "@reduxjs/toolkit";
const rootReducer = combineReducers({
  user:userReducer
})
const store=configureStore({
    reducer: rootReducer
})
export default store