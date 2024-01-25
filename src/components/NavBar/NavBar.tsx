import { useAuthContext } from '../../hooks/useAuthContext';
import { Link } from 'react-router-dom';
import NavItem from '../common/NavItem/NavItem';
import Image from '../../assets/me.jpg'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const NavBar = () => {
  const { logout, user } = useAuthContext()
  const [active, setActive] = useState<Boolean>(false)
  const navigate = useNavigate()


  const handleProfileView = () => {
    navigate('profile')
    setActive(false)
  }

  const handleLogout = () => {
    logout()
  }

  const paths = [
    { id: "1", value: '' },
    { id: "2", value: 'books' },
    { id: "3", value: "category" }
  ]

  const handleDisplay = () => {
    return setTimeout(() => {
      setActive(!active)
    }, 200)
  }

  return (

    <div className=' top-0 sticky z-[900] bg-gray-900 w-full'>

      <div className='w-full h-[4rem] max-w-[1200px] mx-auto flex items-center px-[1rem] justify-between'>
        <Link to='/' className='font-bold text-lg text-neutral-200'>Yupi</Link>
        <div className='flex items-center  justify-start gap-x-[1rem]'>
          {
            paths.map((path: any) => {
              return <NavItem key={path.id} path={path.value} />
            })
          }
          <div className='relative'>
            <div onClick={handleDisplay} className='h-[2rem] cursor-pointer w-[2rem] border border-2 rounded-full overflow-hidden'>
              <img className='w-full h-full' src={Image} alt="" />
            </div>

            <div className={`w-[10rem]  overflow-hidden flex flex-col ${active ? "block" : "hidden"} top-[2.2rem] right-[1rem] rounded-md absolute  bg-white border-gray-400  h-[10rem]`}>
              <div className='p-[.5rem]'>
                <div onClick={handleProfileView} className='h-[3rem] cursor-pointer w-[3rem] border border-2 rounded-full overflow-hidden'>
                  <img className='w-full h-full' src={Image} alt="" />
                </div>
              </div>

              <span className='border-b px-[.5rem] font-[600]'>Isaac Anasonye</span>
              <span className='border-b px-[.5rem] text-[.9rem]'>Computer Science</span>
              <span onClick={handleLogout} className='flex-1  flex items-center justify-center hover:bg-black hover:text-white cursor-pointer'>Logout</span>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
};

export default NavBar;
