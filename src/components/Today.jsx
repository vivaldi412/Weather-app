import React from "react";
import { supabase } from "../DataBaseConfiguration"
import { WeatherContext } from "./WeatherContext";
import WMO from "../assest/WMO/WMO-code-current.json"

export default function Today() {
    const data = React.useContext(WeatherContext)
    const sunrise = data?.loc?.daily.sunrise[0].split("T")
    const sunset = data?.loc?.daily.sunset[0].split("T")


    function wmoSvg(svgName) {
        const { data } = supabase.storage.from('wmo/svg').getPublicUrl(svgName)
        return data.publicUrl
    }

    function aqi() {
        const USaqi = data?.air?.current?.us_aqi
        if (USaqi > 0 && USaqi <= 50) {
            return (
                <span id="ddd111"><img id="svg111" src={wmoSvg("code-green.svg")} /><p style={{ background: "#50ccaa" }} className="arman">Good</p></span>
            )
        }
        else if (USaqi > 50 && USaqi <= 100) {
            return (
                <span id="ddd111"><img id="svg111" src={wmoSvg("code-yellow.svg")} /><p className="arman" style={{ background: "#f0e641" }}>Moderate</p></span>
            )
        }
        else if (USaqi > 100 && USaqi <= 150) {
            return (
                <span id="ddd111"><img id="svg111" src={wmoSvg("code-orange.svg")} /><p style={{ background: "#f0a741" }} className="arman">Unhealthy for Sensitive Groups</p></span>
            )
        }
        else if (USaqi > 150 && USaqi <= 200) {
            return (
                <span id="ddd111"><img id="svg111" src={wmoSvg("code-red.svg")} /><p style={{ background: "#ff5050" }} className="arman">Unhealthy</p></span>
            )
        }
        else if (USaqi > 200 && USaqi <= 300) {
            return (
                <span id="ddd111"><img id="svg111" src={wmoSvg("code-red.svg")} /><p style={{ background: "#960032" }} className="arman">Very Unhealthy</p></span>
            )
        }
        else if (USaqi > 300 && USaqi <= 350) {
            return (
                <span id="ddd111"><img id="svg111" src={wmoSvg("code-red.svg")} /><p style={{ background: "#7d2181" }} className="arman">Hazardous</p></span>
            )
        }
    }

    function uvIndex() {
        if (data?.air?.current.uv_index < 1) { return (wmoSvg("uv-index-1.svg")) }
        else if (data?.air?.current.uv_index < 2) { return (wmoSvg("uv-index-1.svg")) }
        else if (data?.air?.current.uv_index < 3) { return (wmoSvg("uv-index-2.svg")) }
        else if (data?.air?.current.uv_index < 4) { return (wmoSvg("uv-index-3.svg")) }
        else if (data?.air?.current.uv_index < 5) { return (wmoSvg("uv-index-4.svg")) }
        else if (data?.air?.current.uv_index < 6) { return (wmoSvg("uv-index-5.svg")) }
        else if (data?.air?.current.uv_index < 7) { return (wmoSvg("uv-index-6.svg")) }
        else if (data?.air?.current.uv_index < 8) { return (wmoSvg("uv-index-7.svg")) }
        else if (data?.air?.current.uv_index < 9) { return (wmoSvg("uv-index-8.svg")) }
        else if (data?.air?.current.uv_index < 10) { return (wmoSvg("uv-index-9.svg")) }
        else if (data?.air?.current.uv_index < 11) { return (wmoSvg("uv-index-10.svg")) }
        else if (data?.air?.current.uv_index < 12) { return (wmoSvg("uv-index-11.svg")) }
    }




    // console.log(data)



    return (
        <div className="today-box">
            <p id="currentp1">Today's Highlights</p>
            <div className="today-box-d1">
                <div className="today-d11">
                    <span id="sd11"><p id="currentp5">Air Quality Index</p>{aqi()}</span>
                    <span id="sd12">
                        <img id="sdi12" src={wmoSvg("dust-wind.svg")} />
                        <div className="sdd12"><p id="currentp6">dust</p> <p className="sddpp12">{data?.air?.current.dust}</p></div>
                        <div className="sdd12"><p id="currentp6">NO2</p> <p className="sddpp12">{data?.air?.current.nitrogen_dioxide}</p></div>
                        <div className="sdd12"><p id="currentp6">O3</p> <p className="sddpp12">{data?.air?.current.ozone}</p></div>
                        <div className="sdd12"><p id="currentp6">SO2</p> <p className="sddpp12">{data?.air?.current.sulphur_dioxide}</p></div>
                        <div className="sdd12"><p id="currentp6">CO</p> <p className="sddpp12">{data?.air?.current.carbon_monoxide}</p></div>
                    </span>
                </div>
                <div className="today-d12">
                    <p id="currentp5">Sunrise And Sunset</p>
                    <span id="ds12">
                        <span className="dss12">
                            <img id="sdi12" src={wmoSvg("sunrise.svg")} />
                            <span className="dsss12" id="sunC">
                                <p id="currentp6">Sunrise</p>
                                <p className="sddpp12">{sunrise[1]}</p>
                            </span>
                        </span>
                        <span className="dss12">
                            <img id="sdi12" src={wmoSvg("sunset.svg")} />
                            <span className="dsss12" id="sunC">
                                <p id="currentp6">Sunset</p>
                                <p className="sddpp12">{sunset[1]}</p>
                            </span>
                        </span>
                    </span>
                </div>
            </div>
            <div className="today-box-d2">
                <div className="today-d12C">
                    <p id="currentp5">Precipitation</p>
                    <span className="dss12">
                        <img id="sdi12C" src={wmoSvg("raindrop-measure.svg")} />
                        <p className="sddpp12">{data?.loc?.current.precipitation} mm</p>
                    </span>
                </div>
                <div className="today-d12C">
                    <p id="currentp5">UV Index</p>
                    <span className="dss12" style={{ justifyContent: "space-around" }}>
                        <img id="sdi12C" src={uvIndex()} />
                        <p className="sddpp12">{data?.air?.current.uv_index}</p>
                    </span>
                </div>
                <div className="today-d12C">
                    <p id="currentp5">Humidity</p>
                    <span className="dss12" style={{ justifyContent: "normal", columnGap: "0px", paddingTop: "1.2vh" }} >
                        <img id="sdi12C" style={{ width: "3vw" }} src={wmoSvg("humidity.svg")} />
                        <p className="sddpp12">{data?.loc?.current.relative_humidity_2m} %</p>
                    </span>
                </div>
                <div className="today-d12C">
                    <p id="currentp5" >Pressure</p>
                    <span className="dss12">
                        <img id="sdi12C" src={wmoSvg("barometer.svg")} style={{ filter: "invert(1)" }} />
                        {/* id="svg2" */}
                        <p className="sddpp12">{data?.loc?.current.pressure_msl} hPa</p>
                    </span>
                </div>
            </div>
        </div>
    )
}
// style={{ justifyContent: "center", rowGap: "22px" }}
// justify-content: center
// id="dss12C"