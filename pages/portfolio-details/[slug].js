import BreadcrumbsSection from '../../components/DetailsPageComponents/BreadcrumbsSection'
import {useRouter} from 'next/router';
import portfolios from "../../data/portfolio/PortfolioData"
import DetailsSection from '../../components/DetailsPageComponents/DetailsSection';



const DetaisPage = ({portfolio}) => {

    return (
        <main id="main">
           <BreadcrumbsSection/>
           <DetailsSection portfolio={portfolio}/>
        </main>
    )
}
export async function getServerSideProps({query}) {
  const portfolio = portfolios.find(el => (el.slug === query.slug))
  return {
     props:{
      portfolio
     }
   }
 }
export default DetaisPage
