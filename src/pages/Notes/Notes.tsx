import React, { useState } from 'react';
import { MdOutlineAddToQueue } from 'react-icons/md';
import Button from '../../Components/common/Button/Button';
import { useNavigate } from 'react-router-dom';

interface Note {
  id: number;
  title: string;
  content: string;
  date: string;
}

const Notes = () => {
  const [notes, setNotes] = useState<Note[]>([
    {
      id: 1,
      title: "Weekly Goals",
      content: "Finish the React project, start learning about Redux, and jog in the morning.",
      date: new Date().toLocaleDateString(),
    },
    {
      id: 2,
      title: "Book List",
      content: "1. Clean Code\n2. The Pragmatic Programmer\n3. Design Patterns\n4. Design Patterns ",
      date: new Date().toLocaleDateString(),
    },
    // Add more notes here
  ]);

  const addNote = () => {
    // Implement functionality to add a new note
  };

  const navigate = useNavigate()

  const handleNavigateToNote = (name:string) => {
    navigate(`${name}`)
  }

  return (
    <div className='w-full h-full bg-gray-800 overflow-y-auto'>
      <div className="bg-gray-700 w-full min-h-full px-4 py-8">

        <div className="mb-8 flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-100">Notes</h2>
          <Button onClick={addNote} customStyle="mr-[4rem]" text="New" icon={MdOutlineAddToQueue}/>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map(note => (
            <div onClick={()=>handleNavigateToNote(note.title)} key={note.id} className="bg-gray-600 max-h-[11rem] text-ellipsis overflow-hidden hover:bg-gray-500 cursor-pointer border border-gray-800 p-4 rounded-lg">
              <h4 className="text-lg text-white font-semibold">{note.title}</h4>
              <p className="text-gray-300 whitespace-pre-line">{note.content}</p>
              <span className="text-gray-400">{note.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Notes;
