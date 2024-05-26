import React from 'react';

const TopEmployees = ({ topEmployees }) => {
  if (!topEmployees || !Array.isArray(topEmployees)) {
    return <div>No top employee data available.</div>;
  }

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-2xl mb-4">Top Employees</h2>
      <ul>
        {topEmployees.map((employee) => (
          <li key={employee.email} className="flex items-center justify-between border-b border-gray-200 py-4">
            <div className="flex items-center">
              {/* Profile picture */}
              <div>
                <h3 className="text-lg font-semibold">{employee.name}</h3>
                <p className="text-sm text-gray-600">{employee.title}</p>
              </div>
            </div>
            {/* Reward icon and score */}
            <div className="text-right">
              <span className="text-yellow-500 mr-2">🏆</span>
              <span className="font-semibold">{employee.current_score}</span>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TopEmployees;
