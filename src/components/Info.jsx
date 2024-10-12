import React, { Children } from "react";
import { supabase } from "../components/DataBaseConfiguration"
import { WeatherContext } from "./WeatherContext";
import WMO from "../assest/WMO/WMO-code-current.json"
import SearchBar from "./SearchBar";

export default function Info(props) {

    // 
    // 
    // 


    return (
        <div className="info-box">
            {/* <p>Weather and Air data: Open-Meteo</p>
            <p>using SupaBase as database</p>
            <p>all SVGs heavily edited by me</p> */}
            <SearchBar />
        </div>
    )
}