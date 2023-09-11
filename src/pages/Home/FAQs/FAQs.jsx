import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const FAQs = () => {
  useEffect(function () {
    Aos.init({ duration: 1000 });
  }, []);
  return (
    <div>
      <div className="container my-24 mx-auto md:px-6">
        <h1 className="text-4xl font-semibold text-center mb-5">FAQs</h1>
        <section className="mb-32">
          <div className="container mx-auto text-center lg:text-left xl:px-32">
            <div className=" grid items-center lg:grid-cols-2">

              <div data-aos="fade-right" className="mb-12 lg:mb-0">
                <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                  <h3 className="mb-3 text-2xl font-bold">
                    We know how valuable your time is
                  </h3>
                  <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
                    Let us answer your questions
                  </h5>

                  <div className="collapse collapse-plus my-5  bg-base-200">
                    <input
                      type="radio"
                      className=" w-[430px] "
                      name="my-accordion-3"
                      checked="checked"
                    />
                    <div className="collapse-title text-xl font-medium">
                      Q: What is a summer vacation yoga center?
                    </div>
                    <div className="collapse-content text-gray-400 text-sm">
                      <p>
                        {" "}
                        A: A summer vacation yoga center is a place where
                        individuals can go during the summer{" "}
                      </p>
                    </div>
                  </div>

                  <div className="collapse collapse-plus  my-5 bg-base-200">
                    <input
                      type="radio"
                      className=" w-[430px] "
                      name="my-accordion-3"
                    />
                    <div className="collapse-title text-xl font-medium">
                      Q: What activities are offered at a summer vacation yoga
                      center?
                    </div>
                    <div className="collapse-content text-gray-400 text-sm">
                      <p>
                        A: Activities at a summer vacation yoga center typically
                        include daily yoga classes, guided meditation sessions
                      </p>
                    </div>
                  </div>
                  <div className="collapse collapse-plus  my-5 bg-base-200">
                    <input
                      type="radio"
                      className=" w-[430px] "
                      name="my-accordion-3"
                    />
                    <div className="collapse-title text-xl font-medium">
                      Q: Do I need to be experienced in yoga to attend a summer
                      yoga retreat?
                    </div>
                    <div className="collapse-content text-gray-400 text-sm">
                      <p>
                        A: No prior experience in yoga is usually required.
                        Summer vacation yoga centers cater to individuals of all
                        skill levels
                      </p>
                    </div>
                  </div>

                  {/* 

                 

                  <p className="mb-4 font-bold">
                  Q: Do I need to be experienced in yoga to attend a summer yoga retreat?
                  </p>
                  <p className="text-gray-500 dark:text-neutral-300">
                  A: No prior experience in yoga is usually required. Summer vacation yoga centers cater to individuals of all skill levels, from beginners to experienced practitioners.
                  </p>
                  <p className="mb-4 font-bold">
                  Q: What should I bring to a summer yoga retreat?
                  </p>
                  <p className="text-gray-500 dark:text-neutral-300">
                  A: You may want to bring comfortable yoga attire, a yoga mat, sunscreen, a refillable water bottle, a journal for reflection.
                  </p> */}
                </div>
              </div>

              <div>
                <img
                  src="https://images.unsplash.com/photo-1517463700628-5103184eac47?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
                  className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                  alt=""
                />
              </div>


            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;
