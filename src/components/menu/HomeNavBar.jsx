import Links from '../links/Links';
const HomeNavBar = () => {
    return (
        <div className="hidden md:flex bg-white col-span-9 rounded-md justify-center items-center p-4" >
            <ul className="w-full flex  text-base gap-x-6">
                <Links iconStyle="text-rose-500 text-2xl xl:text-2xl ml-4" backStyle="bg-gradient-to-l from-slate-400" width="auto"/>
            </ul>
        </div>
    );
}

export default HomeNavBar;