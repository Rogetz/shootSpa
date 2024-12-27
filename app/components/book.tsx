"use client";

import Link from "next/link";
import { useState,useRef,useEffect, Dispatch, SetStateAction} from "react"
import { FaBook, FaRegWindowClose } from "react-icons/fa";
import { Alert } from "./notifications";


export function BookWrapper({optionPassed,setBookPopup}:{optionPassed:string,setBookPopup:Dispatch<SetStateAction<JSX.Element>>}){

    const [displayState,setDisplayState] = useState<JSX.Element>(<></>)
    const [stepTwo,setStepTwo] = useState(false)
    const [stepStyle,setStepStyle] = useState({backgroundColor: "white",borderColor:"white"})


    useEffect(function(){
        if(stepTwo == true){
            setStepStyle({
                backgroundColor: "blue",
                borderColor:"blue"
            })
        }
    },[stepTwo])
    
    useEffect(function(){
        setDisplayState(<OptionsForm defaultOption={optionPassed} setStepTwo={setStepTwo} setDisplayState={setDisplayState}/>)
    },[])

    let closeHandler = function(e:any){
        e.preventDefault()
        setBookPopup(<></>)
    }

    return(
        <div className="fixed z-10 w-full min-h-screen flex justify-center bg-transparent backdrop-blur-xl">
            <div className="w-[90%] md:w-[80%] lg:w-[60%] mx-auto bg-transparent border-1 border-blue-600 h-5/6 flex flex-col gap-2  shadow-md shadow-blue-600 items-center">
                {/*this will be the progress div*/}
                <div className="w-full h-[2rem] flex justify-between pr-4 pt-2">
                    <div className="font-bold text-lg dark:text-white text-black pl-4">only two steps to book</div>
                    <FaRegWindowClose onClick={closeHandler} className="text-2xl text-red-600"/>
                </div>
                <div className="w-full h-[0.2rem] flex gap-1 px-4 items-center">
                    <hr className="w-[50%] h-full bg-blue-600 border-blue-600 rounded-xl"/>
                    <hr style={stepStyle} className="w-[50%] h-full rounded-xl"/>
                </div>
                {displayState}
            </div>
        </div>
    )
}

export function OptionsForm({defaultOption,setDisplayState,setStepTwo}:{defaultOption:string,setDisplayState:Dispatch<SetStateAction<JSX.Element>>,setStepTwo:Dispatch<SetStateAction<boolean>>}){
    
    let optionsHandler = function(e:any){
        e.preventDefault()
        if(e.target.shootOptions != null || e.target.shootOptions != undefined ){
            setDisplayState(<BookForm shootType={defaultOption} setDisplayState={setDisplayState}/>)
            setStepTwo(true)
        }
    }
    
    return(
        <div className="w-[90%] lg:w-[60%] md:min-w-[80%] min-h-[80%] bg-transparent flex flex-col items-start pb-4">
            <h1 className="text-xl dark:text-white text-black font-bold">what type of shoot do you want?</h1>
            <form onSubmit={optionsHandler} className="w-full h-full flex flex-col justify-center items-center">
                <div className="w-full h-[3rem] flex items-center gap-4 font-bold">
                    <label htmlFor="default">default</label>
                    <input type="radio" id="default" defaultChecked={true} name="shootOptions" value={defaultOption}/>
                </div>
                <div className="w-full h-[3rem] flex items-center gap-4 font-bold">
                    <label htmlFor="outdoor">outdoor</label>
                    <input type="radio" id="outdoor" name="shootOptions" value="outdoor"/>
                </div>
                <div className="w-full h-[3rem] flex items-center gap-4 font-bold">
                    <label htmlFor="indoor">indoor</label>
                    <input type="radio" id="indoor" name="shootOptions" value="indoor"/>
                </div>
                <div className="w-full h-[3rem] flex items-center gap-4 font-bold">
                    <label htmlFor="office">office</label>
                    <input type="radio" id="office" name="shootOptions" value="office"/>
                </div>
                <div className="w-full h-[3rem] flex items-center gap-4 font-bold">
                    <label htmlFor="nature">nature</label>
                    <input type="radio" id="nature" name="shootOptions" value="nature"/>
                </div>
                <div className="w-full h-[3rem] flex items-center gap-4 font-bold">
                    <label htmlFor="other">other</label>
                    <input type="radio" id="other" name="shootOptions" value="other"/>
                </div>
                <button type="submit" className="px-6 py-2 bg-transparent dark:text-white text-black rounded-3xl font-bold border-2 border-blue-600">submit</button>
            </form>
        </div>
    )
}

