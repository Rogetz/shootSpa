"use client";

import Image from "next/image"
//new assets
import asset1 from "../../assets/asset1.jpg"
import asset2 from "../../assets/asset2.jpg"
import asset3 from "../../assets/asset3.jpg"
import asset4 from "../../assets/asset4.jpg"
import asset5 from "../../assets/asset5.jpg"
import asset6 from "../../assets/asset6.jpg"
import asset7 from "../../assets/asset7.jpg"
import asset8 from "../../assets/asset8.jpg"
import asset9 from "../../assets/asset9.jpg"
import asset10 from "../../assets/asset10.jpg"
import asset11 from "../../assets/asset11.jpg"
import asset12 from "../../assets/asset12.jpg"
import asset13 from "../../assets/asset13.jpg"
import asset14 from "../../assets/asset14.jpg"


import Link from "next/link"
import { useEffect, useState } from "react"
import {FaBookOpen,FaFax} from "react-icons/fa"
import {BookWrapper} from "./book"

export function nameFilter(name){
    let finalName = name
    if(name.indexOf("_") != -1){
        let arrName = name.split("_")
        finalName = arrName.join(" ")
    }
    else{
        let arrName = name.split("-")
        finalName = arrName.join(" ")
    }
    return finalName
}


export function CategorySkeleton(){
    return(
        <p className="text-color-white animate-pulse w-screen h-screen bg-blue-600">
            hello the category skeleton
        </p>
    )
}

//assets are 14 so for here I'm just displaying them in a trick



export function Category({category}){
    const [arrNoState,setArrNoState] = useState([])
    const [bookPopup,setBookPopup] = useState(<></>)

    useEffect(function(){
        let newArr = [
            {
                image: asset1
            },
            {
                image: asset2
            },
            {
                image: asset3
            },
            {
                image: asset4
            },
            {
                image: asset5
            },
            {
                image: asset6
            },
            {
                image: asset7
            },
            {
                image: asset8
            },
            {
                image: asset9
            },
            {
                image: asset10
            },
            {
                image: asset11
            },
            {
                image: asset12
            },
            {
                image: asset13
            },
            {
                image: asset14
            }
        ]

        setArrNoState(prevState => newArr)

    },[])

    return(
        <div> 
            {bookPopup}
            <div className="h-auto w-full text-black dark:bg-black dark:text-slate-600">
                <div className="w-full h-auto px-12 flex justify-between">
                    <h1 className="text-2xl tracking-tight font-bold">Our featured {category} shoots</h1>
                </div>
                <div className="grid w-full h-auto px-4 py-2 lg:px-12 lg:py-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 place-items-center">
                    {arrNoState.map((value,index) => {
                        let shoot = {
                            image : arrNoState[index].image,
                            telNo: "+254768230039",
                            category: category
                        }
                        
                        return <ShootPic key={index} shoot={shoot} setBookPopup={setBookPopup}/>
                        
                    })}
                </div>

            </div>
        </div>
    )
}

export function ShootPic({shoot,setBookPopup}){
    //shoot has a category property for the book and the contacts of the shooter as well as  the image
    let bookHandler = function(e){
        e.preventDefault()
        setBookPopup(<BookWrapper optionPassed={shoot.category} setBookPopup={setBookPopup}/>)
    }

    return(
        <div className="w-full sm:w-[20rem] lg:w-[20rem] flex-shrink-0 flex-grow-1 h-[31rem] dark:bg-black bg-white shadow-sm shadow-blue-700 rounded-xl p-3">
            {/*use the cld image for this */}
            <div className="w-full h-[26rem] rounded-xl">
                <Image className="w-full h-full object-cover object-center rounded-xl" src={shoot.image} alt="avatar" width={850} height={1200}/>
            </div>
            <div className="w-full h-[4rem] flex items-center justify-between gap-2">
                <button className="border-2 w-fit h-fit text-blue-900 border-blue-600 px-6 py-2 rounded-lg bg-transparent no-underline flex gap-4 items-center" onClick={bookHandler}><FaBookOpen className="text-3xl"/><span>book</span> </button>
                <Link className="border-2 w-fit h-fit text-pink-900 border-pink-600 px-6 py-2 rounded-lg bg-transparent no-underline flex gap-4 items-center" href={`tel:${shoot.telNo}`} target="blank"><FaFax className="text-3xl"/><span className="font-bold">call</span></Link>
            </div>
        </div>
    )
}