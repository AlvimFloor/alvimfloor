import Image from 'next/image'; 
import HeaderComponent from '../components/header/header';
import Banner from '../../../public/banner.svg';
import LandingPageImage1 from '@/../public/landing1.svg';

export default function AboutPage() {
    return (
        <section className="mt-10">
            <HeaderComponent />
            <div className="flex justify-center">
                <div className="relative">
                    <div className="relative top-10 left-0 z-10 text-white p-10 mb-4 w-full sm:w-full md:w-1/2 sm:p-50 sm:top-20 md:text-white md:absolute">
                        <h1 className="text-4xl sm:text-5xl font-bold text-center">About Us</h1>
                        <p className="mt-2 text-sm sm:text-base font-light text-center">
                            Explore vinyl flooring, known for its quality and durability. Ideal for renovations or new constructions,
                            it offers a stylish, reliable solution that withstands heavy use without compromising aesthetics.
                        </p>
                    </div>
                    <div className="hidden md:block sm:hidden">
                        <Image src={Banner} alt="Banner" />
                    </div>
                    <div className="hidden sm:block md:hidden">
                        <Image src={LandingPageImage1} alt="LandingPageImage1" />
                    </div>
                </div>
            </div>
            <div className="flex justify-end h-screen"> 
                <div className="w-1/2 h-screen">
                    <Image src={Banner} alt="Banner" /> 
                </div>
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
            <footer className="bg-[#776B5D] text-white py-6 mt-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Contact Us</h3>
                        <ul>
                            <li>Email: alvimfloor@gmail.com</li>
                            <li>Phone: +1 123 456 789</li>
                            <li>Address: 123 Street, City, Country</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
                        <ul>
                            <li>About Us</li>
                            <li>Services</li>
                            <li>Portfolio</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold mb-4">social midia</h3>
                        <ul>
                            <li>WhatsApp</li>
                            <li>Facebook</li>
                            <li>Instagram</li> 
                        </ul>
                    </div>
                </div>
                <div className="text-center mt-6">
                    <p>&copy; 2024 Your Company. All Rights Reserved.</p>
                </div>
            </footer>
        </section>
    );
}
