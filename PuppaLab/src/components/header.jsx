import React from "react";

export default function Header(){
    return(
        <header className="relative w-full bg-[#008577] z-50">

            {/*<div className="absolute right-0 top-0 h-full flex items-center opacity-70
            pointer-events-none">
                <img src="" alt="B marca"
                className="h-[140%] translate-x-10" />
            </div>*/}

            <nav className="max-w-8xl mx-auto flex py-6 px-6 flex items-center justify-between z-10">

                <div className="flex items-center gap-4">
                    <h1 className="text-white font-title text-4xl">PUPA LAB</h1>

                    <div className="w-[2px] h-10 bg-white"></div>

                    <div className="text-white flex items-center gap-2">
                        <span className="font-title text-3xl">B</span>
                        <span className="font-text tracking-wide">CREATIVE STUDIO</span>
                    </div>
                </div>

                <ul className="hidden md:flex gap-8 text-white font-text text-lg">
                    <li><a href="/home" className="hover:opacity-80">Home</a></li>
                    <li><a href="/about" className="hover:opacity-80">About Us</a></li>
                    <li><a href="/contact" className="hover:opacity-80">Contact</a></li>
                </ul>
            </nav>
            
        </header>
    )
}