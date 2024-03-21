import Link from 'next/link';

export default function FooterComponent() {
     return (
          <footer className="bg-[#776B5D] text-white py-6">
               <div className="">
                    <div className="flex flex-col gap-10 md:flex-row sm:gap-10 justify-between p-20">
                         <div>
                              <button className="text-white">
                                   <h1 className="font-bold text-2xl m-0 p-0">Alvim.</h1>
                                   <p className="text-left">Floors</p>
                              </button>
                         </div>
                         <div className="flex items-center">
                              <ul className="flex flex-row gap-10">
                                   <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/`}>Home</Link></li>
                                   <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/about`}>About us</Link></li>
                                   <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/catalog`}>Catalog</Link></li>
                                   <li className="hover:font-bold hover:cursor-pointer transition-all ease-out text-xs md:text-base"><Link href={`/contact`}>Contact us</Link></li>
                              </ul>
                         </div>
                         <div>
                              <ul>
                                   <li>WhatsApp</li>
                                   <li>Facebook</li>
                                   <li>Instagram</li>
                              </ul>
                         </div>
                    </div>
               </div>
               <div className="text-center mt-6">
                    <p>&copy; 2024 Alvim Floors. All Rights Reserved.</p>
               </div>
          </footer>
     )
}