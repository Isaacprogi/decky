import React, { useState } from 'react';

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

  return (
    <div className='w-full h-full bg-gray-800 '>
      <div className="bg-gray-700 w-full min-h-full px-4 py-8">

        <div className="mb-8 flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-100">Notes</h2>
          <button onClick={addNote} className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Add New Note
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.map(note => (
            <div key={note.id} className="bg-gray-600 max-h-[11rem] text-ellipsis overflow-hidden hover:bg-gray-500 cursor-pointer border border-gray-800 p-4 rounded-lg">
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
