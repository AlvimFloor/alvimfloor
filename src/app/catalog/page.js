"use client"

import React, { useState } from 'react';
import HeaderComponent from "../components/header/header";
import data from "./data.js";
import { Star } from 'lucide-react';
import { redirect } from 'next/dist/server/api-utils';
import Banner from '@/../public/banner.svg';
import FooterComponent from '../components/footer/footer';
import Image from 'next/image';


export default function CatalogPage() {
     const [selectedButton, setSelectedButton] = useState(null);
     const [search, setSearch] = useState('');

     const [ActualPage, setActualPage] = useState(1);
     const [ItemsPerPage, setItemsPerPage] = useState(5);

     const handleButtonClick = (buttonName) => {
          setSelectedButton(buttonName);
     };


     const totalItems = data.length; // Calculate total items after filtering
     const totalPages = Math.ceil(totalItems / ItemsPerPage); // Calculate total pages

     const indexOfLastItem = Math.min(ActualPage * ItemsPerPage, totalItems); // Adjust last item index
     const indexOfFirstItem = indexOfLastItem - ItemsPerPage;
     const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

     console.log(currentItems)


     const paginate = (pageNumber) => {
          setActualPage(pageNumber);
     };


     return (
          <section>
               <HeaderComponent />
               <div className="w-f">
                    <Image src={Banner} alt="Banner" className='w-full' />
               </div>
               <div className='my-10'>
                    <div className="w-screen">
                         <div className="text-center text-black">
                              <h1 className="text-2xl font-bold mt-10">Step into Style: Your Premier Flooring Destination</h1>

                         </div>
                         <div className="flex flex-col justify-center w-1/2 mx-auto">
                              <input
                                   type="text"
                                   placeholder="Search for a floor"
                                   onChange={(e) => {
                                        setSearch(e.target.value)
                                        setActualPage(1)
                                        setItemsPerPage(40)
                                   }}
                                   className="border-[#D9D9D9] border-2 mt-5 rounded-[8px] p-2 text-black w-full" />
                              <div className="flex justify-center flex-wrap md:flex-nowrap mt-4">
                                   <select className="bg-[#ff3434] text-white p-2 rounded-lg">
                                        <option>Choose a filter</option>
                                        <option>Price</option>
                                        <option>Best sellers</option>
                                        <option>Rating</option>
                                   </select>
                              </div>

                         </div>
                    </div>
                    <div className='flex flex-col w-full mx-auto py-6 px-10'>
                         {
                              data
                                   .filter((item) => {
                                        if (search === '') {
                                             return item
                                        } else if (item.floor_name.toLowerCase().includes(search.toLowerCase())) {
                                             return item
                                        }
                                   })
                                   .slice(indexOfFirstItem, indexOfLastItem)
                                   .map((item, index) => {
                                        return (
                                             <div key={index} className="flex justify-between mt-5  mx-auto w-full">
                                                  <div className="flex flex-row gap-4">
                                                       <img src={
                                                            item.image.floor
                                                       } alt="floor"
                                                            width={300}
                                                            height={200}
                                                            className='select-none'
                                                            loading='lazy'

                                                       />
                                                  </div>
                                                  <div className="flex flex-col py-2 w-full p-5">
                                                       <div className='flex flex-row justify-between'>
                                                            <div>
                                                                 <p className="text-black font-bold text-xl">{item.floor_name}</p>
                                                                 <p className="text-black font-semibold">{item.line} Collection</p>
                                                                 <p className="text-black font-light">{item.brand}</p>
                                                                 <ul className='text-black'>
                                                                      <li>
                                                                           Floor width: {item.width}mm
                                                                      </li>
                                                                      <li>
                                                                           Floor length: {item.length}mm
                                                                      </li>
                                                                 </ul>
                                                            </div>
                                                       </div>
                                                       <div className='flex flex-col items-end mt-auto'>
                                                            <button className="bg-[#ff3434] p-2 w-full mt-4 font-bold text-white" onClick={() => {
                                                                 window.location.href = `/details/${item.id}`
                                                            }}>View more</button>
                                                            <p className='text-slate-500 text-xs'>For more infos, click here</p>

                                                       </div>
                                                  </div>

                                             </div>
                                        )
                                   })
                         }
                    </div>
                    <div className="flex justify-center mt-4 my-5">
                         {
                              search != ''
                                   ?
                                   (
                                        <button
                                             className={`p-4 text-black ${ActualPage === 1 ? 'bg-[#ff3434]' : 'bg-white'}`}
                                             onClick={() => paginate(1)}
                                        >
                                             1
                                        </button>
                                   ) :
                                   Array.from({ length: totalPages }).map((_, index) => (
                                        <button
                                             key={index}
                                             className={`p-4 text-black ${ActualPage === index + 1 ? 'bg-[#ff3434]' : 'bg-white'}`}
                                             onClick={() => paginate(index + 1)}
                                        >
                                             {index + 1}
                                        </button>
                                   ))

                         }
                    </div>
               </div>
               <FooterComponent />
          </section>

     )
}

