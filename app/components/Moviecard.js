import Image from "next/image"
import "./style.css"
import Link from "next/link"
export default function Moviecard(props) {
  let data = {
    title:props.title,
    pic:props.picture
  }
  return (
    <div>
    <Link className="cardcont w-full h-full absolute bottom-0 z-10"
    href={{
      pathname: "/productDetail",
      query: data,
    }}
    >
    <div></div>
    </Link>
    <div style={{backgroundImage: `url(${props.picture})`, backgroundSize: `cover`}} 
    className="card duration-300 w-56 h-80 transform hover:-translate-y-2 hover:cursor-pointer hover:duration-300"></div>
      <img
        src={props.pngimg}
        className="pngimg absolute w-24 mx-16 bottom-24 h-auto"
      ></img>
    <h1 className='pt-2 text-white font-light text-center w-56 text-xl'>{props.title}</h1>
    </div>
  )
}
