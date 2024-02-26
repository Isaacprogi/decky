import { NavLink } from 'react-router-dom'; // Import NavLink
import Avatar from '../../assets/me.jpg';
import { IoHomeOutline } from "react-icons/io5";
import { GoTasklist } from "react-icons/go";
import { MdOutlineNotes, MdOutlineCalendarToday } from "react-icons/md";
import { TbCategory2 } from "react-icons/tb";
import { AiOutlineTags } from "react-icons/ai";
import { BsArchive } from "react-icons/bs";
import { IoSettingsOutline } from "react-icons/io5";
import { IoIosSearch } from "react-icons/io";
import { FaStar } from 'react-icons/fa';
import { useAuthContext } from '../../hooks/useAuthContext';
import { IoGitNetwork } from "react-icons/io5"


const Sidebar = () => {
    const sidebarOptions = [
        { icon: IoHomeOutline, label: "Home", to: "/" },
        { icon: GoTasklist, label: "Tasks", to: "/tasks" },
        { icon: MdOutlineNotes, label: "Notes", to: "/notes" },
        { icon: TbCategory2, label: "Projects", to: "/projects" },
        { icon: MdOutlineCalendarToday, label: "Calendar", to: "/calendar" },
        { icon: AiOutlineTags, label: "Tags", to: "/tags" },
        { icon: IoGitNetwork, label: "networks", to: "/networks" },
        { icon: BsArchive, label: "Archive", to: "/archive" },
        { icon: IoSettingsOutline, label: "Settings", to: "/settings" },
        { icon: IoIosSearch, label: "Search", to: "/search" },
    ];

    const {user} = useAuthContext()

    return (
        <div className="w-full p-[1rem] min-h-full bg-gray-800 text-white">
            <div className="w-full flex flex-col gap-[.2rem] border-b border-gray-700 pb-[.5rem] ">
                <div className="flex   items-center justify-between gap-[1rem]">
                    <span className="w-[3rem] h-[3rem] rounded-full overflow-hidden bg-yellow-500">
                       <img className='w-full h-full object-cover' src={Avatar} alt="" />
                    </span>
                    <FaStar className={!user.pro?'text-yellow-400':""}/>
                </div>

                <div className="text-[.8rem]">
                    Isaac Anasonye
                </div>
                <div className="text-[.8rem]">
                    isaacoyes90@gmail.com
                </div>
            </div>

            <div className='flex flex-col gap-[.3rem] mt-[1rem]'>
                {sidebarOptions.map((option, index) => (
                    <NavLink
                        key={index}
                        to={option.to}
                        className={({ isActive }) => 
                            `flex items-center gap-[1rem] hover:text-gray-400 hover:bg-gray-700 duration-300 p-[.5rem] rounded-md cursor-pointer ${
                                isActive ? 'bg-gray-700' : ''
                            }`
                        }
                    >
                        <option.icon className="text-[1.2rem]" />
                        <span>{option.label}</span>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}

export default Sidebar;
