import React from "react";


function About_Configuration () {
    return (
        <div className="w-5/6 "> 
            <div className="flex justify-start" >
                <img className="object-cover rounded-xl w-28 h-28 "
                    
                    src="https://cdn.noticiasdequeretaro.com.mx/wp-content/uploads/2022/10/11215449/HACE-poco-se-dio-a-conocer-que-la-Sedena-sufrio%CC%81-un-hackeo.jpg"
                />
                <div className="pl-12 mt-9">
                <button className=" px-8 py-3 text-base font-bold text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out bg-indigo-500 hover:bg-indigo-400  duration-500 rounded-xl">Change Avatar</button> 
                </div>
            </div>
                <form>
            <div className="mt-9">
                <label className="text-lg font-medium">Email address</label>
                    <div>
                        <input
                            className="w-full p-4 mt-1 mr-2 bg-transparent border-2 border-gray-100 rounded-xl"
                            placeholder="Enter your Email "
                            type = "email" 
                            required
                        />
                    </div>
            </div>
            
            <div className="mt-9">
                <label className="text-lg font-medium ">Current password</label>
                    <div className="relative input-container">
                        <input
                            className="w-full p-4 mt-1 mr-2 bg-transparent border-2 border-gray-100 rounded-xl"
                            placeholder="Enter your Password "
                            type = "password" 
                            required

                        />
                    </div>
            </div>

            <div className="mt-9">
                <label className="text-lg font-medium">New password</label>
                    <div>
                        <input
                            className="w-full p-4 mt-1 mr-2 bg-transparent border-2 border-gray-100 rounded-xl"
                            placeholder="Enter your New Password "
                            type = "password" 
                            required
                        />
                    </div>
            </div>

            <div className="flex flex-col mt-8">
                <input type="submit"  className="py-3 text-lg font-bold text-white active:scale-[.98] active:duration-75 transition-all hover:scale-[1.01] ease-in-out hover:bg-violet-400  duration-500  bg-violet-500 rounded-xl" Save />
            </div>  
         </form>   
        </div>     
    )
}

export default About_Configuration;