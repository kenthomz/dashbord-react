import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const SalesLineGraph = () => {
  // Sales data for the chart
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September'], // X-axis labels (months)
    datasets: [
      {
        label: 'Sales', // Label for the dataset
        data: [3000, 4500, 3200, 5100, 4700, 5300, 6000, 5800, 6200], // Data points for sales (e.g., monthly sales in dollars)
        fill: false, // No fill under the line
        borderColor: '#4B58D2', // Line color (blue)
        tension: 0.1, // Smooth curve between points
      },
    ],
  };

  // Chart configuration options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true, // Display the legend
        position: 'top',
      },
      title: {
        display: true,
        text: 'Monthly Sales Statistics', // Title of the chart
      },
    },
    scales: {
      y: {
        beginAtZero: true, // Y-axis starts at zero
        title: {
          display: true,
          text: 'Sales (in USD)', // Label for Y-axis
        },
      },
      x: {
        title: {
          display: true,
          text: 'Months', // Label for X-axis
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SalesLineGraph;
