
import { batches } from "../data/batches";
import SubjectCard from "../components/SubjectCard";

export default function Home() {
  return (
    <div className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {batches.map((batch) => (
        <SubjectCard key={batch.id} batch={batch} />
      ))}
    </div>
  );
}
