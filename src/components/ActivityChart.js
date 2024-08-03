import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const generateData = (type) => {
  const data = {
    hourly: Array.from({ length: 24 }, () => Math.floor(Math.random() * 15000)),
    daily: Array.from({ length: 30 }, () => Math.floor(Math.random() * 15000)),
    weekly: Array.from({ length: 7 }, () => Math.floor(Math.random() * 15000)),
    monthly: Array.from({ length: 12 }, () =>
      Math.floor(Math.random() * 15000)
    ),
  };
  return data[type] || data.hourly;
};

const ActivityChart = () => {
  const [selectedType, setSelectedType] = useState("hourly");

  const handleChange = (event) => {
    setSelectedType(event.target.value);
  };

  const data = {
    labels:
      selectedType === "hourly"
        ? [...Array(24).keys()].map((i) => `${i + 1}`)
        : selectedType === "daily"
        ? [...Array(30).keys()].map((i) => `${i + 1}`)
        : selectedType === "weekly"
        ? [...Array(7).keys()].map((i) => `${i + 1}`)
        : [...Array(12).keys()].map((i) => `${i + 1}`),
    datasets: [
      {
        data: generateData(selectedType),
        backgroundColor: "#609fff",
        borderWidth: 2,
        borderRadius: 20,
        borderSkipped: false,
      },
    ],
  };

  const options = {
    maintainAspectRatio: false,
    responsive: true,
    plugins: {
      legend: {
        display: false, // Disable the legend
      },
      tooltip: {
        callbacks: {
          label: (context) => `Value: ${context.raw}`,
        },
      },
    },
    scales: {
      x: {
        beginAtZero: true,
        grid: {
          display: false,
        },
      },
      y: {
        beginAtZero: true,
        grid: {
          display: true,
        },
      },
    },
  };

  return (
    <div
      className="p-4 bg-gray-800 text-white rounded"
      style={{ height: "223px" }}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold">Activity</h2>
        <select
          value={selectedType}
          onChange={handleChange}
          className="bg-gray-700 text-white border border-gray-600 rounded-full p-2"
        >
          <option value="hourly">Hourly</option>
          <option value="daily">Daily</option>
          <option value="weekly">Weekly</option>
          <option value="monthly">Monthly</option>
        </select>
      </div>
      <div className="relative h-[85%]">
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default ActivityChart;
