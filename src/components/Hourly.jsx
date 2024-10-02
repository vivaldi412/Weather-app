import React from "react";
import { supabase } from "../components/DataBaseConfiguration"
import { WeatherContext } from "./WeatherContext";
import WMO from "../assest/WMO/WMO-code-current.json"


export default function Hourly() {
    const data = React.useContext(WeatherContext)
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


    function setHourly(num) {
        return (
            <div className="hourly-d">
                <p style={{ textTransform: "lowercase", fontSize: "1rem" }}>{data?.loc?.hourly.temperature_2m[num]}°C</p>
                <img style={{ width: "3vw" }} src={wmoSvg(data?.loc?.hourly.is_day[num] ? WMO[data?.loc?.hourly.weather_code[num]].day.image : WMO[data?.loc?.hourly.weather_code[num]].night.image)} />
            </div>
        )
    }
    function setTime(num) {
        return (
            <div className="hourly-d2">

                {num === 1 && <img className="time-svg" src={wmoSvg("time-late-night.svg")} />}
                {num === 2 && <img className="time-svg" src={wmoSvg("time-morning.svg")} />}
                {num === 3 && <img className="time-svg" src={wmoSvg("time-late-morning.svg")} />}
                {num === 4 && <img className="time-svg" src={wmoSvg("time-afternoon.svg")} />}
                {num === 5 && <img className="time-svg" src={wmoSvg("time-late-afternoon.svg")} />}
                {num === 6 && <img className="time-svg" src={wmoSvg("time-evening.svg")} />}
                {num === 7 && <img className="time-svg" src={wmoSvg("time-late-evening.svg")} />}

            </div>
        )
    }






    return (
        <div className="hourly-box">
            <p id="currentp1">Hourly Weather</p>
            <div className="hourly-boxd">
                <div className="hourly-d" style={{ borderRadius: "1.1719vw 0px 0px 0px" }}>
                    <p style={{ textTransform: "lowercase", fontSize: "1rem" }}>{data?.loc?.hourly.temperature_2m[0]}°C</p>
                    <img style={{ width: "3vw" }} src={wmoSvg(data?.loc?.hourly.is_day[0] ? WMO[data?.loc?.hourly.weather_code[0]].day.image : WMO[data?.loc?.hourly.weather_code[0]].night.image)} />
                </div>
                {setHourly(1)}
                {setHourly(2)}
                {setHourly(3)}
                {setHourly(4)}
                {setHourly(5)}
                {setHourly(6)}
                {setHourly(7)}
                <div className="hourly-d" style={{ borderRadius: "0px 1.1719vw 0px 0px" }}>
                    <p style={{ textTransform: "lowercase", fontSize: "1rem" }}>{data?.loc?.hourly.temperature_2m[8]}°C</p>
                    <img style={{ width: "3vw" }} src={wmoSvg(data?.loc?.hourly.is_day[8] ? WMO[data?.loc?.hourly.weather_code[8]].day.image : WMO[data?.loc?.hourly.weather_code[8]].night.image)} />
                </div>
            </div>
            <div className="hourly-line"></div>
            <div className="hourly-boxd2">
                <div className="hourly-d2" style={{ borderRadius: "0px 0px 0px 1.1719vw" }}>
                    <img className="time-svg" src={wmoSvg("time-night.svg")} />
                </div>
                {setTime(1)}
                {setTime(2)}
                {setTime(3)}
                {setTime(4)}
                {setTime(5)}
                {setTime(6)}
                {setTime(7)}
                <div className="hourly-d2" style={{ borderRadius: "0px 0px 1.1719vw 0px " }}>
                    <img className="time-svg" src={wmoSvg("time-night.svg")} />
                </div>
            </div>
        </div>
    )
}