//passed from the optionsForm
export function BookForm({shootType,setDisplayState}:{shootType:string,setDisplayState:Dispatch<SetStateAction<JSX.Element>>}){
    const [nameState,setNameState] = useState<string>("")
    const [locationState,setLocationState] = useState<string>("")
    const [finalMessage,setFinalMessage] = useState<string>("")
    const [payFirst,setPayFirst] = useState<boolean>(false)
    const [telState,setTelState] = useState<string>("")
    const [emailState,setEmailState] = useState<string>("")
    const submitLinkRef = useRef<HTMLLinkElement>()
    const [alertState,setAlertState] = useState<JSX.Element>(<></>)
    const [counterState,setCounterState] = useState<number>(0)

    useEffect(function(){
        let finalText:string = `hello colour studios \n ${nameState} here \n  I need a ${shootType} shoot at ${locationState}. Thank you`
        setFinalMessage(finalText)
        //here's where we'll be saving from the db
    },[nameState,locationState])
    useEffect(function(){
        if(counterState > 0){
            setAlertState(<Alert err="kindly fill in all the details" counter={counterState}/>)
        }
    },[counterState])

    let bookHandler = function(e:any){
        e.preventDefault()
        //alert("success,we'll get back to you for your shoot arrangements")
        //shootType is also read here and is sent to wherever its meant to be sent
    }


    let nameHandler = function(e:any){
        e.preventDefault()
        let nameValue = e.target.value.toLowerCase()
        setNameState(nameValue)
    }
    let locationHandler = function(e:any){
        e.preventDefault()
        let locationValue = e.target.value.toLowerCase()
        setLocationState(locationValue)
    }

    let linkHandler = function(e:any){
        if(nameState.length < 2 || locationState.length < 3  ){
            e.preventDefault()
            setCounterState(prevState => prevState + 1)
        }
        else if((telState == "" || nameState == "") || (emailState == "" || locationState == "")){
            e.preventDefault()
            setCounterState(prevState => prevState + 1)
        }
    }

    let payFirstHandler = function(e:any){
        let payValue = e.target.value
        if(payValue != null || payValue != null){
            setPayFirst(true)
        }
        //this is what will redirect us to the checkout

        //so the setDisplayState might be accessed here for the chekout,but if not needed as well no need
    }

    let payAfterHandler = function(e:any){
        let payValue = e.target.value
        if(payValue != null || payValue != null){
            setPayFirst(false)
        }
    }

    let telHandler = function(e:any){
        let telValue = e.target.value.toLowerCase()
        setTelState(telValue)
    }

    let emailHandler = function(e:any){
        let emailValue = e.target.value.toLowerCase()
        setEmailState(emailValue)
    }


    //all the form data will be stored in the db but only a few of that data will be used in the whatsapp contact card
    return(
        <div className="w-[90%] lg:w-[60%] md:w-[80%] h-[80%] overflow-auto bg-transparent pb-4">
            {alertState}
            <h1 className="text-xl dark:text-white text-black font-bold">key in your details to finish booking</h1>
            <form onSubmit={bookHandler} className="w-full h-auto flex flex-col gap-3 justify-center items-center">
                <div className="w-full h-auto flex flex-col gap-2">
                    <label htmlFor="default" className="font-bold text-blue-600">full name</label>
                    <input className="h-[2.5rem] pl-3 bg-transparent outline-none rounded-2xl shadow-sm shadow-blue-600 dark:text-white text-black" onChange={nameHandler} type="text" id="fullName" placeholder="full name"  name="fullName" />
                </div>
                <div className="w-full h-auto flex flex-col gap-2">
                    <label htmlFor="telephone" className="font-bold text-blue-600">telephone no</label>
                    <input className="h-[2.5rem] pl-3 bg-transparent outline-none rounded-2xl shadow-sm shadow-blue-600 dark:text-white text-black" onChange={telHandler} type="number" id="telephone" placeholder="telephone no"  name="telephone" />
                </div>
                <div className="w-full h-auto flex flex-col gap-2">
                    <label htmlFor="email"  className="font-bold text-blue-600">email</label>
                    <input className="h-[2.5rem] pl-3 bg-transparent outline-none rounded-2xl shadow-sm shadow-blue-600 dark:text-white text-black" onChange={emailHandler} type="email" id="email" placeholder="email address"  name="email"/>
                </div>
                <div className="w-full h-auto flex flex-col gap-2">
                    <label htmlFor="county" className="font-bold text-blue-600">venue county</label>
                    <select className="h-[2.5rem] pl-3 bg-transparent outline-none rounded-2xl shadow-sm shadow-blue-600 dark:text-white text-black" onChange={locationHandler} id="county" name="county">
                        {/*find the api to offer a list of all the counties in Kenya*/}
                        <option value="Nairobi" selected={true}>Nairobi</option>
                        <option value="Mombasa">Mombasa</option>
                        <option value="Kisumu">Kisumu</option>
                        <option value="Nakuru">Nakuru</option>
                        <option value="Kakamega">Kakamega</option>
                        <option value="Eldoret">Eldoret</option>
                        <option value="Kisii">Kisii</option>
                    </select>
                </div>
                <h2 className="dark:text-white text-black text-left font-bold">payment preference</h2>
                <div className="w-full flex gap-4">
                    <label htmlFor="payFirst" className="font-bold text-blue-600">pay first</label>
                    <input type="radio" id="payFirst" onChange={payFirstHandler} name="paymentOptions" value="payFirst"/>
                </div>
                <div className="w-full flex gap-4">
                    <label htmlFor="payLater" className="font-bold text-blue-600">pay later</label>
                    <input type="radio" id="payLater" onChange={payAfterHandler} name="paymentOptions" value="payLater"/>
                </div>
                {/*pass the shoot type as well which is a prop here */}
                <Link className=" border-2 border-blue-600 dark:hover:text-white hover:text-black  text-blue-600  flex gap-4 items-center px-6 py-2 bg-transparent rounded-lg font-bold" onClick={linkHandler} href={`https://wa.me/+254768230039/?text=${finalMessage}`} target="blank"><FaBook className="text-3xl"/><span>book</span></Link>
            </form>
            
        </div>
    )
}