import Link from "next/link";
import Navbar from "../components/Navbar";
import chapters from "../data/chapters.json";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-3xl font-bold mb-4">Chapter Viewer</h1>
        <ul className="space-y-2">
          {chapters.map((chapter) => (
            <li key={chapter.id}>
              <Link href={`/chapter/${chapter.id}`}>
                <span className="text-blue-600 hover:underline cursor-pointer">
                  {chapter.title}
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}

