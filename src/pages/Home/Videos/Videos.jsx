import { useRef, useState } from "react";
import ReactPlayer from "react-player";

const Videos = () => {
  const videoUrls = [
    "https://www.youtube.com/watch?v=Jo3ga3Vk6vQ",
    "https://youtu.be/LhYtcadR9nw?si=lf3frM-3F-dFs88Q",
    "https://youtu.be/JgkZhGNSn8Q?si=Cjc8vlvFC_p8w9iX",
    "https://youtu.be/JhSZw8fiTLc?si=Mjptm2YmfvguUwZI",
  ];

  const videoRefs = videoUrls.map(() => useRef(null));
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(-1);

  const handleVideoHover = (index) => {
    setHoveredVideoIndex(index);
    if (videoRefs[index] && videoRefs[index].current) {
      videoRefs[index].current.seekTo(0);
      videoRefs[index].current.getInternalPlayer().playVideo();
    }
  };

  const handleVideoLeave = (index) => {
    setHoveredVideoIndex(-1);
    if (videoRefs[index] && videoRefs[index].current) {
      videoRefs[index].current.getInternalPlayer().pauseVideo();
    }
  };

  return (
    <div className="grid grid-cols-2 gap-8 my-16">
      {videoUrls.map((url, index) => (
        <div
          className="youtube-player-container"
          key={index}
          onMouseEnter={() => handleVideoHover(index)}
          onMouseLeave={() => handleVideoLeave(index)}
        >
          <ReactPlayer url={url} controls ref={videoRefs[index]} />
        </div>
      ))}
    </div>
  );
};

export default Videos;
