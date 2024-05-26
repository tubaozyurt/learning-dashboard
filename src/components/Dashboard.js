import React, { useEffect, useState } from 'react';
import { fetchDashboardData } from '../api';
import Header from './Header';
import Teams from './Teams';
import Activity from './Activity';
import Courses from './Courses';
import Skills from './Skills';
import TopEmployees from './TopEmployees';

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const result = await fetchDashboardData();
        setData(result.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="min-h-screen bg-gray-200">
      <Header />
      <TopEmployees topEmployees={data.top_employees} />
      <Activity activityHours={data.activity_hours} />    
      <Courses title="In Progress Courses" courses={data.in_progress_courses} />
      <Courses title="Upcoming Courses" courses={data.upcoming_courses} />
      <Skills skills={data.skills_in_development} />
      <Teams teams={data.teams} />      
    </div>
  );
};

export default Dashboard;
