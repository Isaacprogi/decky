import BookCard from "../../components/BookCard/BookCard"
import { useBookContext } from "../../hooks/useBookContext"
import { useEffect } from "react"
import { Book } from "../../types/types"


const Books = () => {
  const {getBooks,books} = useBookContext()

  useEffect(()=>{
     getBooks()
  },[])

  return (
    <div className="w-full flex flex-wrap p-[1rem] gap-[1rem] justify-center flex-wrap min-h-[calc(100%-4rem)]">
       {books && books.map((book:Book) => (
       <BookCard key={book._id} type="books" book={book} />
       ))}
    </div>
  )
}

export default Books