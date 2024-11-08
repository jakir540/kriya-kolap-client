const AllInstructorsCard = ({ instructor }) => {
  const { instructorName, email, activities, photo } = instructor;

  return (
    <div className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105">
      <img
        src={photo}
        alt={instructorName}
        className="w-full h-60 object-cover rounded-t-lg"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>

      <div className="absolute inset-0 flex flex-col justify-center items-center text-center text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <h2 className="text-2xl font-bold text-black mb-4">{instructorName}</h2>
        <p className="text-sm text-black mb-4">{email}</p>
        <ul className="text-sm text-gray-300 mb-6">
          {activities.map((activity, index) => (
            <li key={index}>{activity}</li>
          ))}
        </ul>
        <button className="btn bg-[#00a854] text-white hover:bg-[#008f39] transition duration-300 px-6 py-2 rounded-md">
          See Classes
        </button>
      </div>
    </div>
  );
};

export default AllInstructorsCard;
