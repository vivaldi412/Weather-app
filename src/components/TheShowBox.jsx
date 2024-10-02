import React from "react";
import Current from "./Current";
import Daily from "./Daily";
import Today from "./Today";
import Hourly from "./Hourly";
import Info from "./Info";

import { WeatherContext } from "./WeatherContext";
// import sun1 from "../assest/sun1.gif"
// import sun2 from "../assest/sun2.gif"
// import sun3 from "../assest/svg-icon/wi-day-sunny.svg";
// import Sun from "../assest/svg-icon/wi-day-sunny.svg?react";
import logo from "../assest/logo.png"


export default function (props) {
    const data = React.useContext(WeatherContext)
    // data && console.log(data)
    function fillShit() {
        let shit = []
        for (let i = 0; i < 16; i++) {
            shit.push(<div className="ff" key={i}>{i}</div>)
        }
        return shit
    }
    // <img src={logo} className="logo" />
    function dufuck() {
        if (data) {
            return (
                <div className="main-box">
                    <div className="ff" id="ff1" style={{ width: '-webkit-fill-available' }}> <Info /></div>
                    <div className="ff" id="ff3" > <Current /> </div>
                    <div className="ff" id="ff5" > <Daily /> </div>
                    <div className="ff" id="ff7" > <Today /> </div>
                    <div className="ff" id="ff9" > <Hourly /></div>

                    {/* {fillShit()} */}
                </div>
            )
        }
        else {
            return <div className="loading"></div>
        }
    }

    return (
        <>
            {/* <Sun className="svg1" /> */}
            {dufuck()}
            {props.children}

        </>
    )
}