import { LuPhoneCall } from "react-icons/lu";
import { HiOutlineMail } from "react-icons/hi";
import { BsGoogle, BsTwitter, BsTelegram, BsWhatsapp, BsGithub, BsFillBuildingsFill } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";



const Footer = () => {
    return (
        <section className=" col-span-12">
            <div className="w-full h-32 border-t-2 border-slate-50 hidden md:flex">
                <ul className="w-full h-full grid grid-cols-12 justify-evenly items-center text-xs gap-y-4">

                    <li className="col-span-2 flex flex-col items-center justify-center cursor-pointer">
                        <img src="https://www.digikala.com/statics/img/svg/footer/express-delivery.svg" alt="footer" />
                        <span>اﻣﮑﺎن ﺗﺤﻮﯾﻞ اﮐﺴﭙﺮس</span>
                    </li>
                    <li className="col-span-3 flex flex-col items-center justify-center cursor-pointer">
                        <img src="https://www.digikala.com/statics/img/svg/footer/cash-on-delivery.svg" alt="footer" />
                        <span>امکان پرداخت در محل</span>
                    </li>
                    <li className="col-span-2 flex flex-col items-center justify-center cursor-pointer">
                        <img src="https://www.digikala.com/statics/img/svg/footer/support.svg" alt="footer" />
                        <span>۷ روز ﻫﻔﺘﻪ، ۲۴ ﺳﺎﻋﺘﻪ</span>
                    </li>
                    <li className="col-span-3 flex flex-col items-center justify-center cursor-pointer">
                        <img src="https://www.digikala.com/statics/img/svg/footer/days-return.svg" alt="footer" />
                        <span>هفت روز ضمانت بازگشت کالا</span>
                    </li>
                    <li className="col-span-2 flex flex-col items-center justify-center cursor-pointer">
                        <img src="https://www.digikala.com/statics/img/svg/footer/original-products.svg" alt="footer" />
                        <span>ﺿﻤﺎﻧﺖ اﺻﻞ ﺑﻮدن ﮐﺎﻟﺎ</span>
                    </li>
                </ul>
            </div>
            <div className="w-full h-auto justify-between px-4 pt-4 pb-24 md:pb-4 border-t-2 border-slate-50 md:px-16 flex">
                <ul className="flex flex-col gap-2 text-slate-500 text-sm hidden md:flex">
                    <li className="text-slate-800 text-lg mb-2">با دیجی تایز</li>
                    <li className="cursor-pointer">تماس با دیجی تایز</li>
                    <li className="cursor-pointer">گزارش تخلف در دیجی تایز</li>
                    <li className="cursor-pointer">فروش در دیجی تایز</li>
                    <li className="cursor-pointer">درباره ما</li>
                </ul>
                <ul className="flex flex-col gap-2 text-slate-500 text-sm hidden md:flex">
                    <li className="text-slate-800 text-lg mb-2">خدمات مشتریان</li>
                    <li className="cursor-pointer">پاسخ به سوالات متداول</li>
                    <li className="cursor-pointer">شرایط استفاده</li>
                    <li className="cursor-pointer">حریم خصوصی</li>
                    <li className="cursor-pointer">گزارش باگ</li>
                </ul>
                <ul className="flex flex-col gap-2 text-slate-500 text-sm hidden md:flex">
                    <li className="text-slate-800 text-lg mb-2">راهنمای خرید از دیجی تایز</li>
                    <li className="cursor-pointer">نحوه ثبت سفارش</li>
                    <li className="cursor-pointer">رویه ارسال سفارش</li>
                    <li className="cursor-pointer">شیوه پرداخت</li>
                </ul>
                <div>
                    <p className="text-slate-800 text-lg mb-2">همراه ما باشید!</p>
                    <ul className="flex gap-8 text-3xl text-slate-400">
                        <li className="cursor-pointer"><BsTwitter /></li>
                        <li className="cursor-pointer"><BsTelegram /></li>
                        <li className="cursor-pointer"><BsGithub /></li>
                        <li className="cursor-pointer"><BsWhatsapp /></li>
                        <li className="cursor-pointer"><BsGoogle/></li>
                    </ul>
                    <ul className="flex gap-4 mt-4">
                        <li className="w-32 h-32 border border-slate-500 flex justify-center items-center rounded-lg cursor-pointer" > <img src="https://my.uupload.ir/dl/v9pDZJQW" alt="rezi" className="w-20 h-28 object-cover " /></li>
                        <li className="w-32 h-32 border border-slate-500 flex justify-center items-center rounded-lg cursor-pointer" > <img src="https://my.uupload.ir/dl/n2vX7aWQ" alt="rezi" className="w-20 h-28 object-cover " /></li>
                        <li className="w-32 h-32 border border-slate-500 flex justify-center items-center rounded-lg cursor-pointer" ><img src="https://my.uupload.ir/dl/dxVXDybE" alt="rezi" className="w-20  h-28 object-cover " /></li>



                    </ul>
                </div>
            </div>
        </section>
    )
}

export default Footer;
