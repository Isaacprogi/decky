import { NoteContextType } from "../types/types";
import {useContext} from 'react'
import { NoteContext } from "../context/NoteContext";

export const useNoteContext = (): NoteContextType => {
    const context = useContext(NoteContext);
    if (!context) {
      throw new Error('useNoteContext must be used within a NoteProvider');
    }
    return context;
  };
  