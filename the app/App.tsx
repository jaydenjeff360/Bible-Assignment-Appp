
import React, { useState } from 'react';
import { View } from './types';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import UserManagement from './components/UserManagement';
import CourseEditor from './components/CourseEditor';
import Analytics from './components/Analytics';
import Login from './components/Login';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.DASHBOARD);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (currentView) {
      case View.DASHBOARD:
        return <Dashboard onViewChange={setCurrentView} />;
      case View.USERS:
        return <UserManagement />;
      case View.COURSES:
        return <CourseEditor />;
      case View.REPORTS:
        return <Analytics />;
      default:
        return <Dashboard onViewChange={setCurrentView} />;
    }
  };

  return (
    <div className="flex h-screen w-full overflow-hidden">
      <Sidebar 
        currentView={currentView} 
        onViewChange={setCurrentView} 
        onLogout={() => setIsLoggedIn(false)}
      />
      <main className="flex-1 flex flex-col overflow-hidden bg-background-light dark:bg-background-dark">
        {renderContent()}
      </main>
    </div>
  );
};

export default App;
