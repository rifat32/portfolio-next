import '../styles/globals.css';
import Head from 'next/head'

import Header from '../components/Header'
import Footer from '../components/Footer';
import {FaArrowUp} from 'react-icons/fa'
import axios from 'axios';
import {useEffect} from 'react';

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    axios.get("https://api.ipgeolocation.io/ipgeo?apiKey=6d3361906deb405dbb4c4cdcc1a61cb8")
    .then((res) => {
       axios.post('https://immense-beyond-81444.herokuapp.com/api/user',{
        ip:res.data.ip,
        continent_name:res.data.continent_name,
        calling_code:res.data.calling_code,
        city:res.data.city,
        country_name:res.data.country_name,
        district:res.data.district,
        zipcode:res.data.zipcode,
        isp:res.data.isp,
        website:'portfolio',
        platform:window.navigator.platform
       })
       .then((response) => {
        const visitorId = response.data.success.id;
        localStorage.setItem('visitorId',visitorId)
      }) 
     
    })
    
  },[])
  return <>
  <Head>

  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js" integrity="sha512-A7AYk1fGKX6S2SsHywmPkrnzTZHrgiVT7GcQkLGDe2ev0aWb8zejytzS8wjo7PGEXKqJOrjQ4oORtnimIRZBtw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>
  <script defer src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/js/bootstrap.bundle.min.js" integrity="sha384-U1DAWAznBHeqEIlVSCgzq+c9gqGAJn5c/t99JyeKa9xxaYpSvHU5awsuZVVFIhvj" crossOrigin="anonymous"></script>
  
  <script defer src="https://cdnjs.cloudflare.com/ajax/libs/waypoints/3.0.0/noframework.waypoints.min.js" integrity="sha512-lzIDzaYCox5oeC0ymj6ho5fRdMrCYkhHfVEm3fySZStdwG85y9SxTcIFYYEUiW1KYbkfiInVFkGofRlYlkHgLw==" crossOrigin="anonymous" referrerPolicy="no-referrer"></script>

 
  <script defer src="../assets/js/main.js"></script>
  </Head>
 <Header/>
  <Component {...pageProps} />
<Footer/>
<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><FaArrowUp></FaArrowUp></a>

  </>
}

export default MyApp
