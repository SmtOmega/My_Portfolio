import AboutSection from "../components/AboutSection";
import FooterSection from "../components/FooterSection";
import HeroSection from "../components/HeroSection";
import NavMenu from "../components/NavMenu";
import ProjectSection from "../components/ProjectSection";

const Home = () => {
  return (
    <div>
      <NavMenu />
      <HeroSection />
      <AboutSection />
      <ProjectSection />
      <FooterSection />
    </div>
  );
};

export default Home;
