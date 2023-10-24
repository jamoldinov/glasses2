 import {configureStore} from "@reduxjs/toolkit"
import basketReducer from "../feature/basketClice"



 export const store = configureStore({
    reducer: {
        basket: basketReducer
    }
 })