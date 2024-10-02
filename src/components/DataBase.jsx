import React, { useEffect, useRef, useState } from "react"
import { supabase } from "../components/DataBaseConfiguration"
import { nanoid } from "nanoid"



export default function DataDase(props) {
    const [input, setInput] = useState("")
    const [dbInput, setDbInput] = useState()
    const [readData, setReadData] = useState()
    const [id, setId] = useState(0)
    useEffect(() => {
        insertInput(props.ip)
        getInput()
    }, [])




    async function getInput() {
        const { data } = await supabase.from("input").select();
        setReadData(data)
        console.log("db done")
    }

    async function insertInput(st) {
        const { error } = await supabase
            .from('input')
            .insert({ id: nanoid(), value: input || st })
        console.log(error ? error : "done insert")
    }








    function handleSubmit(e) {
        e.preventDefault();

        insertInput();

        setInput('')

    }
    function inputTextHandle(e) {
        setInput(e.target.value)
    }
    async function clickHandle() {
        console.log(readData)


    }


    return (
        <>
            <form onSubmit={handleSubmit}>
                <label >
                    test:     <input type="text"
                        id="database" name="database"
                        value={input}
                        onChange={inputTextHandle} />
                </label>
                <button type="sumbmit">submit</button>
            </form>
            <button onClick={clickHandle}>db DATA</button>
        </>

    )
}
