import React from 'react';
import Link from "next/link";
import {ChevronDown, Menu} from "react-feather";
import Image from "next/image";

const Nav=()=>{
    return(
        <nav className="py-4 px-8 flex justify-between">
            <div className="left flex">
                <div className="brand">
                    <img
                        className="rounded-lg" 
                        src="/assets/logo.svg" 
                        width="64" 
                        height="64"/>
                </div>
                <div className="link flex items-center">
                    <div className="nav-link ml-3"><Link href="/">Home</Link></div>
                    <div className="nav-link ml-3"><Link href="/about">About</Link></div>
                    <div className="nav-link ml-3"><Link href="/services">Services</Link></div>
                    <div className="nav-link ml-3"><Link href="/portfolio">Portfolio</Link></div>
                </div>
            </div>
            <div className="right">
                <button className="px-10 py-2 rounded-md bg-gray-800 text-white">Hubungi Kami</button>
            </div>
        </nav>
    )
}

export default Nav;