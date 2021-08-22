import AboutSection from "../components/HomePageComponents/AboutSection";
import ContactSection from "../components/HomePageComponents/ContactSection";
import HeroSection from "../components/HomePageComponents/HeroSection";
import PortfolioSection from "../components/HomePageComponents/PortfolioSection";
import ServicesSection from "../components/HomePageComponents/ServicesSection";
import SkillsSection from "../components/HomePageComponents/SkillsSection";


export default function Home() {
  return (
   <>
<HeroSection/>
<main id="main">
  <AboutSection/>
  <SkillsSection/>
  <PortfolioSection/>
  {/* <ServicesSection/> */}
  <ContactSection/>
</main>


   </>
  )
}
