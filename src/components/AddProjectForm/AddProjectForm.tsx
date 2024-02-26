import React, { useState } from 'react';
import './AddProjectForm.css'
import { useNavigate } from 'react-router-dom';

interface Project {
    id: number;
    name: string;
    description: string;
    status: 'Active' | 'Completed' | 'On Hold';
    startDate: string;
    endDate: string;
    participants: string[];
}



const AddProjectForm: React.FC = () => {
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [status, setStatus] = useState<'Active' | 'Completed' | 'On Hold'>('Active');
    const [startDate, setStartDate] = useState('');
    const [endDate, setEndDate] = useState('');
    const [participants, setParticipants] = useState('');
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newProject: Project = {
            id: Date.now(),
            name,
            description,
            status,
            startDate,
            endDate,
            participants: participants.split(',').map(participant => participant.trim()),
        };

        navigate(`/projects/${newProject.name}`)
    };

    return (
        <form onSubmit={handleSubmit} className="w-full bg-gray-700 h-[max-content] bg-gray-700  px-8 pt-6 pb-8">
    {/* Project Name Input */}
    <div className="mb-4">
        <label className="block text-white text-[3rem] font-bold mb-2" htmlFor="name">
            Project Name
        </label>
        <input className="shadow appearance-none bg-gray-800 rounded w-full max-w-sm py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
    </div>

    {/* Description Input */}
    <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="description">
            Description
        </label>
        <textarea className="shadow appearance-none min-h-[5rem] bg-gray-800 rounded w-full max-w-md py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
    </div>

    {/* Status Select */}
    <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="status">
            Status
        </label>
        <select className="shadow bg-gray-800 rounded w-full max-w-sm py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
            <option value="Active">Active</option>
            <option value="Completed">Completed</option>
            <option value="On Hold">On Hold</option>
        </select>
    </div>

    {/* Start Date Input */}
    <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="startDate">
            Start Date
        </label>
        <input className="shadow bg-gray-800 rounded w-full  max-w-[15rem] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="startDate" type="date" value={startDate} onChange={(e) => setStartDate(e.target.value)} required />
    </div>

    {/* End Date Input */}
    <div className="mb-4">
        <label className="block text-gray-300  font-bold mb-2" htmlFor="endDate">
            End Date
        </label>
        <input className="shadow bg-gray-800 rounded w-full max-w-[15rem] py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="endDate" type="date" value={endDate} onChange={(e) => setEndDate(e.target.value)} required />
    </div>

    {/* Participants Input */}
    <div className="mb-4">
        <label className="block text-gray-300 text-sm font-bold mb-2" htmlFor="participants">
            Participants/Team Members
        </label>
        <input className="shadow bg-gray-800 rounded w-full max-w-md py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline" id="participants" type="text" placeholder="Comma-separated list" value={participants} onChange={(e) => setParticipants(e.target.value)} />
    </div>

    <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        Add Project
    </button>
</form>


    );
};

export default AddProjectForm;
