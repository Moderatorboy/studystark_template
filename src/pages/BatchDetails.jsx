
import { useParams, Link } from "react-router-dom";
import { batches } from "../data/batches";

export default function BatchDetails() {
  const { batchId } = useParams();
  const batch = batches.find((b) => b.id === batchId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{batch.name}</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {batch.chapters.map((chapter) => (
          <Link
            key={chapter.id}
            to={`/lessons/${batch.id}/${chapter.id}`}
            className="bg-gray-100 p-4 rounded hover:bg-gray-200"
          >
            {chapter.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
