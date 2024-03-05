import React from 'react';
import { useNoteContext } from '../../hooks/useNoteContext';
import { SetStateAction } from 'react';


interface AddNoteFormProps {
  textareaRef: React.RefObject<HTMLTextAreaElement>;
  setContent:React.Dispatch<SetStateAction<string>>;
  content:string;

}

const NoteEditor: React.FC<AddNoteFormProps> = ({textareaRef,setContent,content  }) => {

  const {readOnly} = useNoteContext()
  
  return (
    <div className="mb-4">
      <textarea
        ref={textareaRef}
        className={`resize-none overflow-hidden shadow border border-gray-600 text-white appearance-none ${readOnly ? "bg-gray-700" : "bg-gray-600 shadow"} rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        placeholder="Write a new note..."
        value={content}
        onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value)}
        readOnly={readOnly}
      />
    </div>
  );
};

export default NoteEditor;
