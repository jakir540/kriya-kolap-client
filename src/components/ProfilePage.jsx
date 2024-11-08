import useAuth from "../Hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";

const ProfilePage = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="profile-page bg-gradient-to-br from-[#171b22] to-[#1a284b] min-h-screen flex justify-center items-center">
      <div className="max-w-4xl mx-auto bg-white p-10 rounded-2xl shadow-xl border border-gray-200">
        <div className="flex items-center justify-start mb-8 space-x-6">
          <div className="w-28 h-28 overflow-hidden rounded-full shadow-lg">
            {user.photoURL ? (
              <img
                src={user.photoURL}
                alt="Profile"
                className="w-full h-full object-cover"
              />
            ) : (
              <FaUserCircle className="text-7xl text-gray-400" />
            )}
          </div>
          <div className="space-y-2">
            <h2 className="text-4xl font-semibold text-[#1F2937]">
              {user.displayName}
            </h2>
            <p className="text-md text-[#4B5563] font-medium">
              {isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"}
            </p>
          </div>
        </div>

        <div className="mt-6">
          <h3 className="text-2xl font-semibold text-[#1F2937]">
            Contact Info
          </h3>
          <div className="flex items-center mt-4 space-x-3">
            <MdEmail className="text-2xl text-[#34D399]" />
            <p className="text-xl text-[#374151]">{user.email}</p>
          </div>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <button className="px-6 py-2 bg-[#34D399] text-white rounded-lg shadow-md hover:bg-[#059669] transition-all duration-300">
            Edit Profile
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
