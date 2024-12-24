'use client'
import { usePathname } from "next/navigation"
import Link from "next/link"
import {useRef,useEffect,useState} from "react"
import {FaShoppingCart, FaSun,FaMoon,FaBars,FaRegWindowClose} from "react-icons/fa"
import Logo from "../assets/logo.jpg"
import {Cart} from "./components/cart"
import clsx from "clsx"
import Image from "next/image"
import {useTheme} from "next-themes"

export function NavComponents(){
    const {setTheme,resolvedTheme} = useTheme()
    const [menuState,setMenuState] = useState(<div className="hidden"></div>)
    const [darkState,setDarkState] = useState(<FaSun className="text-2xl animate-[spin_0.3s_ease-in-out_1] dark:text-green-500"/>)
    // detects the current path that they are in.
    const pathName = usePathname()
    const [cartState,setCartState] = useState()


    // The link we're using is from next hence I can't access the native link element through react's href-

    useEffect(function(){
        if(resolvedTheme == "dark"){
            setDarkState(<FaSun className="text-3xl lg:text-4xl animate-[spin_0.3s_ease-in-out_1] dark:text-blue-600"/>)
        }
        else{
            setDarkState(<FaMoon className="text-3xl lg:text-4xl animate-[spin_0.3s_ease-in-out_1] text-black"/>)
        }
    },[])

    let links = [{name: "home",href:"/"},{name: "nature",href:"/categories/nature"},{name: "outdoor",href:"/categories/outdoor"},{name: "indoor",href:"/categories/indoor"},{name: "contact-us",href:"/contact"}]

    let cartHandler = function(e){
        e.preventDefault()
        setCartState(<Cart setCartState={setCartState}/>)
    }
    let lightHandler = function(e){
        e.preventDefault()
        if(resolvedTheme == "dark"){
            setDarkState(<FaMoon className="text-3xl lg:text-4xl animate-[spin_0.3s_ease-in-out_1] text-black"/>)
            setTheme('light')
        }
        else{
            setDarkState(<FaSun className="text-3xl lg:text-4xl animate-[spin_0.3s_ease-in-out_1] dark:text-blue-600"/>)
            setTheme('dark')
        }
    }

    let listToggler = function(e){
        e.preventDefault()
        setMenuState(<HamburgerMenu itemsList={links} setMenuState={setMenuState}/>)
    }

    return (
        <>
            <div className=" bg-transparent dark:text-slate-600 w-auto z-20  mx-0 sticky top-0 mb-0 lg:pb-5 px-6 h-12 md:h-16 lg:h-20 bg-white-700 box-border overflow-hidden flex items-center justify-between">
                <p className="text-xl md:text-xl backdrop-blur-xl text-pink-500 w-fit bg-transparent h-fit px-4 py-3 rounded-lg  font-bold text-center flex items-center">
                    <span className="text-blue-600 flex items-center" >colour</span>
                    <span className="text-pink-600 flex items-center">studios</span>
                </p>
                <button className="fixed bottom-4 right-4 p-2 rounded-full dark:bg-slate-600 bg-blue-600 lg:p-4 " onClick={lightHandler}>
                    {darkState}
                </button>
                <div className="hidden w-6/12 h-full md:flex items-center justify-evenly">
                {links.map(function(link,index){
                    // use clsx later for conditional styling for now am using the ref
                    return (<Link className={clsx("text-center backdrop-blur-xl  md:flex rounded-lg items-center hover:border-blue-600 text-xl px-3 py-2",{"text-blue-700 border-2 border-blue-600": link.href == pathName,"text-black dark:text-slate-600": link.href != pathName})}  key={link.href} name={link.name} href={link.href}>{link.name}</Link>)        
                })}        
                </div>
                <button onClick={listToggler} className="block px-2 py-2 rounded-lg backdrop-blur-xl lg:hidden">
                    <FaBars className="text-2xl"/>
                </button>
            </div>
            {cartState}
            {menuState}
        </>
    )
}


export function HamburgerMenu({itemsList,setMenuState}){
    const pathName = usePathname()
    // each item in the item list must have a name and a link property
    // for each nested item just add a nestedList array property to the current item
    let cancelHandler = function(e){
        e.preventDefault()
        setMenuState("")
    }
    return(
        <div className="fixed drop-shadow-xl right-0 top-0 z-30 px-3 flex flex-col items-end  overflow-auto h-full w-3/4 sm:w-1/3 bg-gradient-to-br from-pink-600 dark:via-black via-white dark:to-black to-white  shadow-sm shadow-blue-700  dark:text-white text-green-950">
            <div className="w-full flex justify-between h-12 px-3 pt-3 mb-4 ">
                <p className="text-xl md:text-xl text-pink-500 h-4 font-bold text-center flex items-center">
                    <span className="text-blue-600 flex items-center" >colour</span>
                    <span className="text-pink-600 flex items-center">studios</span>
                </p>
                <FaRegWindowClose className="text-2xl text-blue-500 " onClick={cancelHandler}/>
            </div>
            <p className="w-full text-slate-600 text-left font-medium mb-2">menu</p>
            <div className= "h-4/5 w-full overflow-auto flex flex-col gap-4">
            {itemsList != undefined && itemsList != null ? 
                itemsList.map(function(item){
                    return  <div className="w-full h-auto flex flex-col gap-2 items-start" >
                        <Link key={item.href} name={item.name} href={item.href} className={clsx("font-medium w-fit h-fit py-2 px-3 rounded-xl",{" text-blue-700 border-2  border-blue-600   ": item.href == pathName,"text-slate-600 border-2 border-slate-600 ": item.href != pathName})}>
                            {item.name}                        
                        </Link>
                        {/*check the inner list property*/}
                        {item.innerList != undefined ?
                        item.innerList.map(function(nestedItem){
                            return <div className="w-full h-auto pl-4 mt-2 ml-6">
                                <Link key={nestedItem.href} name={nestedItem.name} href={nestedItem.href} className={clsx("font-medium w-fit h-fit py-2 px-3 rounded-lg",{"text-blue-600 border-2 border-blue-600": item.href == pathName,"border-2 text-slate-600 border-slate-600": item.href != pathName})} >
                                {nestedItem.name}                        
                                </Link>          
                            </div>
                        })
                        :
                        <div className="hidden"></div>
                    }
                    </div>
            })
            :
            <div className="hidden"></div>
            }
            </div>
        </div>
    )
}
