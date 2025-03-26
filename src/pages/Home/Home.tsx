import Banner from "./Banner";
import BannerCard from "./BannerCard";
import CategorySection from "./Category";
import HomeProducts from "./HomeProduct";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <BannerCard></BannerCard>
      <CategorySection></CategorySection>
      <HomeProducts></HomeProducts>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
