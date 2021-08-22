import SwiperCore, { Navigation, Pagination, Scrollbar, A11y } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/swiper.min.css";
import Image from 'next/image'
SwiperCore.use([Navigation, Pagination, Scrollbar, A11y]);



const DetailsSection = ({portfolio}) => {
 
  if(portfolio){
    return (
      <section id="portfolio-details" className="portfolio-details">
 <div className="container">
   <div className="row gy-4">
     <div className="col-lg-8">
    
         <Swiper navigation scrollbar={{ draggable: true }}
      className="portfolio-details-slider">
      {
        portfolio.images.map((el,indx) => (
          <SwiperSlide key={indx}>
          <Image src={el} alt="profile-pic" quality={50} placeholder="blur"  layout="responsive" />
          </SwiperSlide>
        ))
      }
           
         
       </Swiper>
     </div>
     <div className="col-lg-4">
       <div className="portfolio-info">
         <h3>Project information</h3>
         <ul>
           <li><strong>Category</strong>: {portfolio.category}</li>
           <li><strong>Project URL</strong>: <a href={portfolio.project_url} target="_blank" className="btn btn-info">Visite</a></li>
           {
             portfolio.github_link &&   <li><strong>Github Link</strong>: <a href={portfolio.github_link} target="_blank" className="btn btn-info">Visite</a></li>
           }
           {
             portfolio.github_frontend &&     <li><strong>Github Front-End</strong>: <a href={portfolio.github_frontend} target="_blank" className="btn btn-info">Visite</a></li>
           }
           {
             portfolio.github_backend &&    <li><strong>Github Back-End</strong>: <a href={portfolio.github_backend} target="_blank" className="btn btn-info">Visite</a></li>
           }
         
         
       

         </ul>
       </div>
      
     </div>
     <div className="col-10 ">
       
       <div className="portfolio-description">
         <h2>Details</h2>
         <p>
         {portfolio.description}
         </p>
       </div>
     </div>
   </div>
 </div>
</section>

   )
  } else {
    return (<div></div>)
  }

 
}

export default DetailsSection
