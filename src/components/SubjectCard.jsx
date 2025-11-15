
import { Link } from "react-router-dom";

export default function SubjectCard({ batch }) {
  return (
    <Link to={`/batch/${batch.id}`} className="bg-white shadow rounded p-4 hover:shadow-lg transition">
      <img src={batch.thumbnail} alt={batch.name} className="w-full h-40 object-cover rounded" />
      <h3 className="mt-2 font-bold text-lg">{batch.name}</h3>
    </Link>
  );
}
