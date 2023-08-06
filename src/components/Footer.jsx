import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail, HiViewGrid } from "react-icons/hi";
import { BsGoogle, BsTwitter, BsTelegram, BsWhatsapp, BsGithub, BsFillBuildingsFill, BsFillHeartFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneHome } from "react-icons/ai";



const Footer = () => {
    return (
        <section className="relative col-span-12">
            {/* --------------------laptop size footer----------------------- */}
            <div className=" h-auto p-3  bg-white md:flex md:static items-center justify-end lg:justify-between mb-20 md:mb-0">
                <div className=" flex w-full md:w-1/2 justify-between lg:justify-start mb-6 lg:mb-0 xl:w-2/3 md:px-8 xl:justify-between">
                    <img src="https://my.uupload.ir/dl/v9pDZJQW" alt="rezi" className="w-20 h-28 object-cover " />
                    <img src="https://my.uupload.ir/dl/n2vX7aWQ" alt="rezi" className="w-20 h-28 object-cover lg:mr-10" />
                    <img src="https://my.uupload.ir/dl/dxVXDybE" alt="rezi" className="w-20  h-28 object-cover lg:mr-10" />
                    <div className='hidden xl:flex gap-x-20 justify-end items-center'>
                        <div className="flex-col gap-8 flex ">
                            <BsGoogle className='w-8 h-8 text-2xl text-white bg-red-600 rounded-lg p-2 cursor-pointer' />
                            <FaFacebookF className='w-8 h-8 text-2xl text-white bg-blue-800 rounded-lg p-2 cursor-pointer' />
                        </div>
                        <div className=" flex-col gap-8 flex">
                            <BsTwitter className='w-8 h-8 text-2xl text-white bg-blue-600 rounded-lg p-2 cursor-pointer' />
                            <BsWhatsapp className='w-8 h-8 text-2xl text-white bg-green-500 rounded-lg p-2 cursor-pointer' />
                        </div>
                        <div className=" flex-col gap-8 flex">
                            <BsGithub className='w-8 h-8 text-2xl text-white bg-gray-600 rounded-lg p-2 cursor-pointer' />
                            <BsTelegram className='w-8 h-8 text-2xl text-white bg-purple-700 rounded-lg p-2 cursor-pointer' />
                        </div>
                    </div>
                </div>
                <div className="flex items-center xl:items-end md:w-1/2 xl:w-1/3">
                    <div className="w-full flex flex-col items-end gap-2 ">
                        <div className="flex items-center gap-2">
                            <span className="text-sm">04136691369</span>
                            <LuPhoneCall className="text-green-500 text-lg" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">mdelever77@gmail.com</span>
                            <HiOutlineMail className="text-blue-500 text-lg" />
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="text-sm">digitize building in tehran</span>
                            <BsFillBuildingsFill className="text-stone-500 text-lg" />
                        </div>
                    </div>
                    <img src="https://my.uupload.ir/dl/6E4K6WBE" alt="location" className="w-32 md:w-40 object-cover mr-3 md:mr-5 lg:mr-8 lg:w-44  cursor-pointer" />
                </div>
            </div>
            {/* -------------------------mobile size footer---------------------------- */}

            
        </section>
    )
}

export default Footer;
