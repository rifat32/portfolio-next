
import Image from 'next/image'




const DetailsSection = ({portfolio}) => {
 
  if(portfolio){
    return (
      <section id="portfolio-details" className="portfolio-details">
 <div className="container">
   <div className="row gy-4">
     <div className="col-lg-8">
    
         <div 
      className="portfolio-details-img">
     
         
          <Image src={portfolio.image} alt="profile-pic" quality={50} placeholder="blur"  layout="responsive" priority />
         
    
         
       </div>
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
