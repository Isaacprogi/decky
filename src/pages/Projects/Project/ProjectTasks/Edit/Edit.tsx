import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

interface User {
  id: string;
  name: string;
}

interface Task {
  id: string;
  content: string;
  state: 'todo' | 'inProgress' | 'completed';
  assignees: string[];
}

// Assuming these services return promises and are properly typed
// import { getTaskById, updateTask, getAllUsers } from '../services/taskService';

const EditTaskPage: React.FC = () => {
  const { taskId } = useParams<{ taskId: string }>();
  const history = useHistory();
  const [task, setTask] = useState<Task | null>(null);
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);


  const navigate = useNavigate()

  useEffect(() => {
    const fetchData = async () => {
      // const fetchedTask = await getTaskById(taskId);
      // const fetchedUsers = await getAllUsers();
      // setTask(fetchedTask);
      // setUsers(fetchedUsers);
      // setIsLoading(false);
    };

    fetchData();
  }, [taskId]);

  const handleChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = event.target;
    setTask(prevTask => {
      if (prevTask === null) return null; // Explicitly handle the null case
      return {
        ...prevTask,
        [name]: value,
      } as Task; // Assert that the returned object conforms to the Task interface
    });
  };
  
  const handleAssigneeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const options = event.target.options;
    const value: string[] = [];
    for (let i = 0, l = options.length; i < l; i++) {
      if (options[i].selected) {
        value.push(options[i].value);
      }
    }
    setTask(prevTask => {
      if (prevTask === null) return null; // Again, handle the null case
      return {
        ...prevTask,
        assignees: value,
      } as Task; // Assert the return type
    });
  };
  

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // event.preventDefault();
    // if (!task) return;
    // try {
    //   // await updateTask(taskId, task);
    //   alert('Task updated successfully!');
    //   history.push(`/tasks/${taskId}`);
    // } catch (error) {
    //   alert('Failed to update task. Please try again.');
    // }
    navigate(`edit/${'hello'}`)
  };

  if (isLoading || !task) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-semibold mb-4">Edit Task</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="content" className="block text-sm font-medium text-gray-700">Content</label>
          <textarea
            id="content"
            name="content"
            value={task.content}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded shadow-sm"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="state" className="block text-sm font-medium text-gray-700">Status</label>
          <select
            id="state"
            name="state"
            value={task.state}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded shadow-sm"
          >
            <option value="todo">To Do</option>
            <option value="inProgress">In Progress</option>
            <option value="completed">Completed</option>
          </select>
        </div>

        <div className="mb-4">
          <label htmlFor="assignees" className="block text-sm font-medium text-gray-700">Assignees</label>
          <select
            multiple={true}
            id="assignees"
            name="assignees"
            value={task.assignees}
            onChange={handleAssigneeChange}
            className="mt-1 block w-full border border-gray-300 p-2 rounded shadow-sm"
          >
            {users.map(user => (
              <option key={user.id} value={user.id}>{user.name}</option>
            ))}
          </select>
        </div>

        <button type="submit" className="px-4 py-2 font-bold text-white bg-blue-500 rounded hover:bg-blue-700">
          Update Task
        </button>
      </form>
    </div>
  );
};

export default EditTaskPage;
