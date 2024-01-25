import {useNavigate} from 'react-router-dom'

const Category = () => {
    const categories = ['Maths', 'Physics', 'Chemistry', 'Biology', 'Agriculture', 'English']
    const navigate = useNavigate()

    const handleNavigate = (category:string) => {
        const link = `/books?category=${category.toLowerCase()}`
        navigate(link)
    }

    return (
        <div className='w-full p-[1rem] h-[calc(100%-4rem)]'>
            <div className='flex flex-wrap gap-[1rem] items-center justify-center'>
                {
                   categories.map((cat:any)=>{
                    return <div key={cat} onClick={()=>handleNavigate(cat)} className='overflow-hidden  cursor-pointer'>
                        <div className='w-[10rem] hover:bg-red-500 duration-300 rounded-md overflow-hidden bg-yellow-500 h-[10rem]'>
                        </div>
                        <div className="flex items-center flex-col">
                            {cat}
                        </div>
                    </div>
                   }) 
                }
            </div>
        </div>
    )
}

export default Category