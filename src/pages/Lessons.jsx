
import { useParams, Link } from "react-router-dom";
import { batches } from "../data/batches";

export default function Lessons() {
  const { batchId, chapterId } = useParams();
  const batch = batches.find((b) => b.id === batchId);
  const chapter = batch.chapters.find((c) => c.id === chapterId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{chapter.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {chapter.lectures.map((lec) => (
          <Link
            key={lec.id}
            to={`/content/${batch.id}/${chapter.id}/${lec.id}`}
            className="bg-gray-100 p-4 rounded hover:bg-gray-200"
          >
            {lec.title}
          </Link>
        ))}
      </div>
    </div>
  );
}
