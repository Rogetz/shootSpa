"use client";

import Link from "next/link"
import { FaArrowRight, FaBookOpen, FaFax, FaWhatsapp } from "react-icons/fa"
import { BookWrapper } from "./book";
import { useState,useEffect,useRef, Dispatch, SetStateAction} from "react";
import asset1 from "../../assets/asset1.jpg"
import asset2 from "../../assets/asset2.jpg"
import asset3 from "../../assets/asset3.jpg"
import asset4 from "../../assets/asset4.jpg"
import asset5 from "../../assets/asset1.jpg"
import asset6 from "../../assets/asset2.jpg"
import asset7 from "../../assets/asset3.jpg"
import asset8 from "../../assets/asset4.jpg"
import asset9 from "../../assets/asset1.jpg"
import asset10 from "../../assets/asset2.jpg"
import asset11 from "../../assets/asset3.jpg"
import asset12 from "../../assets/asset4.jpg"
import asset13 from "../../assets/asset1.jpg"
import asset14 from "../../assets/asset2.jpg"

import Image from "next/image";

//for outdoor
let fakeShoots = [
    {
        category:"outdoor",
        image: asset1,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset2,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset3,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset4,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset5,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset6,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset7,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset8,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset9,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset10,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset11,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset12,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset13,
        telNo:"+254768230039"
    },
    {
        category:"outdoor",
        image: asset14,
        telNo:"+254768230039"
    }
]

//for indoor
let fakeShootsIndoor = [
    {
        category:"indoor",
        image: asset1,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset2,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset3,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset4,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset5,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset6,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset7,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset8,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset9,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset10,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset11,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset12,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset13,
        telNo:"+254768230039"
    },
    {
        category:"indoor",
        image: asset14,
        telNo:"+254768230039"
    }
]

//for nature
let fakeShootsNature = [
    {
        category:"nature",
        image: asset1,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset2,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset3,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset4,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset5,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset6,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset7,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset8,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset9,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset10,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset11,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset12,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset13,
        telNo:"+254768230039"
    },
    {
        category:"nature",
        image: asset14,
        telNo:"+254768230039"
    }
]



