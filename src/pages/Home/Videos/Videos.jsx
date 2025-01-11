import { useRef, useState } from "react";
import ReactPlayer from "react-player";
import { FaPlay } from "react-icons/fa";
import { FaPause } from "react-icons/fa";
import "./Video.css";

const Videos = () => {
  const videoData = [
    {
      url: "https://www.youtube.com/watch?v=Jo3ga3Vk6vQ",
      title: "Training Session 1",
      description: "An introduction to advanced training techniques.",
    },
    {
      url: "https://youtu.be/LhYtcadR9nw?si=lf3frM-3F-dFs88Q",
      title: "Training Session 2",
      description: "Mastering the basics of skill development.",
    },
    {
      url: "https://youtu.be/JgkZhGNSn8Q?si=Cjc8vlvFC_p8w9iX",
      title: "Training Session 3",
      description: "Tips and tricks for effective performance.",
    },
    {
      url: "https://youtu.be/JhSZw8fiTLc?si=Mjptm2YmfvguUwZI",
      title: "Training Session 4",
      description: "How to stay consistent and motivated.",
    },
  ];

  const videoRefs = videoData.map(() => useRef(null));
  const [hoveredVideoIndex, setHoveredVideoIndex] = useState(-1);
  const [playingIndex, setPlayingIndex] = useState(-1);

  const handleVideoHover = (index) => {
    setHoveredVideoIndex(index);
    if (videoRefs[index] && videoRefs[index].current) {
      videoRefs[index].current.seekTo(0);
    }
  };

  const handleVideoLeave = () => {
    setHoveredVideoIndex(-1);
  };

  const handlePlayToggle = (index) => {
    if (playingIndex === index) {
      setPlayingIndex(-1); // Pause the current video
    } else {
      setPlayingIndex(index); // Play the clicked video
    }
  };

  return (
    <div className="bg-gray-50 py-16">
      <h2 className="text-4xl font-extrabold text-gray-800 mb-8 capitalize text-center">
        Training Videos
      </h2>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-8 px-4 lg:px-8">
        {videoData.map((video, index) => (
          <div
            key={index}
            className="relative overflow-hidden rounded-lg shadow-lg transition-all duration-300 transform hover:scale-105 hover:shadow-2xl bg-white"
            onMouseEnter={() => handleVideoHover(index)}
            onMouseLeave={handleVideoLeave}
          >
            {/* Video Container */}
            <div className="relative w-full h-60 sm:h-72 md:h-80 lg:h-96">
              <ReactPlayer
                url={video.url}
                playing={playingIndex === index}
                controls={playingIndex === index}
                ref={videoRefs[index]}
                width="100%"
                height="100%"
                className="rounded-lg"
              />
              {/* Overlay Play/Pause Icon */}
              {hoveredVideoIndex !== index && playingIndex !== index && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 cursor-pointer"
                  onClick={() => handlePlayToggle(index)}
                >
                  <FaPlay className="text-white text-5xl opacity-80" />
                </div>
              )}
              {hoveredVideoIndex === index && playingIndex !== index && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
                  onClick={() => handlePlayToggle(index)}
                >
                  <FaPlay className="text-white text-4xl opacity-90" />
                </div>
              )}
              {playingIndex === index && (
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 cursor-pointer"
                  onClick={() => handlePlayToggle(index)}
                >
                  <FaPause className="text-white text-4xl opacity-90" />
                </div>
              )}
            </div>
            {/* Video Title and Description */}
            <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white text-center">
              <h3 className="text-lg font-semibold">{video.title}</h3>
              <p className="text-sm mt-1">{video.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Videos;
