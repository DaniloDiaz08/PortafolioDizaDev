import {React, useState} from "react";
import { Link } from "react-router-dom";
import Mylogo from '../assets/minilogo.png'


const Nav = () => {
    const [menu, setMenu] = useState(false)
  return (
    <>
    
   
    <div>
        
        <div className=" bg-black px-10 scale-95 flex flex-row justify-around items-center">
        <div>
        <img className=" scale-1" src={Mylogo} alt="Logodizadev" />
        </div>
        <p className=" text-white font-Fredoka text-4xl">BIENVENIDOS</p>
            <Link to="/" className="center flex-row ">
            <p className="text-5xl content-center w-10 "/>
            <span className=" text-center font-Fredoka text-emerald-50 text-xl bg-cyan-400 p-2 px-5 rounded-lg">Home</span>
            </Link>

            <Link to="/About" className="center ">
            <p className="text-5xl content-center w-10 "/>
            <span className=" text-center font-Fredoka text-emerald-50 text-xl bg-cyan-400 p-2 px-5 rounded-lg">About me</span>
            </Link>

            <Link to="/Word" className="center ">
            <p className="text-5xl content-center w-10 "/>
            <span className=" text-center font-Fredoka text-emerald-50 text-xl bg-cyan-400 p-2 px-5 rounded-lg">Projects</span>
            </Link>

            <Link to="/Contact" className="center ">
            <p className="text-5xl content-center w-10 "/>
            <span className="  text-center font-Fredoka text-emerald-50 text-xl bg-cyan-400 p-2 px-5 rounded-lg">Contact</span>
            </Link>
        </div>

</div>
</>
);};
export default Nav
