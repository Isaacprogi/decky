import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd';
import { useEffect } from 'react';
import Avatar from '../../../../assets/me.jpg'
import { User } from '../../../../types/types';
import { useNavigate } from 'react-router-dom';

interface Task {
  id: string;
  content: string;
  state: 'todo' | 'inProgress' | 'completed';
  assignees?:User[]
}


const assignees:User[] = [
      {
        id:"1",
        fullName:"Isaac Anasonye",
        avatar:Avatar
      },
      {
        id:"1",
        fullName:"Isaac Anasonye",
        avatar:Avatar
      },
      {
        id:"1",
        fullName:"Isaac Anasonye",
        avatar:Avatar
      },
    ]


const initialTasks: Record<string, Task[]> = {
  todo: [
    { id: 'task-1',  content: 'Hhahahahahajajajjajajajajjajajjajajjajajajjajajajj hahah djdjdjd d djdjd djd djd djdjddj djdjdjdj djdjdjajajjaja welele there', state: 'todo', assignees:assignees, },
    { id: 'task-2', content: 'Task 2', state: 'todo' },
  ],
  inProgress: [
    { id: 'task-3', content: 'Task 3', state: 'inProgress' },
  ],
  completed: [
    { id: 'task-4', content: 'Task 4', state: 'completed' },
  ],
};

interface ProjectTasksProps {
  row: boolean
}


const ProjectTasks: React.FC<ProjectTasksProps> = ({ row }) => {
  const [tasks, setTasks] = useState<Record<string, Task[]>>(initialTasks);

  const navigate = useNavigate()

  const handleNavigateToDetailsPage = (name:string) => {
      navigate(`info/${name}`)
  }

  const onDragEnd = (result: DropResult) => {
    const { source, destination } = result;

    if (!destination) {
      return;
    }

    if (source.droppableId === destination.droppableId) {
      const items = Array.from(tasks[source.droppableId]);
      const [reorderedItem] = items.splice(source.index, 1);
      items.splice(destination.index, 0, reorderedItem);

      setTasks({
        ...tasks,
        [source.droppableId]: items,
      });
    } else {
      const sourceItems = Array.from(tasks[source.droppableId]);
      const [removedItem] = sourceItems.splice(source.index, 1);
      const destinationItems = Array.from(tasks[destination.droppableId]);
      destinationItems.splice(destination.index, 0, removedItem);

      setTasks({
        ...tasks,
        [source.droppableId]: sourceItems,
        [destination.droppableId]: destinationItems,
      });
    }
  };

  useEffect(()=>{
    console.log(tasks)
  },[tasks])

  const containerClass = !row ? 'flex  justify-start' : 'flex flex-col';


  return (
    <div className='overflow-y-auto'>
        <DragDropContext onDragEnd={onDragEnd}>
      <div className={containerClass}>
        {Object.entries(tasks).map(([stage, tasks]) => (
          <Droppable droppableId={stage} key={stage}>
            {(provided) => (
              <div
                {...provided.droppableProps}
                ref={provided.innerRef}
                className={`min-w-[280px] border border-gray-800 bg-gray-600 p-4 rounded shadow m-2 ${row  ? 'min-w-[280px]' : 'w-full'}`}
              >
                <h3 className="font-bold text-white capitalize">{stage}</h3>
                <div className="mt-2 ">
                  {tasks.map((task, index) => (
                    <Draggable key={task.id} draggableId={task.id} index={index}>
                      {(provided) => (
                        <div
                          onClick={()=>handleNavigateToDetailsPage(task.id)}
                          ref={provided.innerRef}
                          {...provided.draggableProps}
                          {...provided.dragHandleProps}
                          className="user-select-none text-white hover:bg-gray-600 px-4 pt-4 pb-1 mb-2 bg-gray-700 border border-gray-800 rounded shadow cursor-grab break-words" >
                          {task.content}
                          <div className='flex flex-col items-end'>
                            <span className='text-blue-600 text-[.8rem]'>
                                Assignees
                            </span>
                          <div className='flex flex-wrap w-full gap-[.3rem]  justify-end'>
                              {
                                task.assignees?.map((user)=>{
                                    return <div className='min-w-[1.5rem] border border-2 h-[1.5rem] rounded-full overflow-hidden'>
                                    <img className='w-full h-full' src={user.avatar} alt="" />
                                </div>
                                })
                              }
                          </div>
                          </div>
                        </div>
                      )}
                    </Draggable>
                  ))}
                </div>
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </div>
    </DragDropContext>
    </div>
  );
};

export default ProjectTasks;
