import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

const spendByProviderData = [
  { name: "OpenAI", value: 30 },
  { name: "Google", value: 30 },
  { name: "DeepStack", value: 12 },
  { name: "Anthropic", value: 15 },
  { name: "Hugging Face", value: 12.6 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#FF4560"];

const SpendByProviderChart = () => (
  <div className="w-full h-[300px] md:h-[400px]">
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={spendByProviderData}
          dataKey="value"
          nameKey="name"
          cx="50%"
          cy="50%"
          outerRadius="80%"
          fill="#8884d8"
          label
        >
          {spendByProviderData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  </div>
);

export default SpendByProviderChart;
