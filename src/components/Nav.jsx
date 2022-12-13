import {React, useState} from "react";
import { Link } from "react-router-dom";


const Nav = () => {
    const [menu, setMenu] = useState(false)
  return (
    <>
    
   
    <div>
        
        

        <div className="">
            
            <Link to="/" className="center ">
            <p className="text-5xl content-center w-10 "/>
                 
            <span className="text-sm font-Sniglet text-center text-violet-600">Home</span>
            </Link>

            <Link to="/About" className="center ">
            <p className="text-5xl content-center w-10 "/>
                 
            <span className="text-sm font-Sniglet text-center text-violet-600">About</span>
            </Link>

            <Link to="/Projects" className="center ">
            <p className="text-5xl content-center w-10 "/>
                 
            <span className="text-sm font-Sniglet text-center text-violet-600">Projects</span>
            </Link>

            <Link to="/Contact" className="center ">
            <p className="text-5xl content-center w-10 "/>
                
            <span className="text-sm font-Sniglet text-center text-violet-600">Contact</span>
            </Link>
        </div>

</div>
</>
);};
export default Nav
