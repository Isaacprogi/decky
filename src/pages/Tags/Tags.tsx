import React, { useState } from 'react';
import { MdOutlineAddToQueue, MdDelete } from 'react-icons/md'; // Import MdDelete for delete icon
import Button from '../../Components/common/Button/Button';
import Modal from '../../Components/common/Modal/Modal';
import ColorPicker from '../../Components/common/ColorPicker/ColorPicker';
import Input from '../../Components/common/Input/Input';

interface Tag {
  id: number;
  name: string;
  color: string;
}

const Tags = () => {
  const [tags, setTags] = useState<Tag[]>([
    { id: 1, name: "Personal", color: "blue-500" },
    { id: 2, name: "Work", color: "red-500" },
    { id: 3, name: "Urgent", color: "yellow-500" },
  ]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [newTagName, setNewTagName] = useState('');
  const [newTagColor, setNewTagColor] = useState('');

  const addTag = () => {
    if (!newTagName.trim() || !newTagColor.trim()) {
      alert('Please enter a tag name and select a color.'); // Consider using a more user-friendly notification system
      return;
    }

    const isDuplicate = tags.some(tag => tag.name.toLowerCase() === newTagName.toLowerCase());
    if (isDuplicate) {
      alert('Tag name already exists. Please enter a unique tag name.'); // Consider using a more user-friendly notification system
      return;
    }

    const newTag: Tag = {
      id: Date.now(), 
      name: newTagName,
      color: newTagColor,
    };
  
    setTags(prevTags => [...prevTags, newTag]);
    
    setNewTagName('');
    setNewTagColor('');
    setIsModalOpen(false); 
  };
  

  const deleteTag = (id: number) => {
    setTags(prevTags => prevTags.filter(tag => tag.id !== id));
  };

  return (
    <div className='w-full h-full bg-gray-800 overflow-y-auto'>
      <div className="bg-gray-700 w-full min-h-full px-4 py-8">
        <div className="mb-8 flex  border-b pb-[.5rem] w-full border-gray-600 justify-between items-center">
          <h2 className="text-2xl font-semibold text-gray-100">Tags</h2>
          <Button onClick={() => setIsModalOpen(true)} customStyle="mr-[4rem]" text="New" icon={MdOutlineAddToQueue}/>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {tags.map(tag => (
            <div key={tag.id} className={`cursor-pointer p-4 rounded-lg flex items-center justify-between bg-${tag.color} text-white`}>
              <span>{tag.name}</span>
              <MdDelete onClick={() => deleteTag(tag.id)} className="cursor-pointer" />
            </div>
          ))}
        </div>
      </div>

      <Modal isOpen={isModalOpen} handleClose={() => setIsModalOpen(false)}>
        <div className="bg-white p-4 rounded-lg absolute ">
          <div>
            <Input
              type="text" 
              placeholder="Taffo" 
              value={newTagName}
              onChange={(e) => setNewTagName(e.target.value)}
            />
          </div>
          <div>
          <ColorPicker value={newTagColor} onSelectColor={setNewTagColor} />
          </div>
          <Button text="Add Tag" onClick={addTag} />
        </div>
      </Modal>
    </div>
  );
};

export default Tags;
