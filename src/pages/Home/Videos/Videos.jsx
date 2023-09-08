import { useRef, useState } from "react";

import ReactPlayer from "react-player";

const Videos = () => {
  const videoUrl = "https://www.youtube.com/watch?v=Jo3ga3Vk6vQ";
  const playerRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);

  const handleVideoHover = () => {
    setIsHovered(true);
    if (playerRef && playerRef.current) {
      playerRef.current.seekTo(0);
      playerRef.current.getInternalPlayer().playVideo();
    }
  };

  const handleVideoLeave = () => {
    setIsHovered(false);

    if (playerRef && playerRef.current) {
      playerRef.current.getInternalPlayer().pauseVideo();
    }
  };

  return (
    <div className="lg:flex justify-between items-center my-16">
      <div
        className="youtube-player-container"
        onMouseEnter={handleVideoHover}
        onMouseLeave={handleVideoLeave}
      >
        <ReactPlayer url={videoUrl} controls ref={playerRef} />
      </div>

      <div className="r">
        <h3 className="text-3xl text-center mb-8">
          Make your way to complete health
        </h3>
        <p className="p-3 text-center">
          🌿 Holistic Wellness Philosophy: We embrace the concept that wellness
          is more than just physical health. Our approach considers the
          <br />
          <br />
          🧘‍♀️ Mindful Movement & Yoga: Experience the power of mindful movement
          through our rejuvenating yoga classes.
        </p>
      </div>
    </div>
  );
};

export default Videos;
