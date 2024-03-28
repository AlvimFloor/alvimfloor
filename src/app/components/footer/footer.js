import Link from 'next/link';
import Image from 'next/image';
import Instagram from '../../assets/Instagram.svg'
import Facebook from '../../assets/Facebook.svg'

export default function FooterComponent() {
     return (
          <footer className="bg-[#ff3434] text-white py-6">
               <div className="">
                    <div className="flex flex-col items-center gap-10 md:flex-row sm:gap-10 justify-between p-20">
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
                              <ul className='flex gap-5 items-center'>
                                  <li> <a href="https://www.facebook.com/people/Alvim-Floors/pfbid0uuhPJdoaPckMzcKk5iXtYqvSoCQB8gfZDUM4tpggAAWhKhKhaXz5BCQC8fNG81b6l/" class="font-medium"><Image src={Facebook} /></a></li>
                                  <li> <a href="https://www.instagram.com/alvimfloors/" class="font-medium"><Image src={Instagram} /></a></li>
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