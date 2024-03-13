import Image from "next/image";
import HeaderComponent from "./components/header/header";
import Banner from '../../public/banner.svg'
import LandingPageImage1 from '@/../public/landing1.svg'


export default function Home() {
  return (
    <section>
      <HeaderComponent />
      <div>
        <div className="relative">
          <div className="relative top-10 left-0 z-10 text-black p-10 mb-4 w-full sm:w-full md:w-1/2 sm:p-15 sm:top-20 md:text-white md:absolute">
            <p className="text-sm sm:text-base font-light">Innovative designs, lasting flooring solutions</p>
            <h1 className="text-4xl sm:text-5xl font-bold">Elevate Your Space With Superior Floors</h1>
            <p className="mt-2 text-sm sm:text-base font-light">
              Explore vinyl flooring, known for its quality and durability. Ideal for renovations or new constructions, it offers a stylish, reliable solution that withstands heavy use without compromising aesthetics.
            </p>
            <button className="bg-[#EBE3D5] p-2 w-full mt-4 font-bold text-black">
              Discover more
            </button>
          </div>
          <Image className='w-full h-fit hidden md:block sm:hidden' src={Banner} />
        </div>
        <div className="flex p-10 justify-center gap-10 my-32">
          <div className="hidden md:block sm:hidden">
            <Image src={LandingPageImage1} />
          </div>
          <div className="text-black w-1/2 ">
            <p>
              Transform your space with Exceptional flooring solutions
            </p>
            <h1 className="text-3xl font-bold text-red-400">
              Thinking of changing your floor?
            </h1>
            <p className="mt-2">
              Considering upgrading to vinyl flooring could be an excellent decision. Vinyl flooring is known for its durability and resilience. It's water-resistant, making it a good choice for kitchens, bathrooms, and laundry rooms. Furthermore, it's easy to clean and maintain, and it comes in a variety of designs and styles to suit any decor. So, if you're contemplating a floor change, vinyl is a superb option to consider.
            </p>
            <button className="bg-[#EBE3D5] p-2 w-full mt-4 font-bold text-black">
              Discover more
            </button>
          </div>
        </div>
        <div className="p-10 text-black text-center my-24">
          <h1 className="text-3xl font-bold text-red-400">Why choose us?</h1>
          <p className="w-1/2 mx-auto mt-2">
            We offer superior services, dedicated customer support, and competitive pricing. Our team of professionals is committed to ensuring your satisfaction.
          </p>
          <div className="flex flex-col justify-center gap-5 mt-10">
            <div className="flex flex-row justify-center gap-10">
              <div className="card rounded-lg border-red-100 border-2 p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-red-600 font-bold my-2">Expert Craftsmanship</h1>
                <hr />
                <p className="my-2 text-red-400">
                  Emphasize the high level of skills and attention to details in your flooring installations
                </p>
              </div>
              <div className="card rounded-lg border-red-100 border-2 p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-red-600 font-bold my-2">Expert Craftsmanship</h1>
                <hr />
                <p className="my-2 text-red-400">
                  Emphasize the high level of skills and attention to details in your flooring installations
                </p>
              </div>
              <div className="card rounded-lg border-red-100 border-2 p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-red-600 font-bold my-2">Expert Craftsmanship</h1>
                <hr />
                <p className="my-2 text-red-400">
                  Emphasize the high level of skills and attention to details in your flooring installations
                </p>
              </div>
            </div>
            <div className="flex flex-row justify-center gap-10">
              <div className="card rounded-lg border-red-100 border-2 p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-red-600 font-bold my-2">Expert Craftsmanship</h1>
                <hr />
                <p className="my-2 text-red-400">
                  Emphasize the high level of skills and attention to details in your flooring installations
                </p>
              </div>
              <div className="card rounded-lg border-red-100 border-2 p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-red-600 font-bold my-2">Expert Craftsmanship</h1>
                <hr />
                <p className="my-2 text-red-400">
                  Emphasize the high level of skills and attention to details in your flooring installations
                </p>
              </div>
              <div className="card rounded-lg border-red-100 border-2 p-10 w-[340px] hover:scale-[1.05] transition-all ease-in">
                <h1 className="text-red-600 font-bold my-2">Expert Craftsmanship</h1>
                <hr />
                <p className="my-2 text-red-400">
                  Emphasize the high level of skills and attention to details in your flooring installations
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-[#776B5D] h-screen p-10">
          <p className="text-center italic">
            Our portfólio
          </p>
          <h1 className="text-center text-2xl font-bold mt-2">
            Showcasing our flooring & Construction Masterpieces
          </h1>

          <div className="flex flex-row justify-center gap-10">
            <div className="bg-gray-300 w-20 h-max p-10 mt-10">

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
