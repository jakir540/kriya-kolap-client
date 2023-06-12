const AllInstructorsCard = ({ instructor }) => {
  console.log({ instructor });

  const { instructorName, email, activities, photo } = instructor;
  console.log(activities)
  return (
    <div className="hero  bg-base-100 rounded-lg shadow-2xl">
      <div className="hero-content flex-col">
        <div className="">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        <div className="">
          <h1 className="text-3xl font-bold">{instructorName}</h1>
          <p className="py-2">
           Email: {email}
          </p>
          <p className="py-2">
           {
            activities.map((item,index) => <li key={index}>{item}</li>)

           }
          </p>
          <button className="btn bg-orange-500">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default AllInstructorsCard;
