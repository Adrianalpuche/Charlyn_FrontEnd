import React from "react";
import Pie from "../components/Pie";
import Sidebars from "../components/Sidebar";

function Home() {
    return (
        <div className="flex w-full h-screen">
            <div className="items-center justify-center hidden w-2/12 w--full lg:flex">
              <Sidebars/>
            </div>
            <div className="justify-end w-2/5 ml-12 text-center ">
            <h1 className="text-3xl text-slate-500 ">Sensors Status</h1>
                <Pie/>
            </div>
        </div>
    )
}

export default Home;





