import Blogs from "../Blogs/Blogs";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
import Contact from "../Contact/Contact";
import FAQs from "../FAQs/FAQs";
import Newsletter from "../Newsletter/Newsletter";
import PopularClasses from "../PopularClasses/PopularClasses";
import PopularInstructors from "../PopularInstructors/PopularInstructors";
import Videos from "../Videos/Videos";
import WhyKriya from "../WhyKriya/WhyKriya";

const Home = () => {
    return (
        <div>
            <CarouselBanner></CarouselBanner>
            <PopularClasses></PopularClasses>
            <PopularInstructors></PopularInstructors>
            <Blogs></Blogs>
            <WhyKriya></WhyKriya>
            <Videos></Videos>
            <FAQs></FAQs>
            <Newsletter></Newsletter>
            <Contact></Contact>
        </div>
    );
};

export default Home;