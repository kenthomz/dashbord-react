// src/components/Dashboard.js
import React, { useState } from 'react';
import './scss/_dashboard.scss';
import Sidebar from './Sidebar';
import Header from './Header';

function Dashboard() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="dashboard">
      <Header toggleSidebar={toggleSidebar} />
      <div className="layout">
        <Sidebar isOpen={isSidebarOpen} />
        <div className={`main-content ${isSidebarOpen ? 'sidebar-open' : ''}`}>
          <h1>Welcome to the Dashboard</h1>
          <p>Choose an option from the sidebar to get started.</p>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
