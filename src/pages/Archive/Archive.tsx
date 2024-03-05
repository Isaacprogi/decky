import React, { useState } from 'react';

// Example interface, adjust based on what you're archiving (tasks, notes, projects, etc.)
interface ArchiveItem {
  id: number;
  name: string;
  type: 'Task' | 'Note' | 'Project'; // Example types, adjust as necessary
  dateArchived: string;
}

const ArchivePage = () => {
  const [archiveItems, setArchiveItems] = useState<ArchiveItem[]>([
    { id: 1, name: "Old Project Plan", type: "Project", dateArchived: "2023-01-15" },
    { id: 2, name: "Completed Task Example", type: "Task", dateArchived: "2023-02-20" },
    // Add more archived items here
  ]);

  const restoreItem = (itemId: number) => {
    // Placeholder for functionality to restore an item
  };

  const deleteItem = (itemId: number) => {
    // Placeholder for functionality to permanently delete an item
  };

  return (
    <div className='w-full h-full bg-b1 overflow-y-auto'>
      <div className="w-full min-h-full px-4 py-8 bg-b2">

        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-t1">Archive</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {archiveItems.map(item => (
            <div key={item.id} className="cursor-pointer border border-b3 p-4 rounded-lg flex flex-col justify-between bg-b3 hover:bg-b4">
              <div>
                <h3 className="text-lg text-t1 font-semibold mb-2">{item.name}</h3>
                <p className="text-t2">Type: {item.type}</p>
                <p className="text-t3">Archived on: {item.dateArchived}</p>
              </div>
              <div className="flex justify-end space-x-2 mt-4">
                <button onClick={() => restoreItem(item.id)} className="hover:bg-l1 text-white font-bold py-1 px-3 rounded bg-t1">
                  Restore
                </button>
                <button onClick={() => deleteItem(item.id)} className="hover:bg-l1 text-white font-bold py-1 px-3 rounded bg-t2">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ArchivePage;
