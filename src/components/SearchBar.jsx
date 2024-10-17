import React from "react";
import axios from "axios";
import '../components/info.css'
import { WeatherContext } from "./WeatherContext";
import cities from 'cities.json';
import { continents, countries, languages } from 'countries-list'
import { getCountryCode, getCountryData, getCountryDataList, getEmojiFlag } from 'countries-list'
import icon from "../assest/googleIcon/search.svg"
import { nanoid } from 'nanoid'



export default function SearchBar() {
    const data = React.useContext(WeatherContext)
    const [city, setCity] = React.useState("")
    const cityRef = React.useRef("")
    const cityRefUp = React.useRef("")
    const matchRef = React.useRef()
    const [clickedOn, setClickedOn] = React.useState(null)
    const documentRef = React.useRef(null)
    const movenRef = React.useRef(0)
    const witchRef = React.useRef(null)
    const ifTrueRef = React.useRef(null)
    const someRef = React.useRef(null)
    const timeoutRef = React.useRef(null)
    const [btn, setBtn] = React.useState(false)
    const [btnA, setBtnA] = React.useState(false)
    const [optionTempState, setOptionTempState] = React.useState(() => {
        let temp = []
        for (let i = 0; i < 23; i++) {
            temp.push(
                <div className="option" id={i} key={nanoid()}  ><p className="option-p" id={'p' + i} onMouseDown={searchP}   ></p></div>
            )
        }
        return temp
    })
    // onClick={searchP}

    const temp = [[]]
    function add() {
        temp.push([])
    }
    function thatShitImade() {
        let temp = []
        for (let i = 0; i < 130; i++) {
            if (i % 2 === 0) {
                temp.push(
                    (<div style={{ width: "15px", height: "6px", backgroundColor: "#160f29", animationDelay: `${(i * 100)}ms` }} className="arman-page-border-in" key={nanoid()}></div>)
                )
            }
            if (i % 2 !== 0) {
                temp.push(
                    (<div style={{ width: "15px", height: "6px", animationDelay: `${(i * 100)}ms` }} className="arman-page-border-in" key={nanoid()} ></div>)
                )
            }
        }
        return temp
    }

    React.useEffect(() => {
        function omg() {
            cities.map(city => {
                city.name = city.name.normalize("NFKD").replaceAll(/[\u0300-\u036f]/g, "")
                city.name = city.name.normalize("NFKD").replaceAll(/[^\w\s']/g, "")
            })
            console.log("done")
        }
        omg()
        data.searchBarPass(clickedOn)
        // data.searchBarPass(someRef.current)
        return () => {
            // clearTimeout(timeoutRef.current)
        }
    }, [clickedOn])




    function searchP(event) {
        event.preventDefault()
        setClickedOn(event.target.value)
        someRef.current = ifTrueRef.current
        witchRef.current = null
        movenRef.current = 0
        ifTrueRef.current = null
        event.target.blur()
        deleteOption()
        setCity("")
        setTimeout(() => {
            setClickedOn(null)
            console.log("Delayed for 5 second.");
        }, 300);
    }


    function input(event) {
        event.preventDefault()
        documentRef.current = document.getElementsByClassName('city')
        cityRef.current = event.target.value
        cityRefUp.current = event.target.value.toUpperCase()
        setCity(event.target.value)
        if (cityRef.current.length > 2) {
            searchCity(cityRef.current.length)
            addOption()
            move(event)
            // setClickedOn(Math.random())
        }
    }
    function searchCity(l) {
        let counter = 0;
        cities.map(city => {
            if (city.name[counter] === cityRef.current[counter] || city.name[counter] === cityRefUp.current[counter]) {
                temp[counter].push(city)
            }
        })
        for (let i = 0; i < l - 1; i++) {
            counter++
            add()
            temp[counter - 1].map(city => {
                if (city.name[counter] === cityRef.current[counter] || city.name[counter] === cityRefUp.current[counter]) {
                    temp[counter].push(city)
                }
            })
        }
        matchRef.current = temp
    }
    function addOption() {
        let temp = []
        for (let i = 0; i < 23; i++) {
            document.getElementById(String(i)).style.height = "0px";
            document.getElementById(String(i)).style.backgroundColor = "#f5f5f5";
            document.getElementById("p" + String(i)).innerText = ""
            document.getElementById("p" + String(i)).value = ""
        }
        let n = 0;
        matchRef.current[matchRef.current.length - 1].map(city => {
            try {
                document.getElementById(String(n)).style.height = "30px";
                document.getElementById("p" + String(n)).innerText = String(`${city?.name} / ${getCountryData(`${city?.country}`).name}`)
                document.getElementById("p" + String(n)).value = [String(city?.lat), String(city?.lng), String(city?.name), String(city?.country), String(getCountryData(city?.country).continent)]
                n++

            } catch {
                // console.log('fuck')
            }
        })
        if (n > 20) { return; }
    }
    function deleteOption(event) {
        for (let i = 0; i < 23; i++) {
            document.getElementById(String(i)).style.height = "0px";
            document.getElementById("p" + String(i)).innerText = ""
            document.getElementById("p" + String(i)).value = ""
        }
    }



    let found = null
    let nn = null
    function move(event) {
        let fuckingTemp;
        let fuckthis;
        const childCount = document.querySelector("#ff1 > div > div > form > div").childElementCount
        try {
            fuckthis = matchRef?.current[matchRef.current?.length - 1]?.length
            if (fuckthis > 22) {
                fuckthis = 22
            }
        } catch {
            // console.log('fuck2')
        }
        let CN;


        for (let i = 0; i < childCount; i++) {
            document.querySelector("#ff1 > div > div > form > div").children[i].style.backgroundColor = "#f5f5f5"
        }


        for (let i = 0; i < matchRef.current[cityRef.current?.length - 1]?.length; i++) {
            if (cityRef.current?.length === matchRef.current[cityRef.current?.length - 1][i].name.length) {
                for (let j = 0; j < cityRef.current.length; j++) {
                    if (cityRef.current[j] === matchRef?.current[cityRef.current?.length - 1][i].name[j] || cityRefUp.current[j] === matchRef.current[cityRef.current.length - 1][i].name[j]) {
                        document.querySelector(`#p${j}`).style.color = 'red'
                        found = true


                        nn = i
                    }
                    else {
                        found = false
                        break;
                    }
                }
            }
        }
        if (found === true) {
            ifTrueRef.current = document.getElementById("p" + String(nn)).value
        }
        // document.querySelector("#ff1 > div > div > form > div").children[nn].style.backgroundColor = "#969696"

        if (event.key === "ArrowDown") {
            if (movenRef.current >= fuckthis) { movenRef.current = 0 }
            CN = movenRef.current++
            document.querySelector("#ff1 > div > div > form > div").children[CN].style.backgroundColor = "#969696"
            witchRef.current = CN
        }
        if (event.key === "ArrowUp") {
            if (movenRef.current < 2) { movenRef.current = fuckthis + 1 }
            CN = --movenRef.current
            document.querySelector("#ff1 > div > div > form > div").children[CN - 1].style.backgroundColor = "#969696"
            witchRef.current = CN - 1
        }

        if (event.key === "Backspace") {
            witchRef.current = null
            movenRef.current = 0
            ifTrueRef.current = null
            deleteOption()
        }
        if (event.key === 'Enter') {
            if (witchRef.current !== null) {
                setClickedOn(document.getElementById('p' + String(witchRef.current))?.value)
                someRef.current = document.getElementById('p' + String(witchRef.current))?.value
                fuckingTemp = someRef.current


                setTimeout(() => {
                    setClickedOn(null)
                    console.log("Delayed for 5 second.");
                }, 500);
                // setTimeout(() => {
                //     setClickedOn(fuckingTemp)
                //     console.log("Delayed for 9 second.");
                //     setBtn(perv => !perv)
                // }, 9000);

            }
            else if (witchRef.current === null && ifTrueRef.current === null) {
                alert("City NOT found")
            }
            else if (witchRef.current === null) {
                setClickedOn(ifTrueRef.current)
                someRef.current = ifTrueRef.current
                fuckingTemp = someRef.current
                setTimeout(() => {
                    setClickedOn(null)
                    console.log("Delayed for 5 second.");
                }, 300);
                // setTimeout(() => {
                //     setBtn(perv => !perv)
                //     setClickedOn(fuckingTemp)
                //     console.log("Delayed for 9 second.");
                // }, 9000);

                found = false
            }
            // console.log(document.getElementById('p' + String(witchRef.current)).value)
            witchRef.current = null
            movenRef.current = 0
            ifTrueRef.current = null
            event.target.blur()
            deleteOption()
            setCity("")
        }
    }
    // let svgBegin = "a"
    // function svgfuc() {
    //     svgBegin = "0s"
    // }
    // function mouseOverS() {

    // }

    function infoBtn() {
        setBtn(perv => !perv)
    }
    return (

        <div className="search-d">

            <form onSubmit={(e) => (e.preventDefault())} autoComplete="off" spellCheck="false"
                onBlur={(event) => {
                    setCity("")
                    deleteOption(event)
                }} className="search-form" >

                <span className="search-span" id="search">
                    <img className="search-icon" src={icon} />
                    <input type="text" className="city"
                        placeholder="Search city..." value={city} onChange={input}
                        name="inputSearch"
                        onKeyDown={move}
                    />
                </span>
                <div className="option-d">
                    {optionTempState}
                </div>
            </form>



            {/* <button id="btnmine" onClick={kirekhar}>aaa</button> */}
            {/* <svg xmlns="http://www.w3.org/2000/svg" width="286" height="50" viewBox="0 0 286 50" fill="none" id="svgbox">
                <svg id="srect1">
                    <rect id="rect1" width={0} height={3} fill="red" />
                    <svg id="srect2">
                        <rect id="rect2" width={3} height={0} fill="red" transform="translate(283,0)" />
                    </svg>
                </svg>

            </svg> */}
            {/* 
            <div className="lineBox">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
                <div className="line4"></div>
            </div> */}





            {btn ? <div className="arman-overlay" style={{ display: "block", backgroundColor: "#00000060" }} onClick={infoBtn}></div> : <div className="arman-overlay"></div>}
            {btn ? <div style={{ opacity: "100%", translate: "33% -5%", width: "500px", height: "500px", fontSize: "small" }} className="arman-page" onClick={infoBtn}>
                {/* <div style={{ width: "15px", height: "6px" }} className="arman-page-border-in"></div> */}
                {thatShitImade()}
                <div className="arman-page-2">
                    <div className="lineBox">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <div className="line4"></div>
                    </div>
                    <div className="lineBox" id="linebox2">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <div className="line4"></div>
                    </div>
                    <div className="lineBox" id="linebox3">
                        <div className="line1"></div>
                        <div className="line2"></div>
                        <div className="line3"></div>
                        <div className="line4"></div>
                    </div>
                    <a href="https://github.com/vivaldi412" target="_blank" rel="nofollow noopener noreferrer">
                        <h1 className="arman-text" id="aLink" >Arman</h1></a>
                    <h1 className="arman-text" id="txt1">Weather and Air data: Open-Meteo</h1>
                    <h1 className="arman-text" id="txt2">using SupaBase as database</h1>
                    <h1 className="arman-text" id="txt3">all SVGs heavily edited by me</h1>
                </div>
            </div> : <div className="arman-page"></div>
            }

            {/* {btn ? <div style={{ opacity: "100%", translate: "0 0px" }} className="arman-page-border" >
            </div> : <div className="arman-page-border">
                <div className="arman-page-border-in"></div></div>} */}
            {/* width: "0px", height: "0px", border: "3px solid #eb6565"  */}
            {/* onClick={infoBtn} */}

            <button className="arman-info" onClick={infoBtn}>Info</button>
            <button className="currentLoc-btn" onClick={() => {
                setClickedOn([data?.ip.latitude, data?.ip.longitude, data?.ip.city, data?.ip.countryCode, data?.ip.continentCode])
                setTimeout(() => {
                    setClickedOn(["35.69439", "51.42151", data?.ip.city, data?.ip.countryCode, data?.ip.continentCode])
                    console.log("delayed CLICK ");

                }, 300);
                console.log("btn clicked")
            }} >Current Location(ip)</button>
        </div >
    )
}
// onClick={() => setClickedOn(null)}




