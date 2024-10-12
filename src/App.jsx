import React from "react"
import axios from "axios";
import Weather from "../src/components/Weather.jsx"
import DataDase from "./components/DataBase.jsx"
import TheShowBox from "./components/TheShowBox.jsx"




export default function App() {
  const [ipLoc, setIpLoc] = React.useState(null)
  const [justRefresh, setJustRefresh] = React.useState([8])
  const [justRefresh2, setJustRefresh2] = React.useState(0)
  const timeoutRef = React.useRef(null)
  const timeoutRef2 = React.useRef(null)
  const fockRef = React.useRef(0)
  const [btn, setBtn] = React.useState(true)



  // function refresh2() {
  //   setTimeout(() => {
  //     clearInterval(timeoutRef.current)
  //     clearInterval(timeoutRef2.current)
  //     setTimeout(() => {
  //       timeoutRef.current = setInterval(() => {
  //         // setJustRefresh(perv => perv + Math.random())
  //         setJustRefresh(Math.random())
  //         console.log(justRefresh)
  //       }, 500);
  //       setTimeout(() => {
  //         clearInterval(timeoutRef.current)
  //         console.log('interval 2 stopped')
  //       }, 6000);
  //     }, 4000);
  //     console.log('intreval stoped')
  //   }, 2000);
  // }


  function refresh(n) {
    // console.log(justRefresh)
    setJustRefresh(perv => [...perv, Math.random()])
    setBtn(perv => !perv)
    // Weather.forceUpdate()
    // if (fockRef.current === 0) {
    //   timeoutRef.current = setInterval(() => {
    //     // setJustRefresh(perv => perv + Math.random())
    //     setJustRefresh(Math.random())
    //     console.log(justRefresh)
    //   }, 300);
    //   fockRef.current = 1
    //   refresh2()
    // }


  }

  // setJustRefresh(Math.random())

  async function fetchLoc(error) {
    const locApi = `https://api.bigdatacloud.net/data/reverse-geocode-client`
    axios.get(locApi)
      .then(response => setIpLoc(response))
      .catch(error => console.log(error))
  }



  React.useEffect(() => {
    fetchLoc();
    showOrLoading()
    return () => {
      // clearTimeout(timeoutRef.current)
    }
  }, [justRefresh])
  // React.useEffect(() => {
  //   setJustRefresh2(Math.random())

  // }, [justRefresh])


  function showOrLoading() {
    if (ipLoc) {
      return (
        <Weather ob={ipLoc}
          refresh={refresh}
        >
          <TheShowBox />
        </Weather>
      )
    }
    else {
      return <div className="loading"></div>
    }
  }



  return (
    <div className="all-them">
      {/* <button>{btn ? "true" : "false"}</button> */}
      {showOrLoading()}
    </div>
  )
}

