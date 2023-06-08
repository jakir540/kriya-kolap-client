const PopularInstructorsCards = ({ instructor }) => {
  console.log(instructor);
  const {instructorName,email,activities,photo,price}=instructor
  return (

    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://cdn.pixabay.com/photo/2023/03/13/17/21/yoga-7850443_1280.jpg"
          alt="yoga class"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{instructorName}</h2>
       <p>Email : {email}</p>
       <p>Price : {price}</p>
       
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularInstructorsCards;
