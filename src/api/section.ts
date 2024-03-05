import axios from "axios";
import { Note } from "../types/types";

const baseUrl:string = 'http://localhost:4000'

export const getSectionsApi = async (): Promise<any> => {
    return await axios.get(`${baseUrl}/sections`)
 }

export const getSectionApi = async (id:string): Promise<any> => {
    return await axios.get(`${baseUrl}/sections/${id}`)
 }

 export const addSectionApi = async (note:Omit<Note, 'id'>): Promise<any> => {
   return await axios.post(`${baseUrl}/sections`,note);
 };
  
export const deleteSectionApi = async (id: string): Promise<void> => {
    return  await axios.delete(`${baseUrl}/sections/${id}`)
};

export const updateSectionApi = async (id: string, noteData: Partial<Note>): Promise<any> => {
    return  await axios.put(`${baseUrl}/sections/${id}`,noteData)
};
  