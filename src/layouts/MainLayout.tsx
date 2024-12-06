import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar/Sidebar';

const MainLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      
      <Sidebar />

      <main style={{ flexGrow: 1, padding: '20px', width:'70%' }}>
        <Outlet /> 
      </main>
    </div>
  );
};

export default MainLayout;
