import axios from "axios";
import { Note } from "../types/types";

const baseUrl:string = 'http://localhost:4000'

export const getNotesApi = async (): Promise<any> => {
    return await axios.get(`${baseUrl}/notes`)
 }

export const getNoteApi = async (id:string): Promise<any> => {
    return await axios.get(`${baseUrl}/notes/${id}`)
 }

 export const addNoteApi = async (note:Omit<Note, 'id'>): Promise<any> => {
   return await axios.post(`${baseUrl}/notes`,note);
 };
  
export const deleteNoteApi = async (id: string): Promise<void> => {
    return  await axios.delete(`${baseUrl}/notes/${id}`)
};

export const updateNoteApi = async (id: string, noteData: Partial<Note>): Promise<any> => {
    return  await axios.put(`${baseUrl}/notes/${id}`,noteData)
};
  