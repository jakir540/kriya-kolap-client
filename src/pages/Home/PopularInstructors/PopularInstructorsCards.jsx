const PopularInstructorsCards = ({ instructor }) => {

  const {instructorName,email,activities,photo,price}=instructor
  return (

    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={photo}
          alt="yoga class"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructorName}</h2>
       <p>Email : {email}</p>
       <p>Price : {price}</p>
       
        <div className="card-actions justify-end">
          <button className="btn bg-orange-500 hover:bg-slate-700">See Classes</button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorsCards;
