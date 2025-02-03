import Cancel from "../Cancel";
import Fail from "../Fail";
import Banner from "./Banner";
import BannerCard from "./BannerCard";
import HomeProducts from "./HomeProduct";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Fail></Fail>
      <Cancel></Cancel>
      <Banner></Banner>
      <BannerCard></BannerCard>
      <HomeProducts></HomeProducts>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
