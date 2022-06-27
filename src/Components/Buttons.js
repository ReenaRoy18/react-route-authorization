
import React from "react";
import { useNavigate } from "react-router-dom";

const Buttons = ()=>{
const navigate= useNavigate();
    return(

        <div>
            <button onClick={()=>navigate("/admin")}>Admin</button> &nbsp;
            <button onClick={()=>navigate("/editor")}>Editor</button> &nbsp;
            <button onClick={()=>navigate("/user")}>User</button> &nbsp;
        </div>
    );
};

export default Buttons;