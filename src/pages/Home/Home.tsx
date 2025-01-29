import Banner from "./Banner";
import BannerCard from "./BannerCard";
import Cart from "./Cart";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <BannerCard></BannerCard>
      <Cart></Cart>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
