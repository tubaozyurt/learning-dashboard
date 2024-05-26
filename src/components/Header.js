import React from 'react';

const Header = () => {
  return (
    <div className="flex justify-between items-center p-4 bg-blue-500 text-white">
      <h1 className="text-xl">Dashboard</h1>
      <div>
        <button className="bg-yellow-500 px-4 py-2 rounded mr-2">Create New Team</button>
        <button className="bg-yellow-500 px-4 py-2 rounded">Add New Employee to a Team</button>
      </div>
    </div>
  );
};

export default Header;
