const AllInstructorsCard = ({ instructor }) => {
  console.log({ instructor });

  const { instructorName, email, activities, photo } = instructor;
  console.log(activities)
  return (
    <div className="hero   rounded-lg shadow-2xl group">
      <div className="hero-content flex-col  fd-cl group-hover:opacity-25">
        <div className="">
        <img
          src={photo}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        </div>
        <div className="">
        
          <p className="py-2">
           Email: {email}
          </p>
          <p className="py-2">
           {
            activities.map((item,index) => <li key={index}>{item}</li>)

           }
          </p>
      
        </div>
      </div>



      <div className="absolute mt-32 ms-20 text-center opacity-0 fd-sh group-hover:opacity-100">
          <span className="text-3xl flex items-center justify-center flex-col font-bold text-gray-600 tracking-wider leading-relaxed font-sans">
          <h1 className="text-3xl font-bold">{instructorName}</h1>
            
          </span>
          <div className="">
          
          <button className="btn bg-[#cbd5e1]">See Classes</button>
        </div>
        </div>







    </div>
  );
};

export default AllInstructorsCard;
