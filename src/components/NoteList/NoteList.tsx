// components/NoteList.tsx
import React from 'react';
import { Note } from '../../types/types';

interface NoteListProps {
  notes: Note[];
  onDeleteNote: (id: number) => void;
}

const NoteList: React.FC<NoteListProps> = ({ notes, onDeleteNote }) => {
  return (
    <div>
      {notes.map((note) => (
        <div key={note.id} className="flex justify-between items-center bg-gray-100 p-4 mt-2 rounded">
          <p>{note.content}</p>
          <button
            onClick={() => onDeleteNote(note.id)}
            className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
};

export default NoteList;
