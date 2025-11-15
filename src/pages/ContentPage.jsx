
import { useParams } from "react-router-dom";
import { batches } from "../data/batches";
import VideoPlayer from "../components/VideoPlayer";

export default function ContentPage() {
  const { batchId, chapterId, lectureId } = useParams();
  const batch = batches.find((b) => b.id === batchId);
  const chapter = batch.chapters.find((c) => c.id === chapterId);
  const lecture = chapter.lectures.find((l) => l.id === lectureId);

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">{lecture.title}</h1>
      {lecture.type === "video" && <VideoPlayer videoUrl={lecture.videoUrl} />}
      <div className="mt-6 space-y-3">
        <a href={lecture.notes} target="_blank" className="text-blue-600 underline">Notes PDF</a>
        <a href={lecture.dppPdf} target="_blank" className="text-blue-600 underline">DPP PDF</a>
        <a href={lecture.dppQuiz} target="_blank" className="text-blue-600 underline">DPP Quiz</a>
      </div>
    </div>
  );
}
