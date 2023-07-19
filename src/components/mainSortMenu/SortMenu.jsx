import { HiSortDescending } from "react-icons/hi";
const SortMenu = () => {
    return (
        <div className="hidden md:flex bg-white col-span-9 rounded-md justify-center items-center p-4" >
            
            <ul className="w-full flex justify-end gap-6  ">
                <li className="text-slate-400 hover:text-slate-700 transition-all duration-300 text-bold text-xs lg:text-base cursor-pointer">محبوب ترین محصول</li>
                <li className="text-slate-400 hover:text-slate-700 transition-all duration-300 text-xs lg:text-base cursor-pointer">گران ترین محصول</li>
                <li className="text-slate-400 hover:text-slate-700 transition-all duration-300 text-xs lg:text-base cursor-pointer">ارزان ترین محصول</li>
                <li className="text-slate-400 hover:text-slate-700 transition-all duration-300 text-xs lg:text-base cursor-pointer">پربازدید ترین محصول</li>
            </ul>
            <HiSortDescending className="text-xl lg:text-3xl bg-red-400 text-slate-50 p-1 rounded-sm ml-4"/>
        </div>
    );
}

export default SortMenu;