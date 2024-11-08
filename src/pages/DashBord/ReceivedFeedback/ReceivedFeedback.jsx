import { useEffect, useState } from "react";

const ReceivedFeedback = () => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch(
      "https://kriya-kolap-sever-jakir540.vercel.app/receivedInstructorsFeedback"
    )
      .then((res) => res.json())
      .then((data) => {
        setFeedback(data);
      });
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-8 bg-gray-50">
      <h2 className="text-center text-4xl font-semibold text-gray-800 my-8">
        Classes Feedback
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {feedback.map((feedback, index) => (
          <div
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            key={index}
          >
            <div className="text-lg font-semibold text-[#00A854] mb-2">
              Class ID: {feedback._id}
            </div>
            <div className="text-gray-700 font-medium mb-4">
              Name: {feedback.name}
            </div>
            <div className="text-gray-600">{feedback.feedback}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceivedFeedback;
