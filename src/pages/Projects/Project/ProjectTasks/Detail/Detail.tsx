// Import necessary components and libraries
import React, { useState, useEffect } from 'react';
import { useParams, } from 'react-router-dom';
import { CircularProgressbar } from 'react-circular-progressbar';
import { Pie } from 'react-chartjs-2';
import { Tooltip } from 'react-tooltip';
import { BiExport } from 'react-icons/bi';
import 'react-circular-progressbar/dist/styles.css';

// Assuming you have a service that fetches task data and updates tasks
// import { getTaskById, updateTask, exportPDF } from '../services/taskService';

const ProjectTaskDetail = () => {
  const { taskId } = useParams(); // Get taskId from URL params
  // const history = useHistory();
  const [task, setTask] = useState(null);

  useEffect(() => {
    // Fetch task details from API
    // getTaskById(taskId).then(setTask);
  }, [taskId]);

  // Handle task update submission
  const handleSubmit = (updatedTask) => {
    // updateTask(taskId, updatedTask).then(() => {
      alert('Task updated successfully!');
      // Optionally, redirect or fetch task again to reflect changes
    // });
  };

  // Navigate to the edit page with the current task's ID
  const handleEdit = () => {
    history.push(`/edit-task/${taskId}`);
  };

  // if (!task) {
  //   return <div>Loading...</div>;
  // }

  return (
    <div className="w-full h-[max-content] rounded-md bg-gray-800 px-8 py-4 text-white">
      {/* Task Details and Export Option */}
      <div className='flex items-center mb-3 justify-end'>
        <Tooltip content="Export" id="export">
          <BiExport className="cursor-pointer text-xl hover:text-gray-500 duration-300"  />
        </Tooltip>
      </div>

      <div className='bg-gray-700 p-6'>
        <h1 className="text-2xl font-bold mb-4">Task Details</h1>
        <p><strong>Content:</strong> {task?.content}</p>
        <p><strong>Status:</strong> {task?.state}</p>
        <p><strong>Assignees:</strong> {task?.assignees?.map(assignee => assignee.name).join(', ') || 'None'}</p>
        {/* Edit Button */}
        <button className="mt-4 px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded text-white" onClick={handleEdit}>Edit Task</button>
      </div>
    </div>
  );
};

export default ProjectTaskDetail;
