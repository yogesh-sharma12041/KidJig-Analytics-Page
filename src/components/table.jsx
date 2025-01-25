import React, { useState } from "react";
import { RiMenuFill } from "react-icons/ri";
import dummyAnalyticsData from "../daummy-analytics-data";

const Table = () => {
  const [month, setMonth] = useState("");
  const [sortedData, setSortedData] = useState([...dummyAnalyticsData]);
  const [sortConfig, setSortConfig] = useState({ key: null, direction: "asc" });
  const [visibleColumns, setVisibleColumns] = useState([
    "provider",
    "model",
    "requests",
    "costPerRun",
    "totalCost",
    "apiKey",
  ]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const headers = [
    { key: "provider", label: "Provider" },
    { key: "model", label: "Model" },
    { key: "requests", label: "Requests" },
    { key: "costPerRun", label: "Cost/Run ($)" },
    { key: "totalCost", label: "Total Cost ($)" },
    { key: "apiKey", label: "API Key" },
  ];

  const handleSort = (key) => {
    let direction = "asc";
    if (sortConfig.key === key && sortConfig.direction === "asc") {
      direction = "desc";
    }

    const sorted = [...dummyAnalyticsData].sort((a, b) => {
      if (a[key] < b[key]) return direction === "asc" ? -1 : 1;
      if (a[key] > b[key]) return direction === "asc" ? 1 : -1;
      return 0;
    });

    setSortedData(sorted);
    setSortConfig({ key, direction });
  };

  const handleToggleColumn = (key) => {
    setVisibleColumns((prev) =>
      prev.includes(key) ? prev.filter((col) => col !== key) : [...prev, key]
    );
  };

  const isDataAvailable = month !== "Dec 2024" && month !== "Nov 2024";

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 m-4">
        <h2 className="font-bold text-lg sm:text-xl">Usage Details</h2>
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <select
            className="border border-[#EEE8DD] p-2 rounded-md w-full sm:w-auto"
            value={month}
            onChange={(e) => setMonth(e.target.value)}
          >
            <option value="">Select a month</option>
            <option value="Jan 2025">January 2025</option>
            <option value="Dec 2024">December 2024</option>
            <option value="Nov 2024">November 2024</option>
          </select>
          <RiMenuFill
            size={28}
            className="cursor-pointer text-gray-700 hover:text-gray-900 transition-colors duration-200"
            onClick={() => setIsSidebarOpen(true)}
          />
        </div>
      </div>

      <div className="w-full overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm">
        {isDataAvailable ? (
          <div className="w-full overflow-x-auto">
            <table className="w-full min-w-[600px] border-collapse">
              <thead className="bg-gray-50">
                <tr>
                  {headers.map(
                    ({ key, label }) =>
                      visibleColumns.includes(key) && (
                        <th
                          key={key}
                          className="sticky top-0 border-b border-gray-200 bg-gray-50 px-4 sm:px-6 py-3 text-left text-xs sm:text-sm font-medium text-gray-500 hover:bg-gray-100 cursor-pointer transition-colors duration-200"
                        >
                          <button
                            onClick={() => handleSort(key)}
                            className="flex items-center gap-1"
                          >
                            {label}
                            {sortConfig.key === key
                              ? sortConfig.direction === "asc"
                                ? " ▲"
                                : " ▼"
                              : ""}
                          </button>
                        </th>
                      )
                  )}
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {sortedData.map((row, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition-colors duration-200"
                  >
                    {visibleColumns.includes("provider") && (
                      <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">
                        {row.provider}
                      </td>
                    )}
                    {visibleColumns.includes("model") && (
                      <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">
                        {row.model}
                      </td>
                    )}
                    {visibleColumns.includes("requests") && (
                      <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">
                        {row.requests}
                      </td>
                    )}
                    {visibleColumns.includes("costPerRun") && (
                      <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">
                        {row.costPerRun}
                      </td>
                    )}
                    {visibleColumns.includes("totalCost") && (
                      <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">
                        {row.totalCost}
                      </td>
                    )}
                    {visibleColumns.includes("apiKey") && (
                      <td className="whitespace-nowrap px-4 sm:px-6 py-3 text-xs sm:text-sm text-gray-900">
                        {row.apiKey}
                      </td>
                    )}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <div className="p-6 text-center text-gray-500">
            <p>Data is not available for the selected month.</p>
          </div>
        )}
      </div>

      {/* Sidebar */}
      {isSidebarOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div
            className="bg-white w-full sm:w-[300px] h-full p-6 shadow-lg transform transition-transform duration-300 ease-in-out"
          >
            <h2 className="text-lg font-bold mb-4">Toggle Columns</h2>
            <button
              className="text-gray-500 hover:text-gray-700 mb-6"
              onClick={() => setIsSidebarOpen(false)}
            >
              Close
            </button>
            <div className="flex flex-col gap-4">
              {headers.map(({ key, label }) => (
                <div key={key} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    id={key}
                    checked={visibleColumns.includes(key)}
                    onChange={() => handleToggleColumn(key)}
                  />
                  <label htmlFor={key} className="text-sm text-gray-700">
                    {label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Table;
