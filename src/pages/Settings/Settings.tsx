import { Outlet, NavLink } from 'react-router-dom';
import { CiMoneyBill } from "react-icons/ci";
import { AiOutlineProfile } from "react-icons/ai";
import { MdOutlineManageAccounts } from "react-icons/md";
import { NavOption } from '../../types/types';

const Settings:React.FC = () => {
  const sidebarOptions:NavOption[] = [
    { icon: AiOutlineProfile, label: "Profile", to: "/settings/profile" },
    { icon: MdOutlineManageAccounts, label: "Account", to: "/settings/account" },
    { icon: CiMoneyBill, label: "Billing", to: "/settings/billing" }
  ];

  return (
    <div className='w-full flex relative min-h-full'>
         <div className='flex-1 border-r border-gray-600'>
         <Outlet/>
         </div>
        <div className='flex flex-col  sticky top-0  justify-start w-[15rem] py-4 items-start h-[10rem]  hidden md:flex '>
            {sidebarOptions.map(({ icon: Icon, label, to }, index) => (
              <NavLink 
                key={index} 
                to={to} 
                className={({ isActive }) => 
                  isActive ? 'flex items-center hover:text-gray-500 duration-300  p-2 text-blue-600' : 'flex items-center hover:text-gray-500 duration-300 p-2 text-gray-300'
                }
              >
                <Icon className="mr-2" /> {label}
              </NavLink>
            ))}
        </div>
    </div>
  );
}

export default Settings;
