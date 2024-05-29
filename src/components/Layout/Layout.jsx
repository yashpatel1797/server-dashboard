import React from 'react';
import Header from './Header';
import Sidebar from './Sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <div className="min-h-screen flex flex-col md:flex-row">
      <Sidebar />
        <div className="flex-1 flex flex-col ml-0 md:ml-64">
          <main className="flex-1 p-6 mt-16">{children}</main>
        </div>
      </div>
    </>
     );
};

export default Layout;
