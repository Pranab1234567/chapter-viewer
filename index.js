import { useState } from 'react';
import chapters from '../data/chapters.json';

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredChapters = chapters.filter((chapter) =>
    chapter.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Chapter List</h1>
      <input
        type="text"
        placeholder="Search chapters..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          width: '100%',
          padding: '10px',
          fontSize: '16px',
          marginBottom: '20px',
          borderRadius: '6px',
          border: '1px solid #ccc'
        }}
      />
      <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
        {filteredChapters.map((chapter) => (
          <li key={chapter.id} style={{ marginBottom: '15px' }}>
            <a href={`/chapter/${chapter.id}`} style={{ fontSize: '18px', fontWeight: 'bold' }}>
              {chapter.title}
            </a>
          </li>
        ))}
      </ul>
      {filteredChapters.length === 0 && (
        <p style={{ color: 'gray' }}>No chapters found for "{searchTerm}"</p>
      )}
    </div>
  );
}