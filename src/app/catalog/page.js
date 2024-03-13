"use client"

import React, { useState } from 'react';
import HeaderComponent from "../components/header/header";
import BoringBanner from '../../../public/boring.svg'
import Vevo from '../../../public/vevo.svg'
import Tortuga from '../../../public/tortuga.svg'
import Image from 'next/image'

export default function CatalogPage() {
     const [selectedButton, setSelectedButton] = useState(null);

     const handleButtonClick = (buttonName) => {
          setSelectedButton(buttonName);
     };

     return (
          <section>
               <HeaderComponent />
               <div>
                    <div className="w-screen">
                         <div className="text-center text-black">
                              <h1 className="text-2xl font-bold mt-10">Looking for a vinyl floor?</h1>
                              <p className="text-red-400 mt-2">
                                   See our complete catalog
                              </p>
                         </div>
                         <div className="flex flex-col justify-center w-1/2 mx-auto">
                              <input className="border-[#D9D9D9] border-2 mt-5 rounded-[8px] p-2 text-black w-full" />
                              <div className="flex justify-center mt-4">
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Bedroom' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Bedroom')}
                                   >
                                        Bedroom
                                   </button>
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Bathroom' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Bathroom')}
                                   >
                                        Bathroom
                                   </button>
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Kitchen' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Kitchen')}
                                   >
                                        Kitchen
                                   </button>
                                   <button
                                        className={`p-4 text-black w-full ${selectedButton === 'Living Room' ? 'bg-[#EBE3D5]' : 'bg-white'}`}
                                        onClick={() => handleButtonClick('Living Room')}
                                   >
                                        Living Room
                                   </button>
                                   <select className="bg-[#EBE3D5] text-black p-2">
                                        <option>Choose a filter</option>
                                        <option>Price</option>
                                        <option>Best sellers</option>
                                        <option>Rating</option>
                                   </select>
                              </div>

                         </div>
                    </div>
               </div>

          </section>

     )
}