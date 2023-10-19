"use client"
import "@/globals.css";
import Moviecard from "@/app/components/Moviecard";
import Navbar from "@/app/components/Navbar";
import "./style.css"
import Head from "next/head";

export default function HomePage() {
  return (
    <main>
  <Head>
    <title>Home - Cinema</title>
  </Head>
      <Navbar></Navbar>
        <div className="m-auto mt-8 w-11/12">
        <div>
        <div className="slider">
          <div className="slideimgs">
          <img src="https://shorturl.at/pT235"></img>
          <img src="https://shorturl.at/gHJ24"></img>
          <img src="https://shorturl.at/lSX04"></img>
          <img src="https://shorturl.at/rCEJQ"></img>
          <img src="https://shorturl.at/pT235"></img>
          <img src="https://shorturl.at/gHJ24"></img>
          </div>
          
        </div>
        </div>
        <div className="mt-10 w-11/12 m-auto">
            <h2 className="text-3xl text-gray-300 font-extralight">FEATURED</h2>
            <div className="grid grid-cols-5 mt-5 gap-9">
            <Moviecard pngimg = "https://shorturl.at/doCU1" picture = "https://shorturl.at/amDE1" title = "Avatar 2"></Moviecard>
            <Moviecard pngimg = "https://t.ly/Ll14L" picture = "https://shorturl.at/clDGL" title = "Blue Beetle"></Moviecard>
            <Moviecard pngimg = "https://shorturl.at/mpBNV" picture = "https://shorturl.at/epBDN" title = "Barbie"></Moviecard>
            <Moviecard pngimg = "https://t.ly/FmWCN" picture = "https://shorturl.at/iz359" title = "The Flash"></Moviecard>
            <Moviecard pngimg = "https://shorturl.at/gV489" picture = "https://shorturl.at/afgS7" title = "Elemental"></Moviecard>

            <Moviecard pngimg = "https://t.ly/BRyUw" picture = "https://rb.gy/hwapc" title = "Puss in Boots"></Moviecard>
            <Moviecard pngimg = "https://shorturl.at/hkJYZ" picture = "https://rb.gy/sirvy" title = "Oppenheimer"></Moviecard>
            <Moviecard pngimg = "https://shorturl.at/muCJ9" picture = "https://rb.gy/xaily" title = "Mario Bros"></Moviecard>
            <Moviecard pngimg = "https://shorturl.at/dpz27" picture = "https://rb.gy/fn5lb" title = "Teenage Mutant Ninja Turtles Mutant Mayhem"></Moviecard>
            <Moviecard pngimg = "https://shorturl.at/hjyG9" picture = "https://rb.gy/gh04r" title = "Guardians of the Galaxy Vol. 3"></Moviecard>
            </div>
        </div>
        </div>
    </main>
  )
}
