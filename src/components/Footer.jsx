import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail , HiViewGrid } from "react-icons/hi";
import { BsGoogle, BsTwitter, BsTelegram, BsWhatsapp, BsGithub, BsFillBuildingsFill, BsFillHeartFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { AiTwotoneHome } from "react-icons/ai";



const Footer = () => {
    return (
        <section>
            {/* --------------------laptop size footer----------------------- */}
            <div className="w-full h-auto p-6 mt-6 bg-white fixed bottom-0 lg:flex md:static items-center justify-end hidden ">
                <div className='flex gap-x-20 ml-20'>
                    <div className="flex flex-col gap-8">
                        <BsGoogle className='w-8 h-8 text-2xl text-white bg-red-600 rounded-lg p-2 cursor-pointer' />
                        <FaFacebookF className='w-8 h-8 text-2xl text-white bg-blue-800 rounded-lg p-2 cursor-pointer' />
                    </div>
                    <div className="flex flex-col gap-8">
                        <BsTwitter className='w-8 h-8 text-2xl text-white bg-blue-600 rounded-lg p-2 cursor-pointer' />
                        <BsWhatsapp className='w-8 h-8 text-2xl text-white bg-green-500 rounded-lg p-2 cursor-pointer' />
                    </div>
                    <div className="flex flex-col gap-8">
                        <BsGithub className='w-8 h-8 text-2xl text-white bg-gray-600 rounded-lg p-2 cursor-pointer' />
                        <BsTelegram className='w-8 h-8 text-2xl text-white bg-purple-700 rounded-lg p-2 cursor-pointer' />
                    </div>
                </div>
                <div className=" flex ml-14">
                    <img src="https://my.uupload.ir/dl/v9pDZJQW" alt="rezi" className="w-20 h-28 object-cover mx-10" />
                    <img src="https://my.uupload.ir/dl/n2vX7aWQ" alt="rezi" className="w-20 h-28 object-cover mx-10" />
                    <img src="https://my.uupload.ir/dl/dxVXDybE" alt="rezi" className="w-20  h-28 object-cover mx-10" />
                </div>
                <div className=" flex">
                    <div className="w-full flex flex-col items-end gap-2">
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
                    <img src="https://my.uupload.ir/dl/6E4K6WBE" alt="location" className="w-60 object-cover mx-6 cursor-pointer rounded-lg" />
                </div>
            </div>
            {/* -------------------------mobile size footer---------------------------- */}

            <div className="w-full fixed bottom-0 py-3 px-6 bg-white rounded-t-3xl md:hidden text-slate-600 shadow-sdt">
                <ul className="flex justify-between">
                    <div className="flex gap-2 items-center cursor-pointer">
                        <AiTwotoneHome />
                        <p className="text-sm">خانه</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <BsFillHeartFill />
                        <p className="text-sm">علاقمندی ها</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <HiViewGrid />
                        <p className="text-sm">دسته بندی</p>
                    </div>
                    <div className="flex gap-2 items-center cursor-pointer">
                        <CgProfile />
                        <p className="text-sm">پروفایل</p>
                    </div>
                </ul>
            </div>
        </section>
    )
}

export default Footer;
