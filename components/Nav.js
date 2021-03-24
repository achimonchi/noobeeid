import React, {useState, useEffect, useRef} from 'react';
import Link from "next/link";
import {useRouter} from "next/router";
import {ChevronDown, Menu, Globe, Smartphone, Image, Gitlab, Settings} from "react-feather";

const Nav=()=>{
    const router = useRouter();

    const [toggle, setToggle] = useState({
        navigation:false,
        dropdown:false
    });

    useEffect(()=>{
        const locNow = router.pathname;
        const home = document.getElementById("home");
        const about = document.getElementById("about");
        const services = document.getElementById("services");
        const portfolio = document.getElementById("portfolio");

        home.classList.remove("active");
        about.classList.remove("active");
        services.classList.remove("active");
        portfolio.classList.remove("active");

        const tempToggle = {...toggle};
        tempToggle.navigation = false;
        tempToggle.dropdown = false;

        setToggle(tempToggle);

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

    useEffect(()=>{
        if(toggle.navigation){
            document.getElementById("navbar").classList.add("bg-primary");
            document.getElementById("navigation").classList.remove("hidden");
            setTimeout(()=>{
                document.getElementById("navigation").classList.remove("opacity-0");
                document.getElementById("navigation").classList.remove("-translate-x-96");
            }, 200)
        } else {
            document.getElementById("navigation").classList.add("-translate-x-96");
            setTimeout(()=>{
                document.getElementById("navbar").classList.remove("bg-primary");
                document.getElementById("navigation").classList.add("opacity-0");
            },200)
            setTimeout(()=>{
                document.getElementById("navigation").classList.add("hidden");

            },300)

        }
    }, [toggle])

    const handleToggle=(target)=>{
        const newToggle = {...toggle};
        newToggle[target] = !newToggle[target]; 
        setToggle(newToggle);
    }

    return(
        <nav id="navbar" className="z-10 container duration-200 mx-auto flex items-center px-3 py-1 flex-wrap top-0 fixed left-0 right-0 ">
            <div className="brand p-2 mr-4 inline-flex items-center">
                <img src="/assets/logo.svg" alt="logo" className="rounded-2xl border lg:border-transparent w-8 h-8" />
                <h1 className="text-white ml-2 lg:hidden font-bold tracking-wide">NOOBEEID</h1>
            </div>
            <button 
                onClick={()=>handleToggle("navigation")}
                className="
                text-white inline-flex p-2 bg-gray-800 bg-opacity-50 hover:bg-gray-700 rounded-md lg:hidden ml-auto
            ">
                <Menu/>
            </button>
            <div className="lg:inline-flex lg:flex-grow lg:w-auto items-center w-full ">
                <div 
                id="navigation" 
                className="
                    lg:inline-flex 
                    lg:flex-row 
                    lg:items-center 
                    lg:inline
                    flex 
                    flex-col 
                    opacity-0 
                    lg:opacity-100
                    w-full 
                    duration-200 
                    lg:-translate-x-0
                    transform"
                >
                    <Link href="/">
                        <div id="home" className="nav-link home mt-5 lg:mt-2 mr-1 lg:inline-flex px-3 py-2 lg:text-primary rounded hover:text-white hover:bg-gray-800 hover:bg-opacity-50 duration-200 hover:bg-dark-800 active">
                            Home
                        </div>
                    </Link>
                    <Link href="/about">
                        <div id="about" className="nav-link about sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-800 hover:bg-opacity-50 duration-200">
                            About
                        </div>
                    </Link>
                    
                    <div onClick={()=>handleToggle("dropdown")} id="services" className="nav-link services sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-800 hover:bg-opacity-50 duration-200 flex flex-col lg:flex-row">
                        <div className="flex">Services <ChevronDown className="font-bold text-sm"/></div>
                        <Dropdown toggle={toggle.dropdown} />
                    </div>
                    <Link href="/portfolio">
                        <div id="portfolio" className="nav-link portfolio sm:mt-2 mr-1 lg:inline-flex px-3 py-2 rounded hover:text-white hover:bg-gray-800 hover:bg-opacity-50 duration-200">
                            Portfolio
                        </div>
                    </Link>
                    <Link href="/about" className="text-white">
                        <div className="nav-link sm:mt-2 mr-1 mr-3 lg:ml-auto bg-primary px-3 py-2 sm:w-full lg:w-auto lg:py-2 lg:px-10 rounded-md sm:w-full lg:w-auto text-white hover:text-white hover:bg-gray-800 hover:bg-opacity-50" >
                            <div className="text-white">Get in Touch</div>
                        </div>
                    </Link>
                </div>
            </div>
        </nav>
    )
}

const Dropdown = (props)=>{
    let dropdownList = useRef(null);
    useEffect(()=>{ 
        const {toggle} = props;
        const dropdown = document.getElementById("dropdown");
        const dropdownMobile = document.getElementById("dropdown-mobile");

        if(innerWidth > 800){
            if(toggle){
                // dropdown.classList.remove("hidden");
                
                dropdown.classList.remove("scale-0");
            } else {
                dropdown.classList.add("scale-0");
            }
        } else {
            if(toggle){
                dropdownMobile.classList.remove("hidden");
            } else {
                dropdownMobile.classList.add("hidden");
            }

        }

    }, [props.toggle])
    return(
        <>
            <div 
                ref={el=>dropdownList=el}
                className="
                    dropdown 
                    relative
                    flex
                    flex-col
                    pl-3
                    mt-2
                    lg:hidden
                    py-2
                " 
            id="dropdown-mobile">
                <Link href="/services">
                    <div className="mt-3 p-2 flex w-full border-b border-opacity-50 border-gray-100">
                        <h1 className="">Web Development</h1>
                        
                    </div>
                </Link>
                <Link href="/services">
                    <div className="mt-3 p-2 flex w-full border-b border-opacity-50 border-gray-100">
                        <h1 className="">UI UX Design</h1>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="mt-3 p-2 flex w-full border-b border-opacity-50 border-gray-100">
                        <h1 className="">Mobile Development</h1>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="mt-3 p-2 flex w-full border-b border-opacity-50 border-gray-100">
                        <h1 className="">Branding</h1>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="mt-3 p-2 flex w-full border-b border-opacity-50 border-gray-100">
                        <h1 className="">Training</h1>
                    </div>
                </Link>
            </div>
            <div 
                className="
                    dropdown 
                    bg-gray-50 
                    p-3
                    absolute
                    mt-10
                    left-24
                    w-8/12
                    grid 
                    grid-cols-12
                    rounded-2xl
                    shadow-xl
                    scale-0
                    duration-200
                    transform
                " 
            id="dropdown">

                <Link href="/services">
                    <div className="p-4 col-span-6 opacity-50 hover:opacity-100 duration-150 text-gray-800 hover:shadow-md hover:bg-white rounded-lg">
                        <div className="p-2 top-0 relative self-start flex flex-col"><Globe/></div>
                        <div>
                            <h1 className="font-bold">Web Development</h1>
                            <p className="font-normal">Kami menyediakan layanan dalam pengembangan aplikasi berbasis website</p>
                        </div>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="p-4 col-span-6 opacity-50 hover:opacity-100 duration-150 text-gray-800 hover:shadow-md hover:bg-white rounded-lg">
                        <div className="p-2 top-0 relative self-start"><Image/></div>
                        <div>
                            <h1 className="font-bold">UI UX Design</h1>
                            <p className="font-normal">User Experience dan Interface yang baik sangat berpengaruh dalam bisnis digital</p>
                        </div>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="p-4 col-span-6 opacity-50 hover:opacity-100 duration-150 text-gray-800 hover:shadow-md hover:bg-white rounded-lg">
                        <div className="p-2 top-0 relative self-start"><Smartphone/></div>
                        <div>
                            <h1 className="font-bold">Mobile Development</h1>
                            <p className="font-normal">Kami menyediakan layanan dalam pengembangan aplikasi mobile.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="p-4 col-span-6 opacity-50 hover:opacity-100 duration-150 text-gray-800 hover:shadow-md hover:bg-white rounded-lg">
                        <div className="p-2 top-0 relative self-start"><Gitlab/></div>
                        <div>
                            <h1 className="font-bold">Branding</h1>
                            <p className="font-normal">Butuh logo? Design grafis? atau design untuk memperkuat brand kamu? Kami bisa.</p>
                        </div>
                    </div>
                </Link>
                <Link href="/services">
                    <div className="p-4 col-span-6 opacity-50 hover:opacity-100 duration-150 text-gray-800 hover:shadow-md hover:bg-white rounded-lg">
                        <div className="p-2 top-0 relative self-start"><Settings/></div>
                        <div>
                            <h1 className="font-bold">Training</h1>
                            <p className="font-normal">Kami mempunyai trainer yang professional dan berkompeten dibidangnya.</p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}

export default Nav;