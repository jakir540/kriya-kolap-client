// import About from "../About/About";
import Blogs from "../Blogs/Blogs";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Contact from "../Contact/Contact";
import FAQs from "../FAQs/FAQs";
// import Meditation from "../Meditation/Meditation";
import Newsletter from "../Newsletter/Newsletter";
// import PopularClasses from "../PopularClasses/PopularClasses";
// import PopularInstructors from "../PopularInstructors/PopularInstructors";
// import Services from "../Services/Services";
import Videos from "../Videos/Videos";
import WhyKriya from "../WhyKriya/WhyKriya";

const Home = () => {
  return (
    <>
      <CarouselBanner></CarouselBanner>

      {/* <About /> */}
      {/* <PopularClasses></PopularClasses> */}
      {/* <Services></Services> */}
      {/* <PopularInstructors></PopularInstructors> */}
      {/* <Meditation></Meditation> */}
      <Blogs></Blogs>
      <WhyKriya></WhyKriya>
      <Videos></Videos>
      <FAQs></FAQs>
      <Newsletter></Newsletter>
      <Contact></Contact>
    </>
  );
};

export default Home;