//  this will rather be the landing page. I'll see what else I can modify here and there.
export function ShootWrapper(){
    const [bookPopup,setBookPopup] = useState<JSX.Element>(<></>)
    const [stylesArr,setStylesArr] = useState<Array<any>>([])
    const [mainImageState,setMainImageState] = useState(asset1)
    const [currentIndexState,setCurrentIndexState] = useState<number>(0)

    //this same array will have the images so arranged in objects of style and image
    let initialStyleArr = [
        {
            image: asset4,
            style: {
                top: "0rem",
                margin: "0 auto"                    
            }
        },
        {
            image: asset1,
            style: {
                right: "0rem",
                margin: "auto 0"                    
            }
        },
        {
            image: asset2,
            style: {
                bottom: "0rem",
                margin: "0 auto"                    
            }
        },
        {
            image: asset3,
            style: {
                left: "0rem",
                margin: "auto 0"    
            }
        }
    ]

    useEffect(function(){
        setStylesArr(initialStyleArr)
        setMainImageState(asset2)
    },[])

    useEffect(function(){
        if(stylesArr.length > 0){
            setInterval(function(){
                setCurrentIndexState((prevState) => {
                    if(Number(prevState) >= Number(stylesArr.length - 1)){
                        return 0
                    }
                    else{
                        return Number(prevState + 1)
                    }
                })
            },8000)    
        }
    },[stylesArr])


    useEffect(function(){
        if(stylesArr.length > 1 && currentIndexState < stylesArr.length ){
            setMainImageState(stylesArr[currentIndexState].image)
        }
    },[stylesArr,currentIndexState])

    let bookHandler = function(e:any){
        setBookPopup(<BookWrapper optionPassed="outdoor" setBookPopup={setBookPopup} />)
    }
    
    return(
        <div className="w-full min-h-screen flex flex-col gap-4 ">
            {bookPopup}
            {/*this will be the div with the rotating 6 pics on the side and a major pic at the center of the circle that changes each time randomly*/}
            
            <div className="w-full mb-0 min-h-screen flex flex-col md:flex-row gap-4 md:gap-8 lg:gap-12 bg-gradient-to-br from-pink-600 dark:via-black via-white dark:to-black to-white">
                <div className="w-auto h-auto mx-auto">
                    <div className="w-[26rem] h-[26rem] md:w-[26rem] md:h-[26rem] lg:w-[35rem] lg:h-[35rem] border-none relative rounded-full flex justify-center items-center">
                        <div className="w-[26rem] h-[26rem] md:w-[26rem] animate-delay-1000 animate-[spin_9s_infinite] md:h-[26rem] lg:w-[35rem] lg:h-[35rem] border-none absolute top-0 left-0 rounded-full flex justify-center items-center">
                            {/*use some bit or react to feed the image links as well as enable this*/}
                            {/*center div/center image */}
                            {/*this is one of the image components that will be revolving round*/}
                            {stylesArr.map((value,index) => {
                                return <div key={index} style={value.style} className="w-[4rem] h-[4rem] md:w-[4rem]  md:h-[4rem] lg:w-[5rem] lg:h-[5rem] bg-transparent shadow-sm absolute rounded-full overflow-hidden">
                                    {/*use cldImage as well*/}
                                    <Image src={value.image} alt="avatar" width={850} height={1200}/>
                                </div>
                            })}
                        </div>
                        <div className="w-[18rem] h-[18rem] md:w-[18rem] md:h-[18rem] lg:w-[25rem] lg:h-[25rem] bg-transparent rounded-full shadow-sm overflow-hidden">
                            {/*use the cldImage component*/}
                            <Image src={mainImageState} alt="avatar" width={850} height={1200} className="transition-all duration-1000"/>
                        </div>
                    </div>
                </div>
                {/*this will be the right side div  that will have the action to book a session or call us or chat with us as well as the camera man's pic in the background*/}
                <div className="w-full md:w-[33rem] px-4 flex flex-col lg:mr-6 md:justify-center gap-2  h-auto md:h-[30rem] dark:text-white text-black bg-transparent">
                    <h1 className="text-4xl md:text-5xl lg:text-7xl text-blue-600 font-bold"> <span className="text-pink-600">shoot</span> <span className="text-xl">your</span>  <span className="text-pink-600">shot</span> </h1>
                    <h3 className="text-sm dark:text-slate-600 text-black font-bold md:font-normal dark:font-bold">You need that shot of a lifetime. Life is too good to let the memories fade. Book a shoot session with colour studios today and have a shot of a lifetime</h3>
                    <h2 className="text-xl  font-bold text-blue-600">book a shoot session of a lifetime today</h2>
                    <div className="w-full h-auto flex flex-wrap gap-4">
                        <button className="text-blue-600 font-bold border-blue-600 hover:border-pink-600 border-2 px-5 py-2 rounded-xl" onClick={bookHandler}>book</button>
                        <Link className="text-pink-900 border-pink-900 hover:border-blue-600 bg-transparent no-underline flex gap-4 items-center border-2 px-5 py-2 rounded-xl" href="tel:+254768230039" target="blank"><FaFax className="text-3xl"/><span className="font-bold">call us</span></Link>
                        <Link className="text-green-900 border-green-900 hover:border-pink-600 flex gap-4 items-center border-2 px-5 py-2 rounded-xl" href="https://wa.me/+254768230039" target="blank"><FaWhatsapp className="text-3xl"/><span className="font-bold">chat with us</span></Link>
                    </div>
                </div>
            </div>
            <h1 className="text-2xl dark:text-white text-black font-bold text-center">shoots catalogue</h1>
            <ShootPics setBookPopup={setBookPopup} category="nature" shoots={fakeShootsNature}/>
            <ShootPics setBookPopup={setBookPopup} category="outdoor" shoots={fakeShoots}/>
            <ShootPics setBookPopup={setBookPopup} category="indoor" shoots={fakeShootsIndoor}/>
        </div>
    )
}

//for each category there's a different shoot pic
export function ShootPics({setBookPopup,category,shoots}:{setBookPopup:Dispatch<SetStateAction<JSX.Element>>,category:string,shoots:Array<any>}){
    return(
        <div className="w-full relative min-h-screen pl-4 py-4 md:px-4">
            <h1 className="text-xl dark:text-white text-black font-bold mb-4 sticky top-14 left-4">{category}</h1>
            <div className="w-full max-h-[127rem] md:max-h-[97rem] lg:max-h-[65rem] overflow-hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 py-4 place-items-center">
            {shoots.map((shoot,index) => {
                return <ShootPic key={index} shoot={shoot} setBookPopup={setBookPopup}/>
            })}

            </div>
            <Link className="w-full text-right mt-4 mb-4 relative mr-4 text-pink-900 bg-transparent no-underline flex gap-4 items-center font-bold" href={`categories/${category}`} target="blank"><FaArrowRight/><span>view more</span></Link>
        </div>
    )
}

export function ShootPic({shoot,setBookPopup}:{setBookPopup:Dispatch<SetStateAction<JSX.Element>>,shoot:{image:string,telNo:string,category:string}}){
    //shoot has a category property for the book and the contacts of the shooter as well as  the image
    let bookHandler = function(e:any){
        e.preventDefault()
        setBookPopup(<BookWrapper optionPassed={shoot.category} setBookPopup={setBookPopup}/>)
    }

    return(
        <div className="w-5/6 sm:w-[20rem] lg:w-[20rem] flex-shrink-0 flex-grow-1 h-[31rem] dark:bg-black bg-white shadow-sm shadow-blue-700 rounded-xl p-3">
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