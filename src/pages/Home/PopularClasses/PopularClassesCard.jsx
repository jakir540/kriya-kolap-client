const PopularClassesCard = ({singleClass}) => {
    console.log(singleClass)
    const {yogaClassName,students,photo,instructorName,description} = singleClass
  return (
    <div className="card card-compact w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src="https://cdn.pixabay.com/photo/2022/08/28/05/39/yoga-7415745_1280.jpg"
          alt="yoga class"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{yogaClassName}</h2>
        <h2 className="">Instructor Name:  {instructorName}</h2>
        <p>Students: {students}</p>
        <div className="card-actions justify-end">
          <button className="btn btn-primary">Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default PopularClassesCard;
