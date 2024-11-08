import Swal from "sweetalert2";

const Feedback = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const feedback = form.feedback.value;

    console.log(feedback, name);
    const feedbackInstructor = { name, feedback };

    fetch("https://kriya-kolap-sever-jakir540.vercel.app/feedbackInstructor", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(feedbackInstructor),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Feedback sent to instructor successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-xl w-full sm:w-3/4 lg:w-1/2">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
          Provide Your Feedback
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Your Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all rounded-lg"
                required
              />
            </div>
          </div>

          <div>
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Your Feedback
              </label>
              <textarea
                name="feedback"
                placeholder="Enter your feedback"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-blue-500 transition-all rounded-lg"
                rows="4"
                required
              />
            </div>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="btn btn-primary text-white px-8 py-3 rounded-lg shadow-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300 transition-all duration-300"
            >
              Submit Feedback
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Feedback;
