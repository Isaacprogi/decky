import React, { createContext, ReactElement, useReducer } from "react";
import {BookAction, BookContextProps,Book, BookState, bookError, bookLoading } from "../types/types";
import {fetchBooksApiCall } from "../api/book";
import { useState } from "react"

export const BookContext = createContext<any>(null);

const bookReducer = (state: BookState, action: BookAction): BookState => {
  switch (action.type) {
    case "SET":
      return { ...state, books: action.payload };
    default:
      return state;
  }
};


const BookContextProvider: React.FC<{ children: ReactElement }> = ({ children }) => {

  const [state, dispatch] = useReducer(bookReducer, { books: [], currentBook:null,});
  const [loading, setLoading] = useState<bookLoading>({
    getBooks:false,
    searchBooks:false,
  })
  
  const [error, setError] = useState<bookError>({
    getBooks:"",
    searchBooks:"",
  })

  const getBooks = async () => {
    setLoading(prev => ({ ...prev, getBooks: true }))
    setError(prev => ({ ...prev, getBooks: '' }))
    try {
      const { data }:{data:Book[]} = await fetchBooksApiCall();
      dispatch({ type: "SET", payload: data });
      setLoading(prev => ({ ...prev, getBooks: false }))
    } catch (error: any) {
      console.error("Error fetching Book:", error);
      setError(prev => ({ ...prev, getBooks: error?.response?.data }))
      setLoading(prev => ({ ...prev, getBooks: false }))
    }
};

    const searchBooks = async ({category,searchValue}:{category?:string,searchValue?:string}) => {
    setLoading(prev => ({ ...prev, searchBooks: true }))
    setError(prev => ({ ...prev, searchBooks: '' }))
    try {
      const { data }:{data:Book[]} = await fetchBooksApiCall(category,searchValue);
      setLoading(prev => ({ ...prev, searchBooks: false }))
      return data
    } catch (error: any) {
      console.error("Error fetching Book:", error);
      setError(prev => ({ ...prev, searchBooks: error?.response?.data }))
      setLoading(prev => ({ ...prev, searchBooks: false }))
    }
};

  const contextValue: BookContextProps = {
    state,
    loading,
    error,
    dispatch,
    getBooks,
    searchBooks
  };


  return (
    <BookContext.Provider value={contextValue}>
      {children}
    </BookContext.Provider>
  )
};

export default BookContextProvider;
