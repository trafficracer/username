import React from 'react';
import Navbar from './Navbar';

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen bg-black text-green-400 font-mono">
      <Navbar />
      <main className="pt-50">{children}</main>
    </div>
  );
};

export default Layout;
