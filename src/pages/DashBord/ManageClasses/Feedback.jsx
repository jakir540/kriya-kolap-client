import Swal from "sweetalert2";

const Feedback = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const feedback = form.feedback.value;

    console.log(feedback, name);
    const feedbackInstructor = { name, feedback };

    fetch("http://localhost:5000/feedbackInstructor", {
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
            title: "feedback send to instructor  successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="w-full">
        <div>
          <div>
            <div className="form-control w-full ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input
                type="text"
                placeholder="Type here"
                name="name"
                className="input input-bordered w-full "
              />
            </div>
          </div>

          <div>
            <div className="form-control w-full my-5 ">
              <label className="label">
                <span className="label-text">Feedback</span>
              </label>
              <textarea
                type="text"
                placeholder="Type here"
                name="feedback"
                className="input input-bordered w-full "
              />
            </div>
          </div>
        </div>

        <div>
          <button type="submit" className="btn btn-active btn-accent my-5">
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default Feedback;
