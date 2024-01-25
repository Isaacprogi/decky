import Image from '../../assets/me.jpg'
import Background from '../../assets/top_logo.jpg'
const Profile = () => {

  return (
    <div className="w-full  flex gap-[2rem] h-[calc(100%-4rem)] overflow-hidden max-w-[1200px] mx-auto">

      <div className="w-full flex flex-col gap-y-[.5rem] flex-1 ">

        <div className='bg-white border border-gray-300 rounded-md'>
          <div style={{
            backgroundImage: `url(${Background})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
          }} className="w-full hover:opacity-[.9] duration-300 relative h-[10rem]">
            <div className="w-[7rem] absolute left-[1rem] bottom-[-3rem] h-[7rem] rounded-full overflow-hidden">
              <img src={Image} alt="" />
            </div>
          </div>

          <div className="flex flex-col gap-y-[.5rem] p-[1rem]  mt-[3rem]">
            <span>Isaac Anasonye</span>
            <span>Computer Science</span>
            <span>300L</span>

          </div>
        </div>

        <div className="bg-white h-[5rem] border border-gray-300 rounded-md">
          
        </div>

      </div>

      <div className="flex-none p-[1rem] w-[30rem]">
        <span className="w-full max-w-[25rem] mx-auto bg-white h-[25rem]">

        </span>
      </div>
    </div>
  )
}

export default Profile