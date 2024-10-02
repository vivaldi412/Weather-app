import React from "react"
import axios from "axios";
import Weather from "../src/components/Weather.jsx"
import DataDase from "./components/DataBase.jsx"
import TheShowBox from "./components/TheShowBox.jsx"




export default function App() {
  const [ipLoc, setIpLoc] = React.useState(null)

  async function fetchLoc(error) {
    const locApi = `https://ip-api.com/json/?fields=3727583`
    axios.get(locApi)
      .then(response => setIpLoc(response))
      .catch(error => console.log(error))
  }

  // .then(response => console.log(response))
  React.useEffect(() => {
    fetchLoc();
  }, [])



  function showOrLoading() {
    if (ipLoc) {
      return (
        <Weather ob={ipLoc}>
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
      {showOrLoading()}
    </div>
  )
}

