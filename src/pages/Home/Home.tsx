import FeaturedAuthors from "../../components/layout/FeaturedAuthors";
import NewsLatter from "../../components/layout/NewsLatter";
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
      <FeaturedAuthors></FeaturedAuthors>
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;
