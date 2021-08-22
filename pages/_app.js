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

  <script defer src="../assets/vendor/aos/aos.js"></script>
  <script defer src="../assets/vendor/bootstrap/js/bootstrap.bundle.min.js"></script>
  
  <script defer src="../assets/vendor/waypoints/noframework.waypoints.js"></script>

 
  <script defer src="../assets/js/main.js"></script>
  </Head>
 <Header/>
  <Component {...pageProps} />
<Footer/>
<a href="#" className="back-to-top d-flex align-items-center justify-content-center"><FaArrowUp></FaArrowUp></a>

  </>
}

export default MyApp
