import React from 'react';
import { NavLink } from 'react-router-dom'; // Import NavLink
import { IoSettingsOutline } from "react-icons/io5";
import { TbListDetails } from "react-icons/tb";
import { GoTasklist } from "react-icons/go";
import { MdOutlineNotes } from "react-icons/md";
import { Outlet } from 'react-router-dom';

const Project: React.FC = () => {
  // Navigation items array
  const navItems = [
    { path: 'info', Icon: TbListDetails, label: 'Info' },
    { path: 'tasks', Icon: GoTasklist, label: 'Tasks' },
    { path: 'notes', Icon: MdOutlineNotes, label: 'Notes' },
  ];

  return (
    <div className="w-full px-4 py-8 h-full">
      <div className="flex items-center pb-[.3rem] border-b border-gray-600 justify-between">
        
        <div className="flex items-center gap-[1.5rem] justify-start mt-4">
        <h1 className="text-xl text-white">
          Project Name
        </h1>
          {navItems.map(({ path, Icon, label }) => (
            <NavLink
              to={path}
              key={path}
              className={({ isActive }) =>
                `flex flex-col items-center hover:text-gray-500   ${isActive ? 'text-blue-500' : 'text-white'} duration-300 cursor-pointer`
              }>
              <Icon />
              <span>{label}</span>
            </NavLink>
          ))}
        </div>

        <IoSettingsOutline className="text-white hover:text-gray-500 duration-300 cursor-pointer" />

      </div>


      <Outlet />
    </div>
  )
}

export default Project;
