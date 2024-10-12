import React, { useEffect, useRef, useState } from "react";
import { WeatherContext } from "./WeatherContext";
import { flushSync } from 'react-dom';


export default function Weather(props) {
    const [apiData, setApiData] = useState()
    const [airApi, setAirApi] = useState()
    const [latitude, setLatitude] = useState(() => props.ob.data.latitude)
    const [longitude, setLongitude] = useState(() => props.ob.data.longitude)
    const [jesus, setJesus] = useState(null)
    const [refresh, setRefresh] = useState(null)
    const someRef = React.useRef(null)
    const timeoutRef = React.useRef(null)
    // const [state, dispatch] = useReducer(reducer, { jesus=null });


    // const jesusRef = useRef(props.jesus)

    // props.ob.data.latitude
    // props.ob.data.longitude
    // flushSync(() => {
    function searchBarPass(n) {
        // if (n !== undefined && n !== null) {
        setJesus(n)
        // }
    }

    // });



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
        if (jesus !== undefined && jesus !== null) {
            setLatitude(jesus[0])
            setLongitude(jesus[1])
            props.refresh(jesus)
            // setLatitude(someRef.current[0])
            // setLongitude(someRef.current[1])
            // props.refresh(someRef.current)
        } else {
            setLatitude(props.ob.data.latitude)
            setLongitude(props.ob.data.longitude)
        }
        fetchApi();
        fetchAirApi();
        // setTimeout(() => {
        //     setRefresh(Math.random())
        //     fetchApi();
        //     fetchAirApi();
        //     console.log("Delayed for 1 second.");
        //     setRefresh(Math.random())
        // }, 1000);
    }, [jesus])


    let dataPass;
    if (apiData !== undefined) {
        if (jesus === null || jesus === undefined) {
            dataPass = {
                ip: props.ob.data,
                loc: apiData,
                air: airApi,
                info: null,
                searchBarPass: searchBarPass
            };
        }
        dataPass = {
            ip: props.ob.data,
            loc: apiData,
            air: airApi,
            info: jesus,
            searchBarPass: searchBarPass
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