import {useEffect} from 'react'
import BreadcrumbsSection from '../../components/DetailsPageComponents/BreadcrumbsSection'
import DetailsSection from '../../components/DetailsPageComponents/DetailsSection';
import {useRouter} from 'next/router';
import portfolios from "../../data/portfolio/PortfolioData"


const DetaisPage = () => {
const router  = useRouter();
  const portfolio = portfolios.find(el => (el.slug === router.query.slug))

    return (
        <main id="main">
           <BreadcrumbsSection/>
           <DetailsSection portfolio={portfolio}/>
        </main>
    )
}

export default DetaisPage
