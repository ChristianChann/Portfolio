import { Outlet } from "react-router-dom";
import React from 'react'
import NavBar from "../../components/nav.component";
import "./layout.style.css"

const Layout = () =>{
    return(
        <div>
            <NavBar/>
            <Outlet/>
         </div>
    )
}

export default Layout;