import { useState } from "react";
import ReactPlayer from "react-player";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import { FaPlay } from "react-icons/fa";

const Videos = () => {
  const [videos, setVideos] = useState([
    {
      id: "1",
      url: "https://www.youtube.com/watch?v=Jo3ga3Vk6vQ",
      title: "Training Session 1",
      description: "An introduction to advanced training techniques.",
    },
    {
      id: "2",
      url: "https://youtu.be/LhYtcadR9nw?si=lf3frM-3F-dFs88Q",
      title: "Training Session 2",
      description: "Mastering the basics of skill development.",
    },
    {
      id: "3",
      url: "https://youtu.be/JgkZhGNSn8Q?si=Cjc8vlvFC_p8w9iX",
      title: "Training Session 3",
      description: "Tips and tricks for effective performance.",
    },
    {
      id: "4",
      url: "https://youtu.be/JhSZw8fiTLc?si=Mjptm2YmfvguUwZI",
      title: "Training Session 4",
      description: "How to stay consistent and motivated.",
    },
  ]);

  const [currentVideo, setCurrentVideo] = useState(videos[0]);

  const handleDragEnd = (result) => {
    if (!result.destination) return;
    const reorderedVideos = [...videos];
    const [movedItem] = reorderedVideos.splice(result.source.index, 1);
    reorderedVideos.splice(result.destination.index, 0, movedItem);
    setVideos(reorderedVideos);
  };

  return (
    <div className="flex flex-col lg:flex-row items-start px-4 lg:px-8 py-10 bg-gray-50">
      {/* Main Video Player - 75% Width */}
      <div className="lg:w-3/4 w-full mb-6 lg:mb-0">
        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[550px] shadow-lg rounded-lg overflow-hidden">
          <ReactPlayer
            url={currentVideo.url}
            playing
            controls
            width="100%"
            height="100%"
            className="rounded-lg"
          />
          <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black to-transparent text-white">
            <h3 className="text-xl font-semibold">{currentVideo.title}</h3>
            <p className="text-sm mt-1">{currentVideo.description}</p>
          </div>
        </div>
      </div>

      {/* Sidebar Playlist - 25% Width (Draggable) */}
      <div className="lg:w-1/4 w-full">
        <h2 className="text-lg font-semibold text-gray-800 mb-4">
          More Videos
        </h2>
        <DragDropContext onDragEnd={handleDragEnd}>
          <Droppable droppableId="videoList">
            {(provided) => (
              <div
                ref={provided.innerRef}
                {...provided.droppableProps}
                className="space-y-4"
              >
                {videos.map((video, index) => (
                  <Draggable
                    key={video.id}
                    draggableId={video.id}
                    index={index}
                  >
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        onClick={() => setCurrentVideo(video)}
                        className={`flex items-center p-2 bg-white shadow-lg rounded-lg cursor-pointer transition-all ${
                          snapshot.isDragging
                            ? "shadow-2xl scale-105"
                            : "hover:shadow-xl"
                        }`}
                      >
                        <div className="w-24 h-16 flex-shrink-0 relative overflow-hidden rounded-lg">
                          <ReactPlayer
                            url={video.url}
                            width="100%"
                            height="100%"
                          />
                          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40">
                            <FaPlay className="text-white text-lg opacity-80" />
                          </div>
                        </div>
                        <div className="ml-3">
                          <h4 className="text-sm font-semibold text-gray-800">
                            {video.title}
                          </h4>
                          <p className="text-xs text-gray-500">
                            {video.description}
                          </p>
                        </div>
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Videos;
