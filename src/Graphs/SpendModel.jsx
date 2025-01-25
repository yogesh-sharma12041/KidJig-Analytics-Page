import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";

const spendByModelData = [
  { model: "GPT-4", spend: 30 },
  { model: "Palm 2", spend: 30 },
  { model: "Custom Vision", spend: 12 },
  { model: "Claude 2", spend: 15 },
  { model: "Bloom", spend: 12.6 },
];

const SpendByModelChart = () => (
  <div className="w-full h-[300px] md:h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={spendByModelData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="model" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="spend" fill="#8884d8" />
      </BarChart>
    </ResponsiveContainer>
  </div>
);

export default SpendByModelChart;
