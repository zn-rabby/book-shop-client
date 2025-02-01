import Banner from "./Banner";
import BannerCard from "./BannerCard";
import HomeProducts from "./HomeProduct";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <BannerCard></BannerCard>
      <HomeProducts></HomeProducts>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
