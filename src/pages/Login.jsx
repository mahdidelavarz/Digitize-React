import React, { useState } from 'react';
import SignUp from '../components/login/Signup';
import SignIn from '../components/login/Signin';
const Login = () => {
    const [login, setLogin] = useState(0);
    return (
        <div className="w-full min-h-[100vh] md:py-4 bg-gradient-to-r from-blue-300 to-purple-300 flex justify-center items-center">
            <section className='w-full h-full md:w-[60vw] lg:w-[40vw] md:h-auto bg-gradient-to-r from-blue-200 to-purple-200 md:rounded-2xl py-10 px-10 flex flex-col items-center gap-y-4'>
                <div className='w-full p-4 flex justify-center'>
                    <span onClick={() => setLogin(0)} className='font-extrabold text-2xl text-slate-600 cursor-pointer'> ثبت نام | </span>
                    <span onClick={() => setLogin(1)} className='font-extrabold text-2xl text-slate-600 mr-2 cursor-pointer'> ورود  </span>
                </div>
                {login === 0 ? <SignUp /> : <SignIn />}
            </section>
        </div>

    );
}

export default Login;