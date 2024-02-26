import { NavLink } from 'react-router-dom';
import { IoHomeOutline, IoSettingsOutline } from "react-icons/io5";
import { MdOutlineNotes } from "react-icons/md";
import { GoTasklist } from "react-icons/go";

const footbarOptions = [
  { icon: IoHomeOutline, label: "Home", to: "/" },
  { icon: GoTasklist, label: "Tasks", to: "/tasks" },
  { icon: MdOutlineNotes, label: "Notes", to: "/notes" },
  { icon: IoSettingsOutline, label: "Settings", to: "/settings" },
];

const Footbar = () => {
  return (
    <div className="flex justify-around items-center p-2 bg-gray-800 text-white">
      {footbarOptions.map((option, index) => (
        <NavLink
          key={index}
          to={option.to}
          className={({ isActive }) => 
            `flex flex-col items-center ${
              isActive ? 'text-yellow-400' : 'text-white'
            }`
          }
        >
          <option.icon className="text-2xl" />
          <span className="text-xs">{option.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default Footbar;
