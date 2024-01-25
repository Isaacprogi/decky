import { useNavigate } from 'react-router-dom'
import { Book } from '../../types/types'
interface Props {
    book:Book
    type?:string
}

const BookCard: React.FC<Props> = (props) => {
    const navigate = useNavigate()
    return (
        <div>
        <div style={{height:props.type === 'books'?"12rem":"",maxWidth:props.type==="books"?"12rem":""}} onClick={() => navigate(`/book/${props.book._id}`)} className='h-[17rem] rounded-md overflow-hidden hover:opacity-[.7] duration-300'>
            <img src={props.book?.image} className='w-full h-full object-cover' alt="" />
        </div>
        <div className='font-[500] text-[1.5rem]'>{props.book?.title}</div>
        <div>{props.book?.description}</div>
        </div>
    )
}

export default BookCard