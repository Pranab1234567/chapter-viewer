import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import chapters from '../data/chapters.json';
import Link from 'next/link';

const chartData = chapters.map((chapter) => ({
  name: chapter.title,
  words: chapter.content.split(' ').length,
}));

export default function Analytics() {
  return (
    <div className="container">
      <h1>📊 Chapter Analytics</h1>
      <div style={{ width: '100%', height: 300 }}>
        <ResponsiveContainer>
          <BarChart data={chartData} layout="vertical" margin={{ left: 40 }}>
            <XAxis type="number" />
            <YAxis type="category" dataKey="name" width={150} />
            <Tooltip />
            <Bar dataKey="words" fill="#0070f3" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <Link href="/" style={{ display: 'inline-block', marginTop: '20px' }}>← Back to Chapters</Link>
    </div>
  );
}