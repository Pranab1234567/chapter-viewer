import { useRouter } from 'next/router';
import chapters from '../../data/chapters.json';

export default function Chapter() {
  const router = useRouter();
  const { id } = router.query;

  const chapter = chapters.find((c) => c.id === Number(id));

  if (!chapter) return <p>Loading or chapter not found...</p>;

  return (
    <div className="container">
      <h1>{chapter.title}</h1>
      <p style={{ lineHeight: 1.6, fontSize: '16px' }}>{chapter.content}</p>
      <a href="/" style={{ display: 'inline-block', marginTop: '20px' }}>← Back to chapters</a>
    </div>
  );
}