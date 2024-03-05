import { getPartOfDay } from "../../utils/getPartOfDay";
import { MdOutlineAddToQueue } from 'react-icons/md';
import Button from '../../Components/common/Button/Button';
import { MdOutlineCalendarToday } from "react-icons/md";

type PartOfDay = 'morning' | 'afternoon' | 'evening';

interface Article {
  id: number;
  title: string;
  url: string;
  description: string;
  imageUrl: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
  time?: string;
  date?: string; 
}

const HomePage = () => {
  const articles: Article[] = [
    {
      id: 1,
      title: "How to manage your time effectively",
      url: "#",
      description: "Learn the secrets to mastering your time and achieving more.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 2,
      title: "Top 10 productivity tools in 2024",
      url: "#",
      description: "Discover the latest tools to boost your productivity.",
      imageUrl: "https://via.placeholder.com/150"
    },
    {
      id: 3,
      title: "Setting realistic goals for your personal growth",
      url: "#",
      description: "Find out how to set achievable goals and grow personally.",
      imageUrl: "https://via.placeholder.com/150"
    },
  ];

  const timeBasedMessages: Record<PartOfDay, string[]> = {
    morning: [
      "A fresh day, a fresh plan. Let's get started!",
      "Embrace the morning energy! What's first on the agenda?",
      "Morning! Time to turn those goals into achievements.",
    ],
    afternoon: [
      "Afternoon's here. Perfect time to check progress.",
      "Keep the momentum going! What's next?",
      "Halfway through the day, let's accomplish even more.",
    ],
    evening: [
      "Evening already? Let's wrap up today's tasks.",
      "Time to review the day's achievements.",
      "As the day winds down, let's plan for tomorrow.",
    ]
  };

  const handleAddNewTask =() => {

  }

  const handleViewCalendar = () => {
    
  }

  const partOfDay = getPartOfDay() as PartOfDay; 
  const messages = timeBasedMessages[partOfDay]; 
  const message = messages[Math.floor(Math.random() * messages.length)];

  const todaysTasks: Task[] = [
    { id: 1, title: "Morning Workout", description: "Complete a 30-minute workout session.", time: "07:30 AM" },
    { id: 2, title: "Team Standup Meeting", description: "Participate in the daily remote standup meeting.", time: "09:00 AM" },
  ];

  const upcomingTasks:Task[] = [
    { id: 1, title: "Project Proposal", description: "Draft the project proposal for the new client.", date: new Date(new Date().setDate(new Date().getDate() + 2)).toLocaleDateString() },
    { id: 2, title: "Software Update", description: "Update the development environment before the next sprint.", date: new Date(new Date().setDate(new Date().getDate() + 5)).toLocaleDateString() },
  ];


  return (
    <div className='w-full h-full bg-b1 overflow-y-auto'>
      <div className="bg-b2 w-full min-h-full px-4 py-8">
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-t1">Good {partOfDay}, Isaac</h2>
          <p className="text-md text-t2">{message}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-t1">Today's Tasks</h3>
          <div className="flex flex-row flex-wrap mt-[1rem] gap-4">
            {todaysTasks.map(task => (
              <div key={task.id} className="bg-b3 hover:bg-b4 cursor-pointer border border-b2 p-4 rounded-lg">
                <h4 className="text-lg text-t1 font-semibold">{task.title}</h4>
                <p className="text-t2">{task.description}</p>
                <span className="text-l1">{task.time}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold text-t1">Upcoming Tasks</h3>
          <div className="flex flex-row mt-[1rem] flex-wrap gap-4">
            {upcomingTasks.map(task => (
              <div key={task.id} className="bg-b3 hover:bg-b4 cursor-pointer border border-b2 p-4 rounded-lg">
                <h4 className="text-lg text-t1 font-semibold">{task.title}</h4>
                <p className="text-t2">{task.description}</p>
                <span className="text-l1">{task.date}</span>
              </div>
            ))}
          </div>
        </div>

        <h2 className="text-2xl mt-[3rem] border-b border-b2 pb-[.4rem] font-semibold text-t1">Articles for you</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4'>
          {articles.map(article => (
            <a
              key={article.id}
              href={article.url}
              className="block bg-b3 hover:bg-b4 rounded-md p-4 transition duration-300 ease-in-out overflow-hidden"
            >
              <div className="flex flex-col items-center">
                <img src={article.imageUrl} alt={article.title} className="w-full h-40 object-cover mb-4" />
                <h3 className="text-lg text-t1 font-semibold mb-2">{article.title}</h3>
                <p className="text-sm text-t2">{article.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
