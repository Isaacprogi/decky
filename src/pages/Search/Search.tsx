import React, { useState } from 'react';

// Dummy data for search results
const data = [
  { id: 1, title: "How to manage your time effectively", type: "Article" },
  { id: 2, title: "Morning Workout", type: "Task" },
  { id: 3, title: "Project Proposal", type: "Project" },
  // Add more items here
];

const Search = () => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = (e) => {
    e.preventDefault();
    // Simple search logic (for demonstration)
    const matchedResults = data.filter(item =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setResults(matchedResults);
  };

  return (
    <div className='w-full h-full bg-gray-800 overflow-y-auto'>
      <div className="bg-gray-700 w-full min-h-full px-4 py-8">
        <form onSubmit={handleSearch} className="mb-4">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search..."
            className="w-full p-2 rounded bg-gray-800 text-white"
          />
          <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </form>

        <div>
          <h3 className="text-xl font-semibold text-gray-100">Results</h3>
          <div className="mt-4">
            {results.length > 0 ? (
              results.map((item) => (
                <div key={item.id} className="bg-gray-600 mb-4 p-4 rounded-lg">
                  <h4 className="text-lg text-white font-semibold">{item.title}</h4>
                  <p className="text-gray-300">{item.type}</p>
                </div>
              ))
            ) : (
              <p className="text-gray-300">No results found.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
