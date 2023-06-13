import { useEffect, useState } from "react";


const ReceivedFeedback = () => {
   
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    fetch("https://kriya-kolap-sever-jakir540.vercel.app/receivedInstructorsFeedback")
      .then(res => res.json())

      .then((data) => {
        setFeedback(data);
      });
  }, []);
  console.log(feedback);

  return (
    <div>
      <h2 className="text-center my-8 text-3xl font-semibold">
        Classes Feedback
      </h2>
      <div></div>
      <div className=" grid grid-cols-1 gap-5">
        {feedback.map((feedback, index) => (
          <div className="bg-slate-300 border border-gray-950 p-10 rounded-lg" key={index}>
            <div className="">
              <h3>Class Id: {feedback._id}</h3>
            </div>
            <div className="">
              <h3>Name: {feedback.name}</h3>
            </div>

            <div>
              <p>Feedback: {feedback.feedback}</p>
            </div>
            {/* Add additional fields from your feedback data object */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReceivedFeedback;
