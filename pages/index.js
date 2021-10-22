import AboutSection from "../components/HomePageComponents/AboutSection";
import ContactSection from "../components/HomePageComponents/ContactSection";
import HeroSection from "../components/HomePageComponents/HeroSection";
import PortfolioSection from "../components/HomePageComponents/PortfolioSection";
import ServicesSection from "../components/HomePageComponents/ServicesSection";
import SkillsSection from "../components/HomePageComponents/SkillsSection";
import ResumeSection from "../components/HomePageComponents/ResumeSection"


export default function Home() {
  return (
   <>
<HeroSection/>
<main id="main">
  <AboutSection/>
  <SkillsSection/>
  <ResumeSection/>
  <PortfolioSection/>
  {/* <ServicesSection/> */}
  <ContactSection/>
</main>


   </>
  )
}
