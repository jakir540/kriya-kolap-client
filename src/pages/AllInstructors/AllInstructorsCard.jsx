const AllInstructorsCard = ({ instructor }) => {
  console.log({ instructor });

  const { instructorName, email, activities, photo, price } = instructor;
  console.log(activities)
  return (
    <div className="hero  bg-base-100 rounded-lg shadow-2xl">
      <div className="hero-content flex-col">
        <div className="">
        <img
          src="https://images.unsplash.com/photo-1508050249562-b28a87434496?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
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
          <button className="btn btn-primary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default AllInstructorsCard;
