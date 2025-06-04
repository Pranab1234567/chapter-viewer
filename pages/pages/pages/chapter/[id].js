
import { useRouter } from "next/router";
import Navbar from "../../components/Navbar";
import chapters from "../../data/chapters.json";

export default function ChapterDetail() {
  const router = useRouter();
  const { id } = router.query;
  const chapter = chapters.find((ch) => ch.id === parseInt(id));

  if (!chapter) return <p className="p-6">Chapter not found.</p>;

  return (
    <div>
      <Navbar />
      <main className="p-6">
        <h1 className="text-2xl font-bold">{chapter.title}</h1>
        <p className="mt-4">{chapter.description}</p>
      </main>
    </div>
  );
}
