
import FooterComponent from '../components/footer/footer.js';
import HeaderComponent from '../components/header/header.js';

export default function ContactPage() {
    return (
        <section>
            <HeaderComponent />
            <div className="flex flex-col items-center">
                <h2 className="text-center text-2xl text-black font-bold my-5 mb-4">Contact Us</h2>
                <div className="flex flex-col md:flex-row justify-center gap-10">
                    <div className="w-full md:w-1/2">
                        <div className="my-20 w-30 text-center text-black p-white rounded-lg ">
                            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
                            <p>Email: alvimfloors@gmail.com </p>
                            <p>Phone: 321-662-4130</p>
                        </div>

                        <div className="my-10 w-30 text-center text-black p-white rounded-lg ">
                            <h2 className="text-2xl font-bold mb-4">Location</h2>
                            <p>Orlando Florida, USA </p>

                        </div>
                    </div>
                    <div className="w-full">
                        <div className="bg-white p-8 rounded-lg shadow-md mx-10 my-8">
                            <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                            <form className='text-black'>
                                <div className="mb-4">
                                    <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
                                    <input type="text" id="name" name="name" className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                                    <input type="email" id="email" name="email" className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full" />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                                    <textarea id="message" name="message" rows="4" className="mt-1 px-3 py-2 border border-gray-300 rounded-md w-full"></textarea>
                                </div>
                                <button type="submit" className="bg-[#EBE3D5] w-full text-black px-4 py-2 rounded-md font-bold">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <FooterComponent />
        </section>
    );
}