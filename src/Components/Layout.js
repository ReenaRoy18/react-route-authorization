
import React from "react";
import { Outlet } from "react-router-dom";
import Buttons from "./Buttons";
const Layout =()=>{

    return(
        <div className="App">
            <h1>this is nav bar</h1>
            <Outlet/>
            <Buttons/>
        </div>
    );
};

export default Layout;