import React, {useState, useEffect} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {ChevronDown, Menu} from "react-feather";
import Image from "next/image";

const Nav=()=>{
    const router = useRouter();

    const [toggle, setToggle] = useState({
        navigation:false,
        dropdown:false
    });

    const [location, setLocation] = useState("");

    useEffect(()=>{
        console.log({router})
        const locNow = router.pathname;
        const home = document.getElementById("home");
        const about = document.getElementById("about");
        const services = document.getElementById("services");
        const portfolio = document.getElementById("portfolio");

        home.classList.remove("active");
        about.classList.remove("active");
        services.classList.remove("active");
        portfolio.classList.remove("active");

        switch(locNow){
            case "/" :
                home.classList.add("active");
            break;
            case "/about" :
                console.log("about");
                about.classList.add("active");
            break;
            case "/services" :
                services.classList.add("active");
            break;
            case "/portfolio" :
                portfolio.classList.add("active");
            break;
            default :
                console.log("Not Found");
        }
        
    }, [router.pathname])

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
        <nav className="lg:container mx-auto flex items-center px-3 py-1 flex-wrap mb-5">
            <div className="brand p-2 mr-4 inline-flex items-center">
                <img src="/assets/logo.svg" width="64px" height="64px" className="rounded-2xl border lg:border-transparent" />
            </div>
            <button 
                onClick={()=>handleToggle("navigation")}
                className="
                text-white inline-flex p-2 bg-gray-800 bg-opacity-50 hover:bg-gray-700 rounded-md lg:hidden ml-auto
                
            ">
                <Menu/>
            </button>
            <div className="lg:inline-flex lg:flex-grow lg:w-auto items-center w-full ">
                <div id="navigation" className="lg:inline-flex lg:flex-row lg:items-center flex flex-col hidden w-full duration-200">
                {/* <div className="lg:inline-flex lg:flex-grow lg:items-center sm:flex flex-col"> */}
                    <Link href="/">
                        <div id="home" className="nav-link home mt-5 lg:mt-2 mr-1 lg:inline-flex px-3 py-2 lg:text-primary rounded hover:text-white hover:bg-gray-500 duration-200 hover:bg-dark-800 active">
                            Home
                        </div>
                    </Link>
                    <Link href="/about">
                        <div id="about" className="nav-link about sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-500 duration-200">
                            About
                        </div>
                    </Link>
                    <Link href="/services">
                        <div id="services" className="nav-link services sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-500 duration-200">
                            Services
                        </div>
                    </Link>
                    <Link href="/portfolio">
                        <div id="portfolio" className="nav-link portfolio sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-500 duration-200">
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