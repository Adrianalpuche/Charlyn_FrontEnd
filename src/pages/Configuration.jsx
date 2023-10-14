import React from "react";
import About_Configuration from "../components/About_Configuration";
import Sidebars from "../components/Sidebar";



function Configuration ()  {
    return(
        <div className="flex w-full h-screen">
            <div className="items-center justify-center hidden w-2/12 bg-blue-900 w--full lg:flex">
              <Sidebars/>
            </div>
            <div className="flex items-center justify-center w-full ">
                <About_Configuration/>
            </div>
        </div>
        
        
    );
}

export default Configuration;  