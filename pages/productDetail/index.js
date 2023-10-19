"use client"
import Navbar from "@/app/components/Navbar";
import "@/globals.css";
import Head from "next/head";
import Link from "next/link";
import { useRouter } from "next/router";
import {useState, useEffect} from 'react'
import "./style.css"

export default function ProductDetail() {

  const router = useRouter();
  const data = router.query;
  const [timeSelected, setTimeSelected] = useState('10:30hs')
  const [dayselected, setDaySelected] = useState('SATURDAY 22-9')
  const [hasSelected, setHasSelected] = useState(false)
  const [newclass, setnewclass] = useState('hidden')

  useEffect(()=>{
    if(hasSelected) setnewclass('block')
    
  },[hasSelected])

  return (
    <main>
    <Head>
      <title>{data.title} - Cinema</title>
    </Head>
    <Navbar></Navbar>
    <div className="flex">

      <div style={{backgroundImage: `url(${data.pic})`,backgroundSize: 'contain',height:'600px',backgroundRepeat: 'no-repeat'}}
       className="absolute w-96 z-0 m-24">
      </div>

      <div style={{marginLeft:'600px'}} className="block">

      <div className="grid place-items-center">
      <h1 className="m-24 mb-5 mx-0 text-7xl text-center uppercase tracking-widest">{data.title}</h1>
      <p className="border border-gray-300 w-12 p-2 text-center rounded-lg mb-10">+13</p>
      </div>

      <div className="flex justify-center"><p className="w-3/4 text-center">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
      incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
      ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
       Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
        </p></div>

      <div className="flex justify-center mt-10 mr-5">

      <div className="border p-4 w-full block">
          <select onChange={event =>{setDaySelected(event.target.value)}} id="day" 
          className="hover:cursor-pointer border w-full text-center p-2 bg-white text-black rounded-lg focus:outline-none">
            <option>SATURDAY 22-9</option>
            <option>SUNDAY 23-9</option>
            <option>MONDAY 24-9</option>
          </select>

          <div className="grid grid-cols-3 mt-6 gap-4">
          <button onFocus={()=>{setTimeSelected('10:30hs'); setHasSelected(true)}} className="duration-300 p-2 border rounded-lg hover:bg-white hover:text-black hover:duration-300 focus:bg-white focus:text-black">10:30Hs</button>
          <button onFocus={()=>{setTimeSelected('11:30hs'); setHasSelected(true)}} className="duration-300 p-2 border rounded-lg hover:bg-white hover:text-black hover:duration-300 focus:bg-white focus:text-black">11:30Hs</button>
          <button onFocus={()=>{setTimeSelected('13:30hs'); setHasSelected(true)}}  className="duration-300 p-2 border rounded-lg hover:bg-white hover:text-black hover:duration-300 focus:bg-white focus:text-black">13:30Hs</button>
          <button onFocus={()=>{setTimeSelected('15:30hs'); setHasSelected(true)}} className="duration-300 p-2 border rounded-lg hover:bg-white hover:text-black hover:duration-300 focus:bg-white focus:text-black">15:30Hs</button>
          <button onFocus={()=>{setTimeSelected('18:30hs'); setHasSelected(true)}} className="duration-300 p-2 border rounded-lg hover:bg-white hover:text-black hover:duration-300 focus:bg-white focus:text-black">18:30Hs</button>
          </div>

      </div>
      </div>

      <div className={`${newclass} buy mt-6`}>
        <p className="mb-6">Tickets for: {data.title} on: {dayselected} at: {timeSelected}</p>

        <div className="w-36">
        <Link href={"/login"}>
          <button className="flex justify-center items-center rounded-lg bg-yellow-300 text-black p-2 w-36 font-bold"> 
            Buy now
            </button>
          </Link>
        </div>
      </div>

      </div>
    </div>
    </main>
  )
}
