import React from "react";
import { supabase } from "../DataBaseConfiguration"
import { WeatherContext } from "./WeatherContext";
import WMO from "../assest/WMO/WMO-code-current.json"


export default function Daily() {
    const data = React.useContext(WeatherContext)

    // console.log(data.loc.daily)

    let date2 = (date) => new Intl.DateTimeFormat('default',
        {
            month: 'long',
            weekday: 'long',
            day: 'numeric',
        }).format(date)

    function wmoSvg(svgName) {
        const { data } = supabase.storage.from('wmo/svg').getPublicUrl(svgName)
        return data.publicUrl
    }




    return (
        <div className="daily-box">
            <p id="currentp1">7-Day Forecast</p>
            <div className="daily-box-inline" >
                {/* <p className="dailyp">{date2(new Date(data?.loc.daily.time[0]))}</p> */}
                <p className="dailyp">Today</p>
                <img className="dailyimg" src={wmoSvg(WMO[data?.loc.daily.weather_code[0]].day.image)} />
                <p className="dailyp">{data.loc.daily.temperature_2m_max[0]}° / {data.loc.daily.temperature_2m_min[0]}°</p>
            </div>
            <div className="daily-box-inline" >
                <p className="dailyp">{date2(new Date(data?.loc.daily.time[1]))}</p>
                <img className="dailyimg" src={wmoSvg(WMO[data?.loc.daily.weather_code[1]].day.image)} />
                <p className="dailyp">{data.loc.daily.temperature_2m_max[1]}° / {data.loc.daily.temperature_2m_min[1]}°</p>
            </div>
            <div className="daily-box-inline" >
                <p className="dailyp">{date2(new Date(data?.loc.daily.time[2]))}</p>
                <img className="dailyimg" src={wmoSvg(WMO[data?.loc.daily.weather_code[2]].day.image)} />
                <p className="dailyp">{data.loc.daily.temperature_2m_max[2]}° / {data.loc.daily.temperature_2m_min[2]}°</p>
            </div>
            <div className="daily-box-inline" >
                <p className="dailyp">{date2(new Date(data?.loc.daily.time[3]))}</p>
                <img className="dailyimg" src={wmoSvg(WMO[data?.loc.daily.weather_code[3]].day.image)} />
                <p className="dailyp">{data.loc.daily.temperature_2m_max[3]}° / {data.loc.daily.temperature_2m_min[3]}°</p>
            </div>
            <div className="daily-box-inline" >
                <p className="dailyp">{date2(new Date(data?.loc.daily.time[4]))}</p>
                <img className="dailyimg" src={wmoSvg(WMO[data?.loc.daily.weather_code[4]].day.image)} />
                <p className="dailyp">{data.loc.daily.temperature_2m_max[4]}° / {data.loc.daily.temperature_2m_min[4]}°</p>
            </div>
            <div className="daily-box-inline" >
                <p className="dailyp">{date2(new Date(data?.loc.daily.time[5]))}</p>
                <img className="dailyimg" src={wmoSvg(WMO[data?.loc.daily.weather_code[5]].day.image)} />
                <p className="dailyp">{data.loc.daily.temperature_2m_max[5]}° / {data.loc.daily.temperature_2m_min[5]}°</p>
            </div>
            <div className="daily-box-inline" >
                <p className="dailyp">{date2(new Date(data?.loc.daily.time[6]))}</p>
                <img className="dailyimg" src={wmoSvg(WMO[data?.loc.daily.weather_code[6]].day.image)} />
                <p className="dailyp">{data.loc.daily.temperature_2m_max[6]}° / {data.loc.daily.temperature_2m_min[6]}°</p>
            </div>
        </div>
    )
}