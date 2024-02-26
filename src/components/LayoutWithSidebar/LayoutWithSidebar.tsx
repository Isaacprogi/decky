import { Outlet } from 'react-router-dom';
import Navbar from '../NavBar/NavBar';
import Sidebar from '../Sidebar/Sidebar';
import Footbar from '../FootBar/FootBar';

const LayoutWithSidebar = () => {
  return (
    <div className='w-full h-full  flex flex-col sm:flex-row overflow-hidden'>
      <Navbar /> 
      <div className='w-[15rem] hidden sm:block  min-h-full overflow-y-auto'>
        <Sidebar />
      </div>
      <div className='flex-1 border-l border-r border-gray-600 flex flex-col bg-gray-700 h-full overflow-y-auto'>
        <Outlet />
        <div className='sm:hidden sticky bottom-0'>
        <Footbar /> 
        </div>
      </div>
    </div>
  );
};

export default LayoutWithSidebar;
