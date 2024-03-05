// src/context/NoteContext.tsx
import React, { createContext, useState } from 'react';
import { NoteContextType, Note, NoteError, NoteLoading } from '../types/types';
import Cookies from 'js-cookie';
import { addNoteApi,updateNoteApi,deleteNoteApi,getNotesApi,getNoteApi } from '../api/note';

export const NoteContext = createContext<NoteContextType | undefined>(undefined);

const initialData = {
  id: '',
  title: '',
  category:'',
  content: '',
  createdAt: '',
  updatedAt:'',
  participants:[],
  sections:[]
}

export const NoteContextProvider: React.FC<{ children: React.ReactElement }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);
  const [currentNote,setCurrentNote] = useState<Note>(initialData)
  const [token, setToken] = useState<string | undefined>(Cookies.get('noteToken'));
  const [error, setError] = useState<NoteError>({getAll:"", getSingle:"", add: "", update: "", delete: "" });
  const [loading, setLoading] = useState<NoteLoading>({getAll:false,getSingle:false, add: false, update: false, delete: false });
  const [readOnly,setReadOnly] = useState<boolean>(true)


  const toggleReadOnly = () => setReadOnly(prev => !prev);

  const handleGetNotes = async () => {
    setLoading((prev) => ({ ...prev, getAll: true }));
    setError((prev) => ({ ...prev, getAll: "" }));
    try {
      const {data} = await getNotesApi();
      setNotes(data)
    } catch (error:any) {
      setError((prev) => ({ ...prev, getAll:error?.response?.data }));
    } finally {
      setLoading((prev) => ({ ...prev, getAll: false }));
    }
  };


  const handleGetSingleNote = async (id:string) => {
    setLoading((prev) => ({ ...prev, getSingle: true }));
    setError((prev) => ({ ...prev, getSingle: "" }));
    try {
      const {data} = await getNoteApi(id);
      setCurrentNote(data)
    } catch (error:any) {
      setError((prev) => ({ ...prev, getSingle:error?.response?.data }));
    } finally {
      setLoading((prev) => ({ ...prev, getSingle: false }));
    }
  };

  const handleAddNote = async (noteData: Omit<Note, 'id'>) => {
    setLoading((prev) => ({ ...prev, add: true }));
    setError((prev) => ({ ...prev, add: "" }));
    try {
      const {data} = await addNoteApi(noteData);
       setNotes(prev=>[...prev,data])
    } catch (error:any) {
      setError((prev) => ({ ...prev, add: error?.response?.data }));
    } finally {
      setLoading((prev) => ({ ...prev, add: false }));
    }
  };

  const handleUpdateNote = async (id: string, noteData: Partial<Note>) => {
    setLoading((prev) => ({ ...prev, update: true }));
    setError((prev) => ({ ...prev, update: "" }));
    try {
      const {data} = await updateNoteApi(id, noteData);
      toggleReadOnly()
    } catch (error:any) {
      setError((prev) => ({ ...prev, update:error?.response?.data }));
    } finally {
      setLoading((prev) => ({ ...prev, update: false }));
    }
  };

  const handleDeleteNote = async (id: string) => {
    setLoading((prev) => ({ ...prev, delete: true }));
    setError((prev) => ({ ...prev, delete: "" }));
    try {
      await deleteNoteApi(id);
      setNotes(notes.filter((note:Note)=>{
        return note.id !== id
      }))
    } catch (error:any) {
      setError((prev) => ({ ...prev, delete:error?.response?.data}));
    } finally {
      setLoading((prev) => ({ ...prev, delete: false }));
    }
  };



  const updateToken = (newToken: string | undefined) => {
    setToken(newToken);
    if (newToken) {
      Cookies.set('noteToken', newToken, { expires: 7 });
    } else {
      Cookies.remove('noteToken');
    }
  };

  const contextValue: NoteContextType = {
    notes,
    currentNote,
    setCurrentNote,
    token,
    error,
    loading,
    addNote: handleAddNote,
    updateNote: handleUpdateNote,
    deleteNote: handleDeleteNote,
    getNotes:handleGetNotes,
    getSingleNote:handleGetSingleNote,
    setToken: updateToken,
    readOnly,
    toggleReadOnly,
  };

  return <NoteContext.Provider value={contextValue}>{children}</NoteContext.Provider>;
};

export default NoteContextProvider;
