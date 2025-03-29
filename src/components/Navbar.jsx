import React from 'react';

function Navbar() {
  return (
    <nav className="bg-blue-600 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-center h-16">
          <div className="flex-shrink-0">
            <h1 className="text-4xl font-bold">Kanban Board</h1>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar; 