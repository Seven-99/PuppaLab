import React, { useState } from "react";

export default function Footer(){
    return(
        <footer className="w-full bg-[#F9E7A8] text-[#1B1B1B] py-10 mt-20">
            <div className="w-full flex flex-col items-center gap-4">

                {/* Name and Logo */}
                <div className="flex items-center gap-3">
                    <span className="text-3xl font-title tracking-widest">PUPPA LAB</span>
                    <div className="w-[2px] h-8 bg-white"></div>
                    <span className="font-text text-sm tracking-wider">CREATIVE STUDIO</span>
                </div>

                
                {/* Navegation Links */}
                <ul className="flex gap-8 opacity-80 hover:[&>*]:opacity-100 transition-all">
                    <li>
                        <a href="https://linkedin.com" target="_blank">
                            <img 
                                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/linkedin.svg" 
                                className="w-6 h-6" 
                                alt="LinkedIn" 
                            />
                        </a>
                    </li>

                    <li>
                        <a href="https://instagram.com" target="_blank">
                            <img 
                                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/instagram.svg" 
                                className="w-6 h-6" 
                                alt="Instagram" 
                            />
                        </a>
                    </li>

                    <li>
                        <a href="https://wa.me/##########" target="_blank">
                            <img 
                                src="https://cdn.jsdelivr.net/gh/simple-icons/simple-icons/icons/whatsapp.svg" 
                                className="w-6 h-6" 
                                alt="WhatsApp" 
                            />
                        </a>
                    </li>
                </ul>

                {/* Separator */}
                <div className="w-full h-1[1px] bg-white/20"></div>

                {/* Copyright */}
                <p className="text-xs text-[#1B1B1B] tracking-wide text-center">
                {new Date().getFullYear()} PuppaLab - Creation, Design & Digital Marketing.</p>
            </div>
        </footer>
    )
}