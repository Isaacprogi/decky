import  { useState } from 'react';
import AddProjectForm from '../../Components/AddProjectForm/AddProjectForm';
import { useNavigate } from 'react-router-dom';
import { MdOutlineAddToQueue } from 'react-icons/md';
import Button from '../../Components/common/Button/Button';

interface Project {
  id: number;
  name: string;
  description: string;
  status: 'Active' | 'Completed' | 'On Hold'; // Example statuses
}

const Projects = () => {
  const [projects, setProjects] = useState<Project[]>([
    { id: 1, name: "Website Redesign", description: "A project to redesign the corporate website.", status: "Active" },
    { id: 2, name: "Marketing Campaign", description: "Q4 marketing campaign targeting new customers.", status: "On Hold" },
  ]);

  const [formActive, setFormActive] = useState<Boolean>(false)

  const handleFormActive = () => setFormActive(!formActive)
  
  const navigate = useNavigate()

  const handleNavigate = (name:string) => {
      navigate(`/projects/${name}`)
  }

  const handleAddNewProject = () => {

  }
  return (
    formActive ? <AddProjectForm /> :
      <>
        <div  className='w-full h-full   overflow-y-auto'>
          <div className="bg-gray-700 w-full min-h-full px-4 py-8">

            <div className="mb-8 flex justify-between items-center">
              <h2 className="text-2xl font-semibold text-gray-100">Projects</h2>
              <Button onClick={handleAddNewProject} customStyle="mr-[4rem]" text="New" icon={MdOutlineAddToQueue}/>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {projects.map(project => (
                <div onClick={()=>handleNavigate(project.name)}  key={project.id} className="bg-gray-600 duration-300 hover:bg-gray-500  cursor-pointer border border-gray-800 p-4 rounded-lg">
                  <h3 className="text-lg text-white font-semibold mb-2">{project.name}</h3>
                  <p className="text-gray-300 mb-4">{project.description}</p>
                  <span className={`text-sm py-1 px-3 rounded-full text-white ${project.status === 'Active' ? 'bg-green-500' : project.status === 'On Hold' ? 'bg-yellow-500' : 'bg-red-500'}`}>
                    {project.status}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

      </>
  )
};

export default Projects;
