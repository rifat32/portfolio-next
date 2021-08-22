import React from 'react';
import portfolio from '../../data/portfolio/PortfolioData';
import Image from 'next/image'
import Link from 'next/link'
import {BiLink} from 'react-icons/bi'


const PortfolioSection = () => {
    return (
        <section id="portfolio" className="portfolio section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Portfolio</h2>
      <p>Not all of my projects are included here. You can visit to my githup profile.</p>
    </div>
  
    <div className="row portfolio-container" data-aos="fade-up" data-aos-delay={100}>
 {
   portfolio.map((el,indx) => ( <div key={indx} className="col-lg-4 col-md-6 portfolio-item filter-app">
   <div className="portfolio-wrap">
     <Image alt={el.title} quality={50} placeholder="blur"  layout="responsive" src={el.images[0]} className="img-fluid"  />
     <div className="portfolio-links">
      <Link href={`/portfolio-details/${el.slug}`}>
      <a  title="More Details"><BiLink></BiLink></a>
      </Link>
      
     </div>
   </div>
 </div>))
 }
     
  
     
    </div>
  </div>
</section>

    )
}

export default PortfolioSection
