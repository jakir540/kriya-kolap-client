import Swal from "sweetalert2";
import useAuth from "../../../Hooks/useAuth";
import { useParams } from "react-router-dom";


const UpdateInstructorInfo = () => {
    const {id} = useParams()
    console.log("update",id)
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
        //image upload imgbb
        const image = form.image.files[0];
    
        const formData = new FormData();
        formData.append("image", image);
    
        const url = `https://api.imgbb.com/1/upload?key=${
          import.meta.env.VITE_IMGBB_KEY
        }`;
        console.log(import.meta.env.VITE_IMGBB_KEY);
    
        fetch(url, {
          method: "POST",
          body: formData,
        })
          .then((res) => res.json())
          .then((imgData) => {
            const imgURL = imgData.data.display_url;
    
    //post class in DB form client-------------
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
                console.log(data);
                if (data.modifiedCount > 0) {
                    Swal.fire({
                        position: "top-end",
                        icon: "success",
                        title: "update class uploaded",
                        showConfirmButton: false,
                        timer: 1500,
                      });
                }
              });
          });
      };
    




    return (
        <div>
            <h2 className="text-center text-3xl font-semibold my-8">My updated information for Classes </h2>

            <div>
            <div>
     

      <div>
        <form onSubmit={handleSubmit} className="w-full">
          <div className="grid grid-cols-2 gap-8 ">
            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Class Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="className"
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Instructor Name</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="name"
                  defaultValue={displayName}
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Instructor Email</span>
                </label>
                <input
                  type="text"
                  placeholder="Type here"
                  name="email"
                  defaultValue={email}
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Available Seats</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  name="seats"
                  className="input input-bordered w-full "
                />
              </div>
            </div>

            <div>
              <div className="form-control w-full ">
                <label className="label">
                  <span className="label-text">Price</span>
                </label>
                <input
                  type="number"
                  placeholder="Type here"
                  name="price"
                  className="input input-bordered w-full "
                />
              </div>
            </div>
          </div>

          <div className="my-5">
            <input
              type="file"
              name="image"
              accept="image/*"
              className="file-input file-input-bordered file-input-accent w-full "
            />
          </div>

          <div>
            <button type="submit" className="btn btn-active btn-accent">
              Update Class
            </button>
          </div>
        </form>
      </div>
    </div>
            </div>
        </div>
    );
};

export default UpdateInstructorInfo;