export const fetchDashboardData = async () => {
  const response = await fetch('https://demotrainiq.com/case/dashboard');
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};
