import Link from 'next/link';

export default function Navbar() {
  return (
    <nav style={{
      background: '#0070f3',
      padding: '15px 20px',
      color: 'white',
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center'
    }}>
      <Link href="/" style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>
        Chapter Viewer
      </Link>
      <Link href="/analytics" style={{ color: 'white', fontSize: '16px' }}>
        Analytics
      </Link>
    </nav>
  );
}