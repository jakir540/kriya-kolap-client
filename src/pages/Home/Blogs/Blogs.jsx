

const Blogs = () => {
  return (
    <div className="my-10">

  
      <div>
        <h1 className="text-center font-semibold text-3xl">Recent Blogs</h1>
        <p className="text-center">
          We at KRIYA provide various services to the nature of the clients.
          <br /> we can talk and
          come to a conclusion
        </p>
      
      </div>


      <div className="lg:flex items-center justify-between gap-4 my-10">






        <div>
          <div className="card w-92 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=920&q=80"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center">
              <div className="flex justify-between gap-3">
                <div>
                  <p className="text-3xl text-center font-thin bg-slate-300 p-2">
                    {" "}
                    <span className="text-orange-400 font-semibold">
                      25
                    </span>{" "}
                    <br /> MAY
                  </p>
                </div>

                <div>
                  {" "}
                  <h5 className="text-gray-500 font-thin">24 comments</h5>
                  <h2 className="card-title capitalize">
                     good method perfect make body
                  </h2>
                  <p className="text-sm py-2">
                    Mauris in erat justo. Nullam ac urna eu felis dapibus
                    <br />
                    <p className="text-gray-500 py-2 text-end">
                      {" "}
                      Read more.....
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://plus.unsplash.com/premium_photo-1683134110111-2c1cbccd10b6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=858&q=80"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center">
              <div className="flex justify-between gap-3">
                <div>
                  <p className="text-3xl text-center font-thin bg-slate-300 p-2">
                    {" "}
                    <span className="text-orange-400 font-semibold">
                      30
                    </span>{" "}
                    <br /> MAY
                  </p>
                </div>

                <div>
                  {" "}
                  <h5 className="text-gray-500 font-thin">10 comments</h5>
                  <h2 className="card-title capitalize">
                 diam gravida fringilla
                  </h2>
                  <p className="text-sm py-2">
                    Mauris in erat justo. Nullam ac urna eu felis dapibus
                   <br />
                    <p className="text-gray-500 py-2 text-end">
                      {" "}
                      Read more.....
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <div className="card w-96 bg-base-100 shadow-xl">
            <figure className="px-10 pt-10">
              <img
                src="https://images.unsplash.com/photo-1599639403205-1b1542d84f91?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                className="rounded-xl"
              />
            </figure>
            <div className="card-body items-center">
              <div className="flex justify-between gap-3">
                <div>
                  <p className="text-3xl text-center font-thin bg-slate-300 p-2">
                    {" "}
                    <span className="text-orange-400 font-semibold">
                      12
                    </span>{" "}
                    <br /> MAY
                  </p>
                </div>

                <div>
                  {" "}
                  <h5 className="text-gray-500 font-thin">6 comments</h5>
                  <h2 className="card-title capitalize">
                    the sea shore is a good method
                  </h2>
                  <p className="text-sm py-2">
                    Mauris in erat justo. Nullam ac urna eu felis dapibus
                   <br />
                    <p className="text-gray-500 py-2 text-end">
                      {" "}
                      Read more.....
                    </p>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>





      </div>
     
    </div>
  );
};

export default Blogs;
