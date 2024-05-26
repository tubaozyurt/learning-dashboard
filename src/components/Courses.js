import React from 'react';

const Courses = ({ title, courses }) => {
  if (!courses || !Array.isArray(courses)) {
    return <div>No course data available.</div>;
  }

  return (
    <div className="p-4 bg-white shadow rounded mb-4">
      <h2 className="text-2xl mb-4">{title}</h2>
      <ul>
        {courses.map((course) => (
          <li key={course.title} className="flex items-start justify-between border-b border-gray-200 py-4">
            <div className="flex items-center">
              {/* Icon and color according to course status */}
              <div className={`h-6 w-6 mr-4 ${course.status === 'completed' ? 'bg-green-500' : course.status === 'pending' ? 'bg-yellow-500' : 'bg-gray-500'} rounded-full flex items-center justify-center text-white text-sm font-semibold`}>
                {course.status === 'completed' ? '✓' : course.status === 'pending' ? '•' : '-'}
              </div>
              <div>
                <h3 className="text-lg font-semibold">{course.title}</h3>
                <p className="text-sm text-gray-600">{course.description}</p>
              </div>
            </div>
            <div className="text-right">
              <p className="text-xs text-gray-500">Assigned to: {course.assigned_to}</p>
              <p className="text-xs text-gray-500">Due Date: {course.due_date}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Courses;
