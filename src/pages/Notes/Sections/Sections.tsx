import React, { useEffect, useState } from 'react';
import { MdOutlineAddToQueue } from 'react-icons/md';
import Button from '../../../Components/common/Button/Button';
import { useNavigate } from 'react-router-dom';
import Modal from '../../../Components/common/Modal/Modal';
import RadioButton from '../../../Components/common/RadioButton/RadioButton';
import { FaPencilAlt } from 'react-icons/fa'
import Input from '../../../Components/common/Input/Input';
import { Note } from '../../../types/types';
import { useNoteContext } from '../../../hooks/useNoteContext';
import { useParams } from 'react-router-dom';



const Sections = () => {

  const [showConfirmModal, setShowConfirmModal] = useState<boolean>(false);
  const [noteTitle, setNoteTitle] = useState<string>('')
  const [selectedValue, setSelectedValue] = useState('');

  const { setCurrentNote, getNotes, notes, currentNote } = useNoteContext()

  const { name } = useParams()
  console.log(name)


  useEffect(() => {
    getNotes()
  }, [])


  const navigate = useNavigate()


  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleNavigateToNote = (note: Note) => {
    setCurrentNote(note)
    navigate(`/note/${note.title}`)
  }

  const handleNoteTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNoteTitle(e.target.value)
  }

  const handleNewNote = () => {
    setShowConfirmModal(true)
  }

  const handleProceed = () => {
    setCurrentNote({
      id: "1",
      title: noteTitle,
      category: selectedValue,
      updatedAt: "sjsj"
    })
    setShowConfirmModal(false)
    navigate(`${noteTitle}/sections`)
  }


  return (
    <div className='w-full h-full bg-gray-800 overflow-y-auto'>
      <div className="bg-gray-700 w-full min-h-full px-4 py-8">

        <div className="mb-8 flex w-full  items-center justify-between">
          div
          <h2 className="text-2xl font-semibold text-gray-100">Sections</h2>
          <Button onClick={handleNewNote} customStyle="mr-[4rem]" text="New" icon={MdOutlineAddToQueue} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {notes.filter(note => note.id === currentNote.id).map(note => (
            <>
            {note.sections && note.sections.map(section => (
                <div onClick={() => handleNavigateToNote(note)} key={note.id} className="bg-gray-600 max-h-[11rem] text-ellipsis overflow-hidden hover:bg-gray-500 cursor-pointer border border-gray-800 p-4 rounded-lg">
                <div key={section.id}>
                  <h5 className="text-md text-white">{section.title}</h5>
                  <p className="text-gray-400">{section.content}</p>
                </div>
            </div>
              ))}
            </>
          ))}
        </div>


        <Modal isOpen={showConfirmModal}
          onClose={() => setShowConfirmModal(false)}>
          <div className='w-full p-4 min-h-[20rem] flex flex-col gap-4 items-center justify-center  max-w-[30rem] rounded-md  bg-gray-700'>
            <h1 className='text-center text-gray-200 '>
              Select Category
            </h1>

            <Input value={noteTitle} customClass='max-w-[15rem] ' onChange={handleNoteTitleChange} placeholder='title' />

            <div className='flex items-center  justify-center gap-[1rem]'>
              <div className='border w-[10rem] group hover:bg-gray-600 duration-300 p-[.6rem]  rounded-md w-[10rem]'>
                <RadioButton
                  label="Single"
                  value="Single"
                  name="options"
                  isChecked={selectedValue === 'Single'}
                  handleChange={handleChange}
                />
              </div>
              <div className='border p-[.6rem] group hover:bg-gray-600 duration-300 rounded-md w-[10rem]'>
                <RadioButton
                  label="Colaborate"
                  value="Collaborate"
                  name="options"
                  isChecked={selectedValue === 'Collaborate'}
                  handleChange={handleChange}
                />
              </div>


            </div>

            <div className='h-[4rem]'>
              {
                selectedValue && noteTitle !== "" && <Button icon={FaPencilAlt} onClick={handleProceed} text='Proceed'>

                </Button>
              }
            </div>
          </div>
        </Modal>


      </div>
    </div>
  );
};

export default Sections;
