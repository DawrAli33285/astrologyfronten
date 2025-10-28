import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const dummyPlanets = ["Sun", "Moon", "Mercury", "Venus", "Mars"];

const TransitGraph = () => {
  const [formData, setFormData] = useState({
    startDate: "",
    endDate: "",
    startTime: "",
    endTime: "",
    location: "",
  });

  const [chartData, setChartData] = useState([]);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const generateDummyData = () => {
    const data = [];
    const days = 10; // dummy range
    for (let i = 0; i < days; i++) {
      const dayData = { day: `Day ${i + 1}` };
      dummyPlanets.forEach((planet) => {
        dayData[planet] = Math.floor(Math.random() * 360); // random longitude
      });
      data.push(dayData);
    }
    return data;
  };

  const handleCalculate = () => {
    setLoading(true);
    setTimeout(() => {
      setChartData(generateDummyData());
      setLoading(false);
    }, 800);
  };

  return (
    <div className="flex flex-col items-center p-4 sm:p-6 md:p-10 bg-white rounded-2xl shadow-lg max-w-3xl mx-auto mt-6">
      <h2 className="text-2xl font-semibold mb-4 text-gray-700">
        Transit Graph
      </h2>

   
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600">
            Start Date
          </label>
          <input
            type="date"
            name="startDate"
            value={formData.startDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600">
            End Date
          </label>
          <input
            type="date"
            name="endDate"
            value={formData.endDate}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600">
            Start Time
          </label>
          <input
            type="time"
            name="startTime"
            value={formData.startTime}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-1 text-gray-600">
            End Time
          </label>
          <input
            type="time"
            name="endTime"
            value={formData.endTime}
            onChange={handleChange}
            className="w-full border rounded-lg p-2"
          />
        </div>
        <div className="sm:col-span-2">
          <label className="block text-sm font-medium mb-1 text-gray-600">
            Location (city, region, country)
          </label>
          <input
            type="text"
            name="location"
            value={formData.location}
            onChange={handleChange}
            placeholder="e.g. New York City, New York"
            className="w-full border rounded-lg p-2"
          />
        </div>
      </div>

     
      <button
        onClick={handleCalculate}
        disabled={loading}
        className="mt-5 px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-500 to-pink-500 text-white font-medium hover:opacity-90 transition disabled:opacity-50"
      >
        {loading ? "Calculating..." : "Calculate"}
      </button>


      {chartData.length > 0 && (
        <div className="w-full h-64 sm:h-80 mt-8">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={chartData}>
              <XAxis dataKey="day" />
              <YAxis domain={[0, 360]} />
              <Tooltip />
              <Legend />
              {dummyPlanets.map((planet, i) => (
                <Line
                  key={planet}
                  type="monotone"
                  dataKey={planet}
                  stroke={`hsl(${(i * 70) % 360}, 70%, 50%)`}
                  strokeWidth={2}
                  dot={false}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </div>
      )}
    </div>
  );
};

export default TransitGraph;
