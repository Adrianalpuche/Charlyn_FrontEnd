import React from "react";
import { AiOutlineUser } from "react-icons/ai";
import { HiOutlineMail } from "react-icons/hi";


function Form_Register (){
    return (
        <div className="px-10 py-5 bg-white border-2 border-gray-100 rounded-3xl ">
            <h1 className="text-5xl font-semibold ">Welcome New User</h1>
            <p className="mt-3 text-lg font-medium text-gray-400" >before begin to use charlyn</p>
            <p className="text-lg font-medium text-gray-400 ">please put your information in the formulary</p>
            <div className="mt-3">
                <label className="text-lg font-medium" >Name</label>
            <div className="relative input-container">
                 <input
                className="w-full p-4 pl-12 mt-1 mr-2 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter your Name "
                />
                 <AiOutlineUser className= "absolute text-4xl text-gray-200 transform -translate-y-1/2 left-2 2 -12 top-1/2"  />
                 </div>
            </div>

            <div className="mt-3">
                <label className="text-lg font-medium" >Email</label>
            <div className="relative input-container">
                 <input
                className="w-full p-4 pl-12 mt-1 mr-2 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter your Name "
                />
                 <HiOutlineMail className= "absolute text-4xl text-gray-200 transform -translate-y-1/2 y left-2 2 -12 top-1/2"  />
                 </div>
                 
            </div>
            
            <div className="mt-3">
                <label className="text-lg font-medium" >Password</label>
            <div className="relative input-container">
                 <input
                className="w-full p-4 mt-1 mr-2 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter your Name "
                />
                 </div>
            </div>

            <div className="mt-3">
                <label className="text-lg font-medium" >Confirm the Password</label>
            <div className="relative input-container">
                 <input
                className="w-full p-4 mt-1 mr-2 bg-transparent border-2 border-gray-100 rounded-xl"
                placeholder="Enter your Name "
                />
                 </div>
            </div>
            
            <div className="flex flex-col mt-8">
                <button className="py-3 text-lg font-bold text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-sky-500 rounded-xl"> Sign in</button>
            </div>
            <div className="flex items-center justify-center mt-8">
                <p className="text-base font-medium"> Already have a account? </p>
                <button className='ml-2 text-base font-medium text-violet-400'>Login now</button>

            </div>
            
        </div>
    )

}

export default Form_Register
