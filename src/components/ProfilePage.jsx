import { Doughnut } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import useAuth from "../Hooks/useAuth";
import { FaUserCircle } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useAdmin from "../Hooks/useAdmin";
import useInstructor from "../Hooks/useInstructor";
import { AiOutlineDashboard, AiOutlineSetting } from "react-icons/ai";
import { RiNotification3Line } from "react-icons/ri";

ChartJS.register(ArcElement, Tooltip, Legend);

const donutData = {
  labels: ["Meditation", "Asanas", "Pranayama", "Mindfulness"],
  datasets: [
    {
      data: [25, 30, 20, 25], // Adjust these values as needed
      backgroundColor: ["#3b82f6", "#fca5a5", "#fbbf24", "#d1d5db"],
      hoverBackgroundColor: ["#2563eb", "#f87171", "#f59e0b", "#9ca3af"],
      borderWidth: 2,
      borderColor: "#ffffff",
    },
  ],
};

const donutOptions = {
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        color: "#374151",
        font: {
          size: 14,
        },
      },
    },
  },
  cutout: "50%", // Donut chart style
};

const ProfilePage = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isInstructor] = useInstructor();

  return (
    <div className="profile-page bg-gradient-to-br from-[#1a202c] to-[#2d3748] min-h-screen flex flex-col items-center">
      {/* Navbar Spacer */}
      <div className="h-[80px]"></div>

      {/* Dashboard Container */}
      <div className="max-w-6xl mx-auto bg-white p-10 rounded-2xl shadow-2xl border border-gray-200">
        {/* Profile Header */}
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center space-x-6">
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
                {user.displayName || "Guest User"}
              </h2>
              <p className="text-md text-[#4B5563] font-medium">
                {isAdmin ? "Admin" : isInstructor ? "Instructor" : "Student"}
              </p>
            </div>
          </div>
          <button className="px-6 py-2 bg-[#34D399] text-white rounded-lg shadow-md hover:bg-[#059669] transition-all duration-300">
            Edit Profile
          </button>
        </div>

        {/* Dashboard Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10">
          {/* Card 1 */}
          <div className="bg-gradient-to-br from-[#2a4365] to-[#2c5282] text-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <AiOutlineDashboard className="text-4xl" />
            <h3 className="text-xl font-semibold">Dashboard</h3>
            <p className="text-sm text-center">
              Access your activities, analytics, and reports at a glance.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-gradient-to-br from-[#48bb78] to-[#38a169] text-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <RiNotification3Line className="text-4xl" />
            <h3 className="text-xl font-semibold">Notifications</h3>
            <p className="text-sm text-center">
              Stay updated with the latest alerts and announcements.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-gradient-to-br from-[#805ad5] to-[#6b46c1] text-white p-6 rounded-lg shadow-lg flex flex-col items-center space-y-4">
            <AiOutlineSetting className="text-4xl" />
            <h3 className="text-xl font-semibold">Settings</h3>
            <p className="text-sm text-center">
              Manage your preferences, security, and configurations.
            </p>
          </div>
        </div>

        {/* Modern Donut Chart */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#1F2937] mb-6">
            Industry Distribution
          </h3>
          <div className="flex justify-center">
            <div style={{ width: "250px", height: "250px" }}>
              <Doughnut data={donutData} options={donutOptions} />
            </div>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-10">
          <h3 className="text-2xl font-semibold text-[#1F2937]">
            Contact Info
          </h3>
          <div className="flex items-center mt-4 space-x-3">
            <MdEmail className="text-2xl text-[#34D399]" />
            <p className="text-xl text-[#374151]">
              {user.email || "Not Available"}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
