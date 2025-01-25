import React, { useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const apiUsageData = [
  { name: "OpenAI", usage: 1500, cost: 30 },
  { name: "Google", usage: 1000, cost: 30 },
  { name: "DeepStack", usage: 800, cost: 12 },
  { name: "Anthropic", usage: 600, cost: 15 },
  { name: "Hugging Face", usage: 700, cost: 12.6 },
];

const APIUsageCostChart = () => {
  const [time, setTime] = useState("By Month");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [selectedAPIs, setSelectedAPIs] = useState(
    apiUsageData.map((api) => api.name) // All APIs are selected initially
  );
  const [isTooltipOpen, setIsTooltipOpen] = useState(false);
  const [selectedMonth, setSelectedMonth] = useState("January 2025");

  const handleToggleAPI = (apiName) => {
    setSelectedAPIs((prev) =>
      prev.includes(apiName)
        ? prev.filter((api) => api !== apiName)
        : [...prev, apiName]
    );
  };

  const isDataAvailable =
    selectedMonth !== "December 2024" && selectedMonth !== "November 2024";

  const filteredData = apiUsageData.filter((api) =>
    selectedAPIs.includes(api.name)
  );

  const totalCost = filteredData.reduce((sum, api) => sum + api.cost, 0);

  return (
    <div className="p-14 relative">
      <div className="text-center">
        <div className="flex flex-col">
          <h2 className="font-bold text-xl">API Usage & Cost</h2>
          <p className="text-[#949FAF]">
            Total Cost: <span className="font-bold">${totalCost.toFixed(2)}</span>
          </p>
        </div>
        <select
          value={time}
          onChange={(e) => setTime(e.target.value)}
          name="time"
          id="time"
          className="h-[30px] border-1 m-2"
        >
          <option value="By Month">By Month</option>
          <option value="Custom Data">Custom Data</option>
          <option value="Last 7 Days">Last 7 Days</option>
        </select>
        {time === "By Month" ? (
          <select
            value={selectedMonth}
            onChange={(e) => setSelectedMonth(e.target.value)}
            className="h-[30px] border-1"
          >
            <option value="January 2025">January 2025</option>
            <option value="December 2024">December 2024</option>
            <option value="November 2024">November 2024</option>
          </select>
        ) : time === "Custom Data" ? (
          <div className="flex gap-2">
            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              dateFormat="yyyy/MM/dd"
              className="border h-[30px] rounded"
              placeholderText="Start Date"
            />
            <DatePicker
              selected={endDate}
              onChange={(date) => setEndDate(date)}
              dateFormat="yyyy/MM/dd"
              className="border h-[30px] rounded"
              placeholderText="End Date"
            />
          </div>
        ) : null}
        <div className="relative inline-block">
          <button
            onClick={() => setIsTooltipOpen((prev) => !prev)}
            className="bg-white text-black hover:cursor-pointer ml-2 px-6 border-1"
          >
            All API Keys
          </button>
          {isTooltipOpen && (
            <div className="absolute z-50 mt-2 bg-white border border-gray-300 rounded shadow-lg p-4 w-[200px]">
              <h2 className="text-sm font-bold mb-2">Toggle APIs</h2>
              {apiUsageData.map((api) => (
                <div key={api.name} className="flex items-center gap-2 mb-2">
                  <input
                    type="checkbox"
                    id={api.name}
                    checked={selectedAPIs.includes(api.name)}
                    onChange={() => handleToggleAPI(api.name)}
                  />
                  <label htmlFor={api.name} className="text-sm text-gray-700">
                    {api.name}
                  </label>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="w-full h-[300px] md:h-[400px]">
        {isDataAvailable && filteredData.length > 0 ? (
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={filteredData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line
                type="monotone"
                dataKey="usage"
                stroke="#8884d8"
                activeDot={{ r: 8 }}
              />
              <Line type="monotone" dataKey="cost" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        ) : (
          <div className="flex items-center justify-center h-full text-gray-500">
            Data is not available
          </div>
        )}
      </div>
    </div>
  );
};

export default APIUsageCostChart;
