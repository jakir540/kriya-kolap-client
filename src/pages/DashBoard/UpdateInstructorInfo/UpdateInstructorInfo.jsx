import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";

const UpdateInstructorInfo = () => {
  const { id } = useParams();
  const { user } = useAuth();
  const { displayName, email } = user;

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const classname = form.className.value;
    const name = form.name.value;
    const email = form.email.value;
    const price = form.price.value;
    const seats = form.seats.value;
    const image = form.image.files[0];

    const formData = new FormData();
    formData.append("image", image);

    const url = `https://api.imgbb.com/1/upload?key=${
      import.meta.env.VITE_IMGBB_KEY
    }`;

    fetch(url, {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((imgData) => {
        const imgURL = imgData.data.display_url;

        const newClass = {
          classname,
          name,
          price,
          seats,
          imgURL,
          email,
          status: "pending",
        };

        fetch(`https://kriya-kolap-sever-jakir540.vercel.app/classes/${id}`, {
          method: "PUT",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newClass),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.modifiedCount > 0) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Class Updated Successfully",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-lg p-8 w-full sm:w-3/4 lg:w-1/2">
        <h2 className="text-center text-4xl font-bold text-gray-800 mb-6">
          Update Your Class Information
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Class Name
              </label>
              <input
                type="text"
                placeholder="Enter class name"
                name="className"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-[#00A854] focus:ring-opacity-50transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Instructor Name
              </label>
              <input
                type="text"
                placeholder="Enter instructor name"
                name="name"
                defaultValue={displayName}
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-[#00A854] focus:ring-opacity-50transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Instructor Email
              </label>
              <input
                type="email"
                placeholder="Enter email"
                name="email"
                defaultValue={email}
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-[#00A854] focus:ring-opacity-50transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Available Seats
              </label>
              <input
                type="number"
                placeholder="Enter available seats"
                name="seats"
                className="input input-bordered w-full border-gray-300  focus:ring-2 focus:ring-[#00A854] focus:ring-opacity-50transition-all"
                required
              />
            </div>

            <div className="form-control">
              <label className="label text-sm font-medium text-gray-600">
                Price
              </label>
              <input
                type="number"
                placeholder="Enter price"
                name="price"
                className="input input-bordered w-full border-gray-300 focus:ring-2 focus:ring-[#00A854] transition-all"
                required
              />
            </div>
          </div>

          <div className="form-control">
            <label className="label text-sm font-medium text-gray-600">
              Class Image
            </label>
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered bg-[#00A854] focus:ring-2 focus:ring-[#00A854] focus:ring-opacity-50 w-full"
              required
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-[#00A854] text-white font-semibold rounded-lg shadow-md hover:bg-[#007B3D] focus:outline-none focus:ring-2 focus:ring-[#00A854] focus:ring-opacity-50"
            >
              Update Class
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateInstructorInfo;
