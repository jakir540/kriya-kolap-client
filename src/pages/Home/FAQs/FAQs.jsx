import FaqWatchPhoto from "../../../assets/FaqWat.jpg";
import { useState } from "react";

const FAQs = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAccordion = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div className="w-full">
      <div className="mx-auto my-24 px-6 md:px-0">
        <h1 className="text-4xl font-semibold text-center mb-5">FAQs Section</h1>
        <section className="mb-32">
          <div className="grid items-center lg:grid-cols-2">
            <div
              data-aos="fade-right"
              className="mb-12 lg:mb-0"
            >
              <div className="block rounded-lg bg-[hsla(0,0%,100%,0.55)] px-6 py-12 shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)] dark:bg-[hsla(0,0%,5%,0.55)] dark:shadow-black/20 md:px-12 lg:-mr-14 backdrop-blur-[30px]">
                <h3 className="mb-3 text-2xl font-bold capitalize">
                  We know how valuable your time is
                </h3>
                <h5 className="mb-12 text-lg font-bold text-primary dark:text-primary-400 lg:mb-10 xl:mb-12">
                  Let us answer your questions
                </h5>

                <div className="accordion">
                  {faqData.map((faq, index) => (
                    <div
                      key={index}
                      className="collapse collapse-plus my-5 bg-base-200"
                    >
                      <input
                        type="checkbox"
                        id={`faq-${index}`}
                        className="w-[430px]"
                        checked={activeIndex === index}
                        onChange={() => toggleAccordion(index)}
                      />
                      <div className="collapse-title text-xl font-medium cursor-pointer">
                        {faq.question}
                      </div>
                      <div className="collapse-content text-gray-400 text-sm">
                        <p>{faq.answer}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <img
                src={FaqWatchPhoto}
                className="w-full rounded-lg shadow-lg dark:shadow-black/20"
                alt=""
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default FAQs;

// Sample FAQ data
const faqData = [
  {
    question: "What is a summer vacation yoga center?",
    answer: "A summer vacation yoga center is a place where individuals can go during the summer.No prior experience in yoga is usually required. Summer vacation yoga centers cater to individuals of all skill levels",
  },
  {
    question: "What activities are offered at a summer vacation yoga center?",
    answer: "Activities at a summer vacation yoga center typically include daily yoga classes, guided meditation sessions.No prior experience in yoga is usually required. Summer vacation yoga centers cater to individuals of all skill levels",
  },
  {
    question: "Do I need to be experienced in yoga to attend a summer yoga retreat?",
    answer: "No prior experience in yoga is usually required. Summer vacation yoga centers cater to individuals of all skill levels.Activities at a summer vacation yoga center typically include daily yoga classes, guided meditation sessions.",
  },
  // Add more FAQs as needed
];
