import BookCard from '../BookCard/BookCard'
import { Book } from '../../types/types'

interface BooksDisplayProps{
    books:Book[];
}

const BooksDisplay:React.FC<BooksDisplayProps> = ({books}) => {
  return (
    <div className='mt-[2rem] max-w-[1200px] mx-auto'>
    <div className='font-bold px-[1rem] font-600 text-[1rem]'>
        Your search Result
    </div>
    <div className='grid mx-auto max-w-[70rem] grid-cols-2 p-[1rem] sm:grid-cols-2 lg:grid-cols-4 gap-[1rem] flex-wrap'>
        {
            books && books.map((book)=>{
                return<BookCard book={book}  key={book._id}/>
            })
        }
    </div>
    </div>
  )
}

export default BooksDisplay