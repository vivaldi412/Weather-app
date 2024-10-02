import React from "react";
import { supabase } from "../DataBaseConfiguration"
import { WeatherContext } from "./WeatherContext";
import WMO from "../assest/WMO/WMO-code-current.json"
import ct from "../assest/googleIcon/calendar_today.svg"
import lo from "../assest/googleIcon/location_on.svg"

export default function Current() {
    const data = React.useContext(WeatherContext)

    const date = new Date();
    let date2 = new Intl.DateTimeFormat('locale',
        {
            month: 'long',
            weekday: 'long',
            day: 'numeric',
        }).format(date)
    const isDay = data?.loc.current.is_day ? WMO[data?.loc.current.weather_code].day.description : WMO[data?.loc.current.weather_code].night.description
    const svgName = data?.loc.current.is_day ? WMO[data?.loc.current.weather_code].day.image : WMO[data?.loc.current.weather_code].night.image



    function wmoSvg(svgName) {
        const { data } = supabase.storage.from('wmo/svg').getPublicUrl(svgName)
        return data.publicUrl
    }






    // console.log(data.loc)

    if (data) {
        return (
            <div className="current-box">
                <p id="currentp1">Now</p>
                <div className="current-box-box">
                    <p id="currentp2">{data?.loc.current.temperature_2m}°C</p>
                    <img id="currentimg1" src={wmoSvg(svgName)} />
                </div>
                <p id="currentp3">{isDay}</p>
                <div className="current-line"></div>
                <span id="ct"><img src={ct} /><p id="currentp4">{date2}</p></span>
                <span id="lo"><img src={lo} /><p id="currentp4">{`${data?.ip.city}, ${data?.ip.countryCode} ${data.ip.continentCode}`}</p></span>
            </div>
        )
    }
}