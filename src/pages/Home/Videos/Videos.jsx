import ReactPlayer from "react-player";

const Videos = () => {
  // const  videoUrl ='https://youtu.be/5XCQfYsFa3Q'
  // const videoUrl = "https://www.youtube.com/watch?v=gYsrWg90bvo";
  const videoUrl = "https://www.youtube.com/watch?v=Jo3ga3Vk6vQ";

  return (
    <div className="lg:flex justify-between items-center my-16">
      <div className="youtube-player-container ">
        <ReactPlayer url={videoUrl} controls />
      </div>

      <div className="r">
        <h3 className="text-3xl text-center mb-8">
          Make your way to complete health
        </h3>
        <p className="p-3 text-center">
          🌿 Holistic Wellness Philosophy: We embrace the concept that wellness
          is more than just physical health. Our approach considers the
          interconnectedness of every aspect of your life, including your
          physical, mental, emotional, and spiritual well-being. By addressing
          all these elements, we help you achieve balance and vitality.
          <br />
          <br />
          🧘‍♀️ Mindful Movement & Yoga: Experience the power of mindful movement
          through our rejuvenating yoga classes. Whether youre a beginner or an
          experienced practitioner
        </p>
      </div>
    </div>
  );
};

export default Videos;
