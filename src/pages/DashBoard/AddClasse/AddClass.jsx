import useAuth from "../../../Hooks/useAuth";
import Swal from "sweetalert2";

const AddClass = () => {
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

        fetch("https://kriya-kolap-sever-jakir540.vercel.app/classes", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newClass),
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.insertedId) {
              Swal.fire({
                position: "top-end",
                icon: "success",
                title: "New class uploaded successfully!",
                showConfirmButton: false,
                timer: 1500,
              });
            }
          });
      });
  };

  return (
    <div className="max-w-4xl mx-auto p-8 bg-[#1D2330] rounded-lg shadow-lg">
      <h2 className="text-center text-3xl font-semibold text-white mb-8">
        Add New Class
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="className"
              className="block text-sm font-medium text-white"
            >
              Class Name
            </label>
            <input
              type="text"
              id="className"
              name="className"
              placeholder="Enter class name"
              required
              className="mt-2 block w-full px-4 py-2 bg-[#2E344E] text-white border border-[#4C4C4C] rounded-lg shadow-sm focus:ring-[#00A854] focus:border-[#00A854]"
            />
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-sm font-medium text-white"
            >
              Instructor Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              defaultValue={displayName}
              required
              className="mt-2 block w-full px-4 py-2 bg-[#2E344E] text-white border border-[#4C4C4C] rounded-lg shadow-sm focus:ring-[#00A854] focus:border-[#00A854]"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-sm font-medium text-white"
            >
              Instructor Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              defaultValue={email}
              required
              className="mt-2 block w-full px-4 py-2 bg-[#2E344E] text-white border border-[#4C4C4C] rounded-lg shadow-sm focus:ring-[#00A854] focus:border-[#00A854]"
            />
          </div>

          <div>
            <label
              htmlFor="seats"
              className="block text-sm font-medium text-white"
            >
              Available Seats
            </label>
            <input
              type="number"
              id="seats"
              name="seats"
              required
              className="mt-2 block w-full px-4 py-2 bg-[#2E344E] text-white border border-[#4C4C4C] rounded-lg shadow-sm focus:ring-[#00A854] focus:border-[#00A854]"
            />
          </div>

          <div>
            <label
              htmlFor="price"
              className="block text-sm font-medium text-white"
            >
              Price
            </label>
            <input
              type="number"
              id="price"
              name="price"
              required
              className="mt-2 block w-full px-4 py-2 bg-[#2E344E] text-white border border-[#4C4C4C] rounded-lg shadow-sm focus:ring-[#00A854] focus:border-[#00A854]"
            />
          </div>
        </div>

        <div>
          <label
            htmlFor="image"
            className="block text-sm font-medium text-white"
          >
            Class Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
            className="mt-2 block w-full file:mr-2 file:py-2 file:px-4 file:border-0 file:bg-[#00A854] file:text-white file:rounded-lg"
          />
        </div>

        <div className="flex justify-center">
          <button
            type="submit"
            className="px-6 py-3 bg-[#00A854] text-white font-semibold rounded-lg shadow-md hover:bg-[#007B3D] focus:outline-none focus:ring-2 focus:ring-[#00A854] focus:ring-opacity-50"
          >
            Add Class
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddClass;
