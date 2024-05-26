import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';


const Teams = ({ teams }) => {
  if (!teams || !Array.isArray(teams)) {
    return <div>No team data available.</div>;
  }

  return (
    <div className="p-4">
      <h2 className="text-2xl mb-4">Teams</h2>
      <div className="grid grid-cols-2 gap-4">
        {teams.map((team) => (
          <TeamCard key={team.title} team={team} />
        ))}
      </div>
    </div>
  );
};

const TeamCard = ({ team }) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (!team) return;

    if (chartInstance.current) {
      chartInstance.current.destroy();
    }

    const ctx = chartRef.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: {
        labels: team.employees.map((employee) => employee.name),
        datasets: [
          {
            label: 'Score',
            data: team.employees.map((employee) => employee.current_score),
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
          },
        ],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [team]);

  return (
    <div className="bg-white p-4 rounded shadow mb-4">
      <h3 className="text-xl">{team.title}</h3>
      <p>{team.description}</p>
      <div className="mt-4">
        <canvas ref={chartRef} className="w-full h-24 md:h-36 lg:h-48"/>
      </div>
      <h4 className="text-lg mt-4">Employees:</h4>
      <ul>
        {team.employees.map((employee) => (
          <li key={employee.email}>
            {employee.name} - {employee.title} - Score: {employee.current_score}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Teams;
