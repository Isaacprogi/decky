import { Outlet } from 'react-router-dom';

const ProjectTaskLayout = () => {
  return (
    <div className='w-full h-[max-content]'>
        <Outlet/>
    </div>
  );
};

export default ProjectTaskLayout;
