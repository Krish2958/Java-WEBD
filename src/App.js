// App.js
import React, { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import LoginPage from './components/LoginPage';
import Dashboard from './components/Dashboard';
import GiverPage from './components/GiverPage';
import TakerPage from './components/TakerPage';
import AdminPage from './components/AdminPage';


function App() {
  // State to track the current page
  const [currentPage, setCurrentPage] = useState('welcome');

  // Function to handle page change
  const changePage = (page) => {
    setCurrentPage(page);
  };

  // Render different components based on the current page state
  let pageComponent;
  switch (currentPage) {
    case 'welcome':
      pageComponent = <WelcomePage changePage={changePage} />;
      break;
    case 'login':
      pageComponent = <LoginPage changePage={changePage} />;
      break;
    case 'dashboard':
      pageComponent = <Dashboard />;
      break;
    case 'giver':
      pageComponent = <GiverPage />;
      break;
    case 'taker':
      pageComponent = <TakerPage />;
      break;
    default:
      pageComponent = <WelcomePage changePage={changePage} />;
  }

  return (
    <div className="App">
      {pageComponent}
    </div>
  );
}

export default App;
