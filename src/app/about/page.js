import Image from 'next/image';
import HeaderComponent from '../components/header/header';
import Banner from '../../../public/banner.svg';
import LandingPageImage1 from '@/../public/landing1.svg';
import FooterComponent from '../components/footer/footer';

export default function AboutPage() {
    return (
        <section className="">
            <HeaderComponent />
            <div className="">
                <div className="relative">
                    <div className=" text-center w-full z-10 text-white sm:w-full md:w-1/2 sm:p-50 sm:top-20 md:text-white md:absolute">
                        <div className=''>
                            <h1 className="text-4xl sm:text-5xl font-bold ">About Us</h1>
                            <p className="mt-2 text-sm sm:text-base font-light ">
                                Explore vinyl flooring, known for its quality and durability. Ideal for renovations or new constructions,
                                it offers a stylish, reliable solution that withstands heavy use without compromising aesthetics.
                            </p>
                        </div>
                    </div>
                    <div className="hidden md:block sm:hidden">
                        <Image src={Banner} alt="Banner" className='w-full' />
                    </div>
                </div>
            </div>
            <div className="flex justify-end h-screen text-black">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center">We are AlvimFloor</h1>
                    <p className="mt-2 text-sm sm:text-base font-light text-center">
                        More than 20 years of tradition in installing vinyl floors and restoring wooden floors.
                        Our company is recognized for the excellence of the services provided,
                        offering lasting solutions, quality materials and qualified professionals.
                        Count on us to transform your environment, bringing beauty and sophistication through high-quality vinyl floors or the restoration of wooden floors, with results that exceed your expectations.
                    </p>
                    <button className="bg-[#776B5D] hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4"> Get a Quote</button>
                </div>
            </div>
            <FooterComponent />
        </section>
    );
}
