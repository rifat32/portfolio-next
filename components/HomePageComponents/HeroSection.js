import Typed from 'react-typed';
import heroImg from '../../assets/img/hero-bg.jpg';
import Image from 'next/image'

const HeroSection = () => {
    return (
        <section id="hero" className="d-flex flex-column justify-content-center align-items-center">
  {/* <div className="hero-container" data-aos="fade-in">
    <h1>RIFAT AL ASHWAD</h1>
    <p>I'm {" "}
     <Typed
                    strings={['Back-End  Web Developer','Front-End Web Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                
                    loop
                />
   </p>
  </div> */}
  <Image src={heroImg} className="img-fluid" alt="profile-pic" quality={50} placeholder="blur"  layout="fill" />
  <div className="hero-container centered">
  <h1>RIFAT AL ASHWAD</h1>
    <p>I'm {" "}
     <Typed
                    strings={['Back-End  Web Developer','Front-End Web Developer']}
                    typeSpeed={40}
                    backSpeed={50}
                
                    loop
                />
   </p>
  
  </div>
</section>
    )
}

export default HeroSection
