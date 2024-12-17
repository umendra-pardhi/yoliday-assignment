import React, { useState } from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  return (
    <aside className="w-64 bg-[#DF5532] text-white flex flex-col hidden lg:block">
    <div className="flex items-center  h-16">
        <div className="text-sm font-semibold px-5"><i className="fas fa-juice mr-2"></i>LOGO</div>
    </div>
    <nav className="flex-1 px-1 py-2 text-sm">
        <ul>
            <li className="mb-4 px-6 flex items-center">
                <i className="fas fa-tachometer-alt mr-2"></i>
                <span>Dashboard</span>
            </li>
            <li className="mb-4 px-6 flex items-center  rounded-lg py-1" style={{ background: "linear-gradient(91.41deg, #FFAD98 0%, #DF5532 100%)" }}>
                <i className="fas fa-briefcase mr-2"></i>
                <span>Portfolio</span>
            </li>
            <li className="mb-4 px-6 flex items-center">
                <i className="fas fa-edit mr-2"></i>
                <span>Inputs</span>
            </li>
            <li className="mb-4 px-6 flex items-center">
                <i className="fas fa-user mr-2"></i>
                <span>Profile</span>
            </li>
        </ul>
    </nav>
</aside>
  );
};

export default Sidebar;
