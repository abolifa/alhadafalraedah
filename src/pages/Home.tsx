import AboutSection from "@/components/about";
import Categories from "@/components/categories";
import Contact from "@/components/contact";
import Hero from "@/components/hero";
import WhyUs from "@/components/why-us";

const Home = () => {
  return (
    <>
      <Hero />
      <AboutSection />
      <Categories />
      <WhyUs />
      <Contact />
    </>
  );
};

export default Home;
