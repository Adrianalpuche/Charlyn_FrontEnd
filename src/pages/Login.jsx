import React from "react";
import Formulario from "../components/Formulario";



function Login ()  {
    return(
        <div className="flex w-full h-screen">
            <div className="flex items-center justify-center w-full lg:w-1/2">
                <Formulario/>
            </div>
            <div className="items-center justify-center hidden w-1/2 h-full bg-gray-200 lg:flex">
                <div className="w-full h-full rounded-lg" >
            <img
              src="https://imageio.forbes.com/specials-images/imageserve/642bc7aea9b99c12f3deb166/0x0.jpg?format=jpg&width=1200"
              alt="Imagen"
              className="object-cover w-full h-full rounded-lg"
            />
                </div>
            </div>
        </div>
        
        
    );
}

export default Login;  