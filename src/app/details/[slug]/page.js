"use client"
import { useState, useEffect } from "react";
import FooterComponent from "@/app/components/footer/footer";
import HeaderComponent from "@/app/components/header/header";
import AzulTortuga from '../../../../public/azultortuga.svg'
import Panzu from '../../../../public/panzu.svg'
import Vevoxl from '../../../../public/vevoxl.svg'

import data from "@/app/catalog/data";
import Image from "next/image";

export default function Page({ params }) {

     useEffect(() => {
          getDataBySlug(params.slug);
     }, []);

     const [floor, setFloor] = useState([]);
     const [randomFloor, setRandomFloor] = useState([]);

     useEffect(() => {
          for (let i = 0; i < 3; i++) {
               getRandomFloor();
          }
     }, [params.slug]);

     function getDataBySlug(slug) {
          const fl = data.find(item => item.id == slug);

          if (fl) {
               setFloor(fl);
          }
     }

     function getRandomFloor() {
          const random = Math.floor(Math.random() * data.length);

          setRandomFloor(prevRandomFloor => [...prevRandomFloor, { id: data[random].id, floor_name: data[random].floor_name, image: data[random].image }]);
     }


     console.log(randomFloor)


     console.log(floor.line)

     function selectBanner(brand) {
          switch (brand) {
               case "Azul Tortuga":
                    return AzulTortuga;
               case "Panzu Floooring":
                    return Panzu;
               case "V-EVO XL":
                    return Vevoxl;
               case 'V-EVO Max':
                    return Vevoxl;
          }
     }


     return (
          <section>
               <HeaderComponent />
               <div className="p-10">
                    <div className="text-black my-10">
                         {floor.length !== 0 ? (
                              <div>
                                   {floor.image && (
                                        <div>
                                             <div className="flex justify-center gap-5 flex-wrap">
                                                  <div className="text-right">
                                                       <h1 className="text-2xl font-semibold">Details</h1>
                                                       <ul>
                                                            <li>
                                                                 <span className="font-semibold">Brand:</span> {floor.brand}
                                                            </li>
                                                            <li>
                                                                 <span className="font-semibold">Line:</span> {floor.line}
                                                            </li>
                                                            <li>
                                                                 <span className="font-semibold">Width:</span> {floor.width} mm
                                                            </li>
                                                            <li>
                                                                 <span className="font-semibold">Length:</span> {floor.length} mm
                                                            </li>
                                                            <li>
                                                                 <span className="font-semibold">Overall Thickness:</span> {floor.overall_thickness}
                                                            </li>
                                                            <li>
                                                                 <span className="font-semibold">Planks/Carton:</span> {floor.planks_carton}
                                                            </li>
                                                       </ul>
                                                  </div>
                                                  <img
                                                       src={floor.image.floor}
                                                       alt="floor"
                                                       width={500}
                                                       height={500}
                                                       className="select-none"
                                                       loading="lazy"
                                                  />

                                                  <div>
                                                       <h1 className="text-2xl font-semibold">{floor.floor_name}</h1>
                                                       <p>
                                                            {floor.description ? floor.description : "No description"}
                                                       </p>
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </div>
                         ) : null}
                    </div>
                    <div>
                         <h1 className="text-black text-2xl font-semibold ">Others floors you may like</h1>
                         <div className="flex justify-around flex-wrap">
                              {
                                   randomFloor
                                        .slice(0, 5)
                                        .map((item, index) => (
                                             <div key={index} className="my-5 hover:cursor-pointer transition-all ease-out hover:scale-105" onClick={() => window.location.href = `/details/${item.id}`}>
                                                  <img
                                                       src={item.image.floor}
                                                       alt="floor"
                                                       width={150}
                                                       height={100}
                                                       className="select-none"
                                                       loading="lazy"
                                                  />
                                                  <h1 className="text-black font-semibold">
                                                       {item.floor_name}
                                                  </h1>
                                             </div>
                                        ))
                              }
                         </div>
                    </div>
               </div>
               <FooterComponent />
          </section>
     );
}