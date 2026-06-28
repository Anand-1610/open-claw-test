import React from 'react';
import RepoList from './components/RepoList';
import './index.css';

function App() {
  // Hardcoded repository data based on your previous list
  const repositories = [
    { name: "Anand-1610/open-claw-test", url: "https://github.com/Anand-1610/open-claw-test" },
    { name: "Anand-1610/GLB_Website", url: "https://github.com/Anand-1610/GLB_Website" },
    { name: "Anand-1610/Portfolio-", url: "https://github.com/Anand-1610/Portfolio-" },
    { name: "Anand-1610/Anand-1610", url: "https://github.com/Anand-1610/Anand-1610" },
    { name: "Anand-1610/euriditus", url: "https://github.com/Anand-1610/euriditus" },
    { name: "Anand-1610/DripMax", url: "https://github.com/Anand-1610/DripMax" },
    { name: "Anand-1610/dailytracker", url: "https://github.com/Anand-1610/dailytracker" },
    { name: "Anand-1610/ERP", url: "https://github.com/Anand-1610/ERP" },
    { name: "Anand-1610/New_Year", url: "https://github.com/Anand-1610/New_Year" },
    { name: "Anand-1610/Water-Management", url: "https://github.com/Anand-1610/Water-Management" },
    // Corrected URL for Portfolio, assuming it's Anand-1610/Portfolio
    { name: "Anand-1610/Portfolio", url: "https://github.com/Anand-1610/Portfolio" },
    { name: "Anand-1610/Language-Tutor", url: "https://github.com/Anand-1610/Language-Tutor" },
  ];

  return (
    <div className="container mx-auto p-4 md:p-8">
      <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">My GitHub Repositories</h1>
      <RepoList repositories={repositories} />
    </div>
  );
}

export default App;