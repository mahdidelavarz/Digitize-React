import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { BsGoogle, BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const SignUp = () => {
    const initialValues = {
        name: '',
        email: '',
        password: '',
        passwordConfirm: '',
    }
    const onSubmit = (values) => console.log(values);

    const validationSchema = Yup.object({
        name: Yup.string().required('please enter the name !'),
        email: Yup.string().required('please enter the email !'),
        password: Yup.number().required('please enter the pass !'),
        passwordConfirm: Yup.number().required('please enter the pass confirm !')
    })
    const formik = useFormik({
        initialValues,
        onSubmit,
        validationSchema,
    });
    console.log(formik.errors);
    return (
       
            <form className='w-[75%] flex flex-col items-center text-sm'>
                <div className="w-full h-auto mt-4 flex flex-col  ">
                    <label className=' text-slate-700'>نام و نام خانوادگی :</label>
                    <input className=' outline-none  border px-4 py-1 mt-2 rounded-xl bg-white text-black' type="text" name='name' placeholder='نام خودرا وارد کنید ...' {...formik.getFieldProps('name')} />
                    {formik.errors.name && formik.touched.name && (
                        <div className='text-red-400 mt-2 ml-4'>{formik.errors.name}</div>
                    )}
                </div>
                <div className="w-full h-auto mt-4 flex flex-col ">
                    <label className='text-slate-700'>ایمیل :</label>
                    <input className='outline-none border px-4 py-1 mt-2 rounded-xl bg-white' type="email" name='email' placeholder='ایمیل خودرا وارد کنید ...' {...formik.getFieldProps('email')} />
                    {formik.errors.email && formik.touched.email && (<div className='text-red-400 mt-2 ml-4'>{formik.errors.email}</div>)}
                </div>
                <div className="w-full h-auto mt-4 flex flex-col ">
                    <label className='text-slate-700'>رمز عبور :</label>
                    <input className='outline-none border px-4 py-1 mt-2 rounded-xl bg-white' type="tel" name='password' placeholder='رمزعبور خود را وارد کنید ...' {...formik.getFieldProps('password')} />
                    {formik.errors.password && formik.touched.password && (<div className='text-red-400 mt-2 ml-4'>{formik.errors.password}</div>)}
                </div>
                <div className="w-full h-auto mt-4 flex flex-col ">
                    <label className='text-slate-700'>تایید رمزعبور :</label>
                    <input className='outline-none border px-4 py-1 mt-2 rounded-xl bg-white' type="tel" name='passwordConfirm' placeholder='رمزعبور خود را دوباره وارد کنید ...' {...formik.getFieldProps('passwordConfirm')} />
                    {formik.errors.password && formik.touched.password && (<div className='text-red-400 mt-2 ml-4'>{formik.errors.password}</div>)}
                </div>
                <button type='submit' className='w-full py-2 text-slate-50 bg-gradient-to-r from-blue-300 to-purple-600 mt-10 rounded-xl' onClick={formik.handleSubmit}>ثبت نام</button>
                <span className='mt-12 text-sm text-slate-400'>Or signUp using  </span>
                <div className='flex mt-6 w-64 justify-between'>
                    <BsGoogle className='w-8 h-8 text-2xl text-white bg-red-600 rounded-lg p-2 cursor-pointer' />
                    <BsTwitter className='w-8 h-8 text-2xl text-white bg-blue-700 rounded-lg p-2 cursor-pointer' />
                    <FaFacebookF className='w-8 h-8 text-2xl text-white bg-gray-700 rounded-lg p-2 cursor-pointer' />
                </div>
            </form>
    );
}

export default SignUp;