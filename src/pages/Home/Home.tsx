import TopLogo from '../../assets/top_logo.jpg'
import { FaSearch } from 'react-icons/fa'
import BooksDisplay from '../../components/BooksDisplay/BooksDisplay'
import React, { useState } from 'react'
import { useBookContext } from '../../hooks/useBookContext'
import { Book } from '../../types/types'

const Home: React.FC = () => {
  const [searchValue, setSearchValue] = useState<string>("")
  const [books, setBooks] = useState<Book[]>([])

  const { getBooks } = useBookContext()

  const handleSearch = async () => {
    const books: Book[] = await getBooks({ searchValue: searchValue })
    if (books) {
      setBooks(books)
    }
  }

  return (
    <>
      <div className="w-full   relative h-[calc(100%-4rem)] overflow-hidden max-w-[1200px] mx-auto">
        <img src={TopLogo} className="w-full h-full   object-cover" alt="logo image" />

        <div className="w-full">
          <div className='absolute w-full bg-gray-900 opacity-[.7]  p-[1rem] text-center top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'>
            <div className="w-full max-w-[20rem] mx-auto   bg-white overflow-hidden  flex items-center  rounded-md">
              <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} type="text" className="px-[.5rem] w-full outline-none py-[.5rem]" />
              <button onClick={handleSearch} className=" bg-neutral-700 hover:bg-neutral-600 duration-300 h-[2.5rem] cursor-pointer  w-[3rem] flex items-center justify-center ">
                <FaSearch className="text-white text-neutral-200 text-lg cursor-pointer" />
              </button>
            </div>
            <div className='mt-[1rem] text-white'>
              Get access to the best books.
            </div>
          </div>
        </div>
      </div>
      {books.length > 0 && <BooksDisplay books={books} />}
    </>
  )
}

export default Home