"use client";

import React, { useState } from 'react';
import Link from 'next/link';
export default function HeaderComponent() {
     const [showOptions, setShowOptions] = useState(true);

     const handleLogoClick = () => {
          if (window.innerWidth <= 768) {
               setShowOptions(false);
          }
     };

     return (
          <div className="p-10 flex flex-col md:flex-row justify-between items-center border-2 ">
               <button className="text-red-600" onClick={() => handleLogoClick()}>
                    <h1 className="font-bold text-2xl m-0 p-0">Alvim.</h1>
                    <p className="text-left">Floors</p>
               </button>

               <div className={showOptions ? 'block' : 'hidden'}>
                    <ul className="text-black flex flex-row mt-5 md:flex-row gap-10 md:mt-0">
                         <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/`}>Home</Link></li>
                         <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/about`}>About us</Link></li>
                         <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/catalog`}>Catalog</Link></li>
                         <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/contact`}>Contact us</Link></li>
                    </ul>
               </div>
          </div>
     );
}