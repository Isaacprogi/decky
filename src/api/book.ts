import axios from "axios";

const baseUrl:string = 'http://localhost:4000/api'

export const fetchBooksApiCall = async (category?:string,searchValue?:string): Promise<any> => {
    return await axios.get(`${baseUrl}/books?category=${category}?searchValue=${searchValue}`)
 }

 export const addToCollectionApiCall = async (bookId: string,config:Object): Promise<any> => {
   return await axios.post(`${baseUrl}/books`, bookId,config);
 };
  
export const removeFromCollectionApiCall = async (bookId: string,config:Object): Promise<void> => {
    return  await axios.delete(`${baseUrl}/books/${bookId}`,config)
};
  