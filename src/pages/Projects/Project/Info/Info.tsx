import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip as ChartTooltip, Legend } from 'chart.js';
import { BiExport } from "react-icons/bi";
import { Tooltip } from '../../../../Components/common/Tooltip/Tooltip'; // Adjust the import path based on your project structure
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

ChartJS.register(ArcElement, ChartTooltip, Legend);

// Assuming your Project interface and projectData remain the same
interface Project {
    id: number;
    name: string;
    description: string;
    status: 'Active' | 'Completed' | 'On Hold';
    startDate: string;
    endDate: string;
    avatar: string;
    participants: string[];
}

const projectData: Project = {
    id: 1,
    name: 'React Dashboard',
    description: 'A project to create a dashboard using React.',
    status: 'Active',
    startDate: '2023-01-01',
    endDate: '2023-12-31',
    avatar: 'https://via.placeholder.com/150',
    participants: ['Alice', 'Bob', 'Charlie'],
};

const Info: React.FC = () => {
    const { name, description, status, startDate, endDate, avatar, participants } = projectData;

    const progress = 75; // Assuming 75% of the project is completed
    const taskDistribution = {
        completed: 10,
        inProgress: 5,
        pending: 3,
    };

    const data = {
        labels: ['Completed', 'In Progress', 'Pending'],
        datasets: [
            {
                label: '# of Tasks',
                data: [taskDistribution.completed, taskDistribution.inProgress, taskDistribution.pending],
                backgroundColor: [
                    'rgba(75, 192, 192, 0.2)',
                    'rgba(255, 206, 86, 0.2)',
                    'rgba(255, 99, 132, 0.2)',
                ],
                borderColor: [
                    'rgba(75, 192, 192, 1)',
                    'rgba(255, 206, 86, 1)',
                    'rgba(255, 99, 132, 1)',
                ],
                borderWidth: 1,
            },
        ],
    };

    const exportPDF = () => {
        const input = document.getElementById('exportableProjectInfo');
        if (input) {
            html2canvas(input, {
                scale: 1.5,
                useCORS: true,
            }).then((canvas) => {
                const imgData = canvas.toDataURL('image/jpeg', 0.85);
                const imgWidth = 210;
                const pageHeight = 297;
                const imgHeight = canvas.height * imgWidth / canvas.width;
                let heightLeft = imgHeight;

                const doc = new jsPDF('p', 'mm', 'a4');
                let position = 0;

                const backgroundColor = '#374151';
                doc.setFillColor(backgroundColor);
                doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

                doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
                heightLeft -= pageHeight;

                while (heightLeft >= 0) {
                    position = heightLeft - imgHeight;
                    doc.addPage();

                    doc.setFillColor(backgroundColor);
                    doc.rect(0, 0, doc.internal.pageSize.getWidth(), doc.internal.pageSize.getHeight(), 'F');

                    doc.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);

                    heightLeft -= pageHeight;
                }

                doc.save(`${name}_ProjectInfo.pdf`);
            }).catch((err) => {
                console.error("Error exporting PDF: ", err);
            });
        }
    };




    return (
        <div className="w-full h-[max-content] rounded-md  px-8 py-4 text-white" >

            <div className='flex items-center mb-3 justify-end'>
                <Tooltip content="Export" id="export">
                    <BiExport className="cursor-pointer text-xl hover:text-gray-500 duration-300" onClick={exportPDF} />
                </Tooltip>
            </div>

            <div className='bg-gray-700 p-6 ' id="exportableProjectInfo">
                    <div className="flex items-center mb-6">
                        <img src={avatar} alt="Project Avatar" className="w-16 h-16 mr-4 rounded-full" />
                        <h1 className="text-2xl font-bold">{name}</h1>
                    </div>
                    <p className="mb-4"><strong>Description:</strong> {description}</p>
                    <p className="mb-4"><strong>Status:</strong> {status}</p>
                    <p className="mb-4"><strong>Start Date:</strong> {startDate}</p>
                    <p className="mb-4"><strong>End Date:</strong> {endDate}</p>
                    <div>
                        <h2 className="mb-2 font-semibold">Participants:</h2>
                        <ul>
                            {participants.map((participant, index) => (
                                <li key={index}>{participant}</li>
                            ))}
                        </ul>
                    </div>

                <div className="my-4 flex flex-col items-center justify-center">
                    <h2 className="text-lg font-semibold mb-2">Project Progress</h2>
                    <div style={{ width: 100, height: 100 }}>
                        <CircularProgressbar value={progress} text={`${progress}%`} />
                    </div>
                </div>
                <div className="my-4 text-center max-w-[30rem] mx-auto">
                    <h2 className="text-lg font-semibold mb-2">Task Distribution</h2>
                    <Pie data={data} />
                </div>
            </div>

        </div>
    );
};

export default Info;
