import { configureStore } from "@reduxjs/toolkit";
import { weatherData } from "./WetherRedux";

export default configureStore({
    reducer:{
        weather:weatherData
    }
})