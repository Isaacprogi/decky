import { Link } from 'react-router-dom'; 

const NotFound = () => {
  return (
    <div className='w-full h-full bg-gray-800 flex justify-center items-center overflow-y-auto'>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-white mb-2">404 - Not Found</h1>
        <p className="text-gray-300 mb-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Go Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
