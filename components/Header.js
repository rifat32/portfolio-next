
import Image from 'next/image'
import mainPic from '../assets/img/profile-img.jpg'
import Link from 'next/link'
import {FaFacebookF,FaGithub} from "react-icons/fa"
import {MdViewHeadline} from 'react-icons/md'
import {BiHome,BiUser,BiBookContent,BiServer,BiEnvelope} from 'react-icons/bi';
const Header = () => {
    return (
        <>
        <MdViewHeadline className="mobile-nav-toggle d-xl-none"></MdViewHeadline>
<header id="header">
  <div className="d-flex flex-column">
    <div className="profile">
      <div className="text-center mainPicContainer" >
      <Image src={mainPic} quality={50} placeholder="blur"  layout="fill"  className="img-fluid rounded-circle"/>
      </div>
    
 
      <h1 className="text-light">
        <Link href="/">
        <a >RIFAT AL ASHWAD</a>
        </Link>
        </h1>
      <div className="social-links mt-3 text-center">
      <a target="_blank" href="https://www.facebook.com/Real-Web-Developer-104162748159942" className="facebook"><FaFacebookF></FaFacebookF></a>
        <a target="_blank" href="https://github.com/rifat32" className="facebook"><FaGithub></FaGithub></a>
        {/* <a href="#" className="twitter"><i className="bx bxl-twitter" /></a>
        <a href="#" className="instagram"><i className="bx bxl-instagram" /></a>
        <a href="#" className="google-plus"><i className="bx bxl-skype" /></a>
        <a href="#" className="linkedin"><i className="bx bxl-linkedin" /></a> */}
      </div>
    </div>
    <nav id="navbar" className="nav-menu navbar">
      <ul>
        <li>
          <Link href="/#hero">
          <a  className="nav-link scrollto active"><BiHome/> <span>Home</span></a>
          </Link>
         </li>
        <li>
        <Link href="/#about">
        <a  className="nav-link scrollto"><BiUser/> <span>About</span></a>
        </Link>
         </li>
        {/* <li><a href="#resume" className="nav-link scrollto"><i className="bx bx-file-blank" /> <span>Resume</span></a></li> */}
        <li>
        <Link href="/#portfolio">
        <a  className="nav-link scrollto"><BiBookContent/> <span>Projects</span></a>
        </Link>
        </li>
        <li>
        {/* <Link href="/#services">
        <a  className="nav-link scrollto"><BiServer/> <span>Services</span></a>
        </Link> */}
       </li>
        <li>
        <Link href="/#contact">
        <a  className="nav-link scrollto"><BiEnvelope/><span>Contact</span></a>
        </Link>
        </li>
      </ul>
    </nav>
  </div>
</header>
            
        </>
    )
}

export default Header
