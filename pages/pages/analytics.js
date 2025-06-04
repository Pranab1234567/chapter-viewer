import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Navbar from "../components/Navbar";

const data = [
  { name: "Views", value: 120 },
  { name: "Reads", value: 80 },
  { name: "Likes", value: 50 },
];

export default function Analytics() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold mb-4">Analytics</h1>
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={data}>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Bar dataKey="value" fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      </main>
    </div>
  );
}
