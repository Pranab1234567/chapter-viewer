import Navbar from "../../components/Navbar";
import chapters from "../../data/chapters.json";
import { useRouter } from "next/router";

export default function ChapterPage() {
  const router = useRouter();
  const { id } = router.query;
  const chapter = chapters.find((ch) => ch.id.toString() === id);

  if (!chapter) return <div>Chapter not found.</div>;

  return (
    <div>
      <Navbar />
      <h1>{chapter.title}</h1>
      <p>{chapter.content}</p>
    </div>
  );
}
