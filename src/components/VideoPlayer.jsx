
export default function VideoPlayer({ videoUrl }) {
  return (
    <div className="w-full aspect-video">
      <iframe
        src={videoUrl}
        frameBorder="0"
        allow="autoplay; encrypted-media"
        allowFullScreen
        title="Lecture Video"
        className="w-full h-full rounded"
      ></iframe>
    </div>
  );
}
