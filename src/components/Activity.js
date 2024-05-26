import React from 'react';
import { Line } from 'react-chartjs-2';

const Activity = ({ activityHours }) => {
  const data = {
    labels: activityHours.map(activity => activity.date),
    datasets: [
      {
        label: 'Hours',
        data: activityHours.map(activity => activity.hours),
        borderColor: 'rgba(75,192,192,1)',
        fill: false,
      },
      {
        label: 'Lessons Taken',
        data: activityHours.map(activity => activity.lessons_taken),
        borderColor: 'rgba(153,102,255,1)',
        fill: false,
      },
      {
        label: 'Exams Completed',
        data: activityHours.map(activity => activity.exams_completed),
        borderColor: 'rgba(255,159,64,1)',
        fill: false,
      },
    ],
  };

  return (
    <div className="bg-white p-4 rounded shadow mb-4 w-full h-80">
      <h3 className="text-xl mb-4">Activity</h3>
      <Line data={data} />
    </div>
  );
};

export default Activity;
