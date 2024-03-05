import AddNoteForm from '../../../Components/AddNoteForm/AddNoteForm';
import ParticipantsList from '../../../Components/NoteParticipant/NoteParticipant';
import { useNoteContext } from '../../../hooks/useNoteContext';
import { FiSave } from 'react-icons/fi';
import { FaPencilAlt } from 'react-icons/fa';
import Button from '../../../Components/common/Button/Button';
import { useEffect,useRef } from 'react';
import { useState } from 'react';


const NotePage: React.FC = () => {
  const {currentNote} = useNoteContext()

  const [content, setContent] = useState<string>(currentNote.content || '');
  const { updateNote, readOnly, toggleReadOnly } = useNoteContext();
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = () => {
    if (!content.trim()) return;
    const newNote = {
      ...currentNote,
      content,
    };
    updateNote(currentNote.id, newNote);
  };

  const handleEdit = () => {
    toggleReadOnly()
    textareaRef.current?.focus()
  }

  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.minHeight = '20rem';
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`;
    }
  }, [content]);
  
  

  return (
    <div className="container mx-auto p-4 min-h-full flex">
      <div className='flex-1'>

      <div>
        <div className='mb-[1rem]'>
      {
        readOnly ? <Button type='button' onClick={handleSubmit} text='Edit' icon={FaPencilAlt}/>
        : <Button onClick={handleEdit} text='Save' icon={FiSave}/>
      }
      </div>
        </div>
      <AddNoteForm textareaRef={textareaRef} content={content} setContent={setContent} />
      </div>
      <div className='w-[12rem]'>
        <ParticipantsList/>
      </div>
    </div>
  );
};

export default NotePage;
