"use client";

import { useEffect, useRef,useState } from "react"
import { FaPlus,FaMailBulk, FaBurn, FaAmbulance, FaExclamationTriangle, FaExclamationCircle } from "react-icons/fa"


enum Visibility {
    visible = "visible",
    hidden = "hidden"
}

// for dangers,  accepts the error message to be displayed.
export function Alert({err,counter}:{err:string,counter:number}){
    const [displayState,setDisplayState] = useState("flex")
    const [hiddenState,setHiddenState] = useState<Visibility>(Visibility.visible)

    useEffect(function(){
        setDisplayState("flex")
        setHiddenState(Visibility.visible)

        let timer = window.setTimeout(function(){
            setDisplayState("none")
            setHiddenState(Visibility.hidden)
        },3000)

        // to prevent memory leaks after using the timeout
        return () => clearTimeout(timer)
    },[counter])
    return(
        <div style={{visibility:hiddenState,display:displayState,flexDirection:"column",gap:"1rem"}} className={`w-fit rounded-lg sm:min-w-[40rem] md:min-w-[30rem] absolute top-4 shadow-inner dark:bg-black bg-white border-2 border-red-600 h-fit mx-auto p-4 mt-4 dark:text-white text-black z-10`}>
            <h1 className="font-bold flex gap-3"><FaExclamationTriangle className="text-red-600 text-xl"/><span className="text-red-600">Alert</span></h1>
            <hr className="w-full h-2 border-slate-300"/>
            <p className="dark:text-white text-black text-left">{err}</p>
        </div>
    )
}

// for displaying succesful events, accepts the success message to be displayed.
export function Success({success,counter}:{success:string,counter:number}){
    const [displayState,setDisplayState] = useState("flex")
    const [hiddenState,setHiddenState] = useState<Visibility>(Visibility.visible)

    useEffect(function(){
        setDisplayState("flex")
        setHiddenState(Visibility.visible)

        let timer = window.setTimeout(function(){
            setDisplayState("none")
            setHiddenState(Visibility.hidden)
        },3000)

        // to prevent memory leaks after using the timeout
        return () => clearTimeout(timer)

    },[counter])
    return(
        <div style={{visibility:hiddenState,display:displayState,flexDirection:"column",gap:"1rem"}} className={`w-fit rounded-lg sm:min-w-[40rem] md:min-w-[30rem] absolute top-4 shadow-inner dark:bg-black bg-white border-2 border-blue-600 h-fit mx-auto p-4 mt-4 text-white z-10`}>
            <h1 className="font-bold flex gap-3"><FaExclamationCircle className="text-blue-600 text-xl"/><span className="text-blue-600">Success</span></h1>
            <hr className="w-full h-2 border-slate-300"/>
            <p className="dark:text-white text-black">{success}</p>
        </div>
    )
}
