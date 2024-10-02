import React from "react";
import { supabase } from "../DataBaseConfiguration"
import { WeatherContext } from "./WeatherContext";
import WMO from "../assest/WMO/WMO-code-current.json"

export default function Info() {



    return (
        <div className="info-box">
            <p>Weather and Air data: Open-Meteo </p>
            <p>using SupaBase as database</p>
            <p>all SVGs heavily edited by me</p>
        </div>
    )
}