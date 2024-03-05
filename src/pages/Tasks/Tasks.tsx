import React, { useState } from 'react';
import Button from '../../Components/common/Button/Button';
import { MdOutlineAddToQueue } from 'react-icons/md';

interface Task {
  id: number;
  title: string;
  description: string;
  time?: string;
  date?: string;
  completed: boolean;
}

const Tasks = () => {
  const [tasks, setTasks] = useState<Task[]>([
    // Example tasks
    { id: 1, title: "Morning Workout", description: "Complete a 30-minute workout session.", time: "07:30 AM", date: new Date().toLocaleDateString(), completed: false },
    { id: 2, title: "Read a book chapter", description: "Read one chapter of 'Clean Code'", time: "08:00 PM", date: new Date().toLocaleDateString(), completed: false },
    // Add more tasks here
  ]);

  const toggleTaskCompletion = (taskId: number) => {
    const updatedTasks = tasks.map(task =>
      task.id === taskId ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className='w-full h-full bg-gray-800 overflow-y-auto'>
      <div className="bg-gray-700 w-full min-h-full px-4 py-8">
        
         <div className="mb-8 flex w-full items-center justify-between">
          <h2 className="text-2xl font-semibold text-gray-100">Notes</h2>
          <Button onClick={handleNewNote} customStyle="mr-[4rem]" text="New" icon={MdOutlineAddToQueue} />
        </div>

        <div className="flex flex-col">
          {tasks.map(task => (
            <div key={task.id} className={`bg-gray-600 hover:bg-gray-500 cursor-pointer border border-gray-800 p-4 rounded-lg mb-4 ${task.completed ? 'opacity-50' : ''}`}>
              <div className="flex justify-between items-center">
                <h4 className="text-lg text-white font-semibold">{task.title}</h4>
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="form-checkbox h-5 w-5 text-blue-600"
                />
              </div>
              <p className="text-gray-300">{task.description}</p>
              <span className="text-gray-400">{task.time} - {task.date}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tasks;
