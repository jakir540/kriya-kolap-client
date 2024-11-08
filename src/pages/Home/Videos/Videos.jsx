import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import "./Video.css";

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
    }
  };

  const handleVideoLeave = () => {
    setHoveredVideoIndex(-1);
  };

  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-800 mb-4 capitalize text-center">
        Training Videos
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 my-16 px-4 lg:px-8">
        {videoUrls.map((url, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-gray-900"
            onMouseEnter={() => handleVideoHover(index)}
            onMouseLeave={handleVideoLeave}
          >
            <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96">
              <ReactPlayer
                url={url}
                controls
                ref={videoRefs[index]}
                width="100%"
                height="100%"
                className="rounded-lg"
              />
              {/* Overlay Play Icon */}
              {hoveredVideoIndex !== index && (
                <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60">
                  <FaPlay className="text-white text-5xl opacity-80" />
                </div>
              )}
            </div>
            {/* Video title or description overlay */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white text-center">
              <h3 className="text-lg font-semibold">Video {index + 1}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
