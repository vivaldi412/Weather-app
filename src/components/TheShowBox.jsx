import React from "react";
import Current from "./Current";
import Daily from "./Daily";
import Today from "./Today";
import Hourly from "./Hourly";
import Info from "./Info";



import { WeatherContext } from "./WeatherContext";



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
    // style={{ width: '-webkit-fill-available' }}
    // <img src={logo} className="logo" />
    function dufuck() {
        if (data) {
            return (
                <div className="main-box">
                    <div className="ff" id="ff1" > <Info /></div>
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