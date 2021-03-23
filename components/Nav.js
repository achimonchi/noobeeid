import React, {useState} from 'react';
import Link from "next/link";
import {ChevronDown, Menu} from "react-feather";
import Image from "next/image";

const Nav=()=>{
    const [toggle, setToggle] = useState({
        navigation:false,
        dropdown:false
    });

    const handleToggle=(target)=>{
        
        const newToggle = {...toggle};
        newToggle[target] = !newToggle[target]; 
        setToggle(newToggle);

        console.log({newToggle})
        if(newToggle.navigation){
            document.getElementById("navigation").classList.remove("hidden");
        } else {
            document.getElementById("navigation").classList.add("hidden");

        }
        // if(toggle){
            // document.getElementById("dropdown").classList.add("hidden");
        // } else {
        //     document.getElementById("dropdown").classList.remove("hidden");
        // }
    }

    return(
        <nav className="lg:container mx-auto flex items-center p-3 flex-wrap">
            <div className="brand p-2 mr-4 inline-flex items-center ">
                <img src="/assets/logo.svg" width="64px" height="64px" className="rounded-2xl" />
            </div>
            <button 
                onClick={()=>handleToggle("navigation")}
                className="
                text-white inline-flex p-2 bg-gray-800 hover:bg-gray-700 rounded-md lg:hidden ml-auto
            ">
                <Menu/>
            </button>
            <div className="lg:inline-flex lg:flex-grow lg:w-auto items-center w-full ">
                <div id="navigation" className="lg:inline-flex lg:flex-row lg:items-center flex flex-col hidden w-full duration-200">
                {/* <div className="lg:inline-flex lg:flex-grow lg:items-center sm:flex flex-col"> */}
                    <Link href="/">
                        <div className="nav-link sm:mt-2 mr-1 lg:inline-flex px-3 py-2 lg:text-primary rounded hover:text-white hover:bg-gray-500 duration-200 hover:bg-dark-800 active">
                            Home
                        </div>
                    </Link>
                    <Link href="/about">
                        <div className="nav-link sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-500 duration-200">
                            About
                        </div>
                    </Link>
                    <Link href="/services">
                        <div className="nav-link sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-500 duration-200">
                            Services
                        </div>
                    </Link>
                    <Link href="/portfolio">
                        <div className="nav-link sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-500 duration-200">
                            Portfolio
                        </div>
                    </Link>
                    <Link href="/about" className="text-white">
                        <div className="nav-link sm:mt-2 mr-1 mr-3 lg:ml-auto bg-primary px-3 py-2 sm:w-full lg:w-auto lg:py-2 lg:px-10 rounded-md sm:w-full lg:w-auto text-white hover:text-white hover:bg-gray-500" >
                            <div className="text-white">Hubungi Kami</div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

export default Nav;