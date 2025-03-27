import FeaturedAuthors from "../../components/layout/FeaturedAuthors";
import NewsLatter from "../NewsLatter";
import Banner from "./Banner";
import BannerCard from "./BannerCard";
import CategorySection from "./Category";
import HomeProducts from "./HomeProduct";
import ExclusiveAuthorSpotlight from "./OfferSection";
import Testimonials from "./Testimonial";

const Home = () => {
  return (
    <div className="home">
      <Banner></Banner>
      <BannerCard></BannerCard>
      <CategorySection></CategorySection>
      <HomeProducts></HomeProducts>
      <FeaturedAuthors></FeaturedAuthors>
      <ExclusiveAuthorSpotlight></ExclusiveAuthorSpotlight>
      <Testimonials></Testimonials>
      <NewsLatter></NewsLatter>
    </div>
  );
};

export default Home;
