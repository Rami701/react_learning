import React, { useState } from "react";

import NavLink from "./NavLink";
import Sidebar from "./Sidebar";

const Header = () => {
    const [sidebarExtended, setSidebarExtended] = useState(false);

    const toggleSidebar = () => {
        setSidebarExtended(!sidebarExtended);
    };

    const sidebarCloseIconOnClick = () => {
        setSidebarExtended(false)
    }

    return (
        <div className="w-full h-fit bg-slate-100 px-12 flex justify-between items-center">
            <img src="/vite.svg" alt="" className="w-12 py-3" />
            <nav className="flex justify-between items-center">
                <div className="nav-links flex justify-between items-center h-full mr-12">
                    <NavLink title={"Home"}></NavLink>
                    <NavLink title={"About"}></NavLink>
                    <NavLink title={"Store"}></NavLink>
                    <NavLink title={"Contact"}></NavLink>
                </div>
                <div
                    className="sidebar-button p-2 cursor-pointer"
                    onClick={() => toggleSidebar()}
                >
                    <img src="/sidebar_icon.svg" className="w-8" />
                </div>
            </nav>

            <Sidebar isVisible={sidebarExtended} closeOnClick={sidebarCloseIconOnClick}></Sidebar>
        </div>
    );
};

export default Header;
