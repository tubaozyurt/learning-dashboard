import React, { useRef, useEffect } from 'react';
import Chart from 'chart.js/auto';

const Skills = ({ skills }) => {
  const chartContainer = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {
    if (chartInstance.current) {
      chartInstance.current.destroy(); // Önceki grafik nesnesini yok et
    }

    // Yeni grafik nesnesini oluştur
    const ctx = chartContainer.current.getContext('2d');
    chartInstance.current = new Chart(ctx, {
      type: 'bar', // Grafik türü (ör. bar, line, pie)
      data: {
        labels: skills.map((skill) => skill.skill),
        datasets: [{
          label: 'Number of Employees',
          data: skills.map((skill) => skill.employees),
          backgroundColor: 'rgba(54, 162, 235, 0.5)',
          borderColor: 'rgba(54, 162, 235, 1)',
          borderWidth: 1,
        }],
      },
      options: {
        scales: {
          y: {
            beginAtZero: true,
          },
        },
      },
    });
  }, [skills]);

  return (
    <div className=" bg-white shadow rounded mb-4">
  <h2 className="text-2xl mb-4">Skills in Development</h2>
  <div className="border border-gray-200 rounded w-full h-80">
    <canvas  ref={chartContainer}></canvas>
  </div>
  </div>
  );
};

export default Skills;
