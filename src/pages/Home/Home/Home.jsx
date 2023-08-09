import Blogs from "../Blogs/Blogs";
import CarouselBanner from "../CarouselBanner/CarouselBanner";
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
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;