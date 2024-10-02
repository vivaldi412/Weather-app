import React, { useEffect, useState } from "react";
import { WeatherContext } from "./WeatherContext";

export default function Weather(props) {
    const [apiData, setApiData] = useState()
    const [airApi, setAirApi] = useState()

    const latitude = props.ob.data.lat
    const longitude = props.ob.data.lon


    async function fetchApi() {
        const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}` + `&current=temperature_2m,relative_humidity_2m,apparent_temperature,is_day,precipitation,rain,showers,snowfall,weather_code,cloud_cover,pressure_msl,surface_pressure,wind_speed_10m,wind_direction_10m,wind_gusts_10m&hourly=temperature_2m,weather_code,is_day&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=auto&temporal_resolution=hourly_3`
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setApiData(await json)
        } catch (error) {
            console.error(error.message);
        }
    }

    async function fetchAirApi() {
        const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${latitude}&longitude=${longitude}&current=us_aqi,carbon_monoxide,nitrogen_dioxide,sulphur_dioxide,ozone,dust,uv_index`;
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`Response status: ${response.status}`);
            }
            const json = await response.json();
            setAirApi(await json)
        } catch (error) {
            console.error(error.message);
        }
    }

    const loading = props === undefined ? <div className="loading"></div> : null
    useEffect(() => {
        fetchApi();
        fetchAirApi();
        setTimeout(() => {
            fetchApi();
            fetchAirApi();
        }, 900000);
    }, [])




    let dataPass;
    if (apiData !== undefined) {
        dataPass = {
            ip: props.ob.data,
            loc: apiData,
            air: airApi
        };
    }



    return (
        <>
            {loading}
            <WeatherContext.Provider value={dataPass}>
                {props.children}

            </WeatherContext.Provider>

        </>
    )
}