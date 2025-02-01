import Banner from "./Banner";
import BannerCard from "./BannerCard";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <BannerCard></BannerCard>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
