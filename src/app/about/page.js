import Image from 'next/image';
import HeaderComponent from '../components/header/header';
import Banner from '../../../public/banner.svg';
import LandingPageImage1 from '@/../public/landing1.svg';
import FooterComponent from '../components/footer/footer';

export default function AboutPage() {
    return (
        <section className="">
            <HeaderComponent />
            <div className="flex justify-center h-screen text-black">
                <div className="w-1/2 flex flex-col justify-center items-center">
                    <h1 className="text-4xl sm:text-5xl font-bold text-center">We are AlvimFloor</h1>
                    <p className="mt-2 text-sm sm:text-base font-light text-center">
                        More than 20 years of tradition in installing vinyl floors and restoring wooden floors.
                        Our company is recognized for the excellence of the services provided,
                        offering lasting solutions, quality materials and qualified professionals.
                        Count on us to transform your environment, bringing beauty and sophistication through high-quality vinyl floors or the restoration of wooden floors, with results that exceed your expectations.
                    </p>
                </div>
            </div>
            <FooterComponent />
        </section >
    );
}
