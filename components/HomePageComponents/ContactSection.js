
import {BiMobile,BiEnvelope} from 'react-icons/bi';
import {IoLocationOutline} from 'react-icons/io5';
import ContactForm from '../forms/ContactForm';
const ContactSection = () => {
    return (
       <section id="contact" className="contact">
  <div className="container">
    <div className="section-title">
      <h2>Contact</h2>
      <p>Feel free to contact me.</p>
    </div>
    <div className="row" data-aos="fade-in">
      <div className="col-lg-5 d-flex align-items-stretch">
        <div className="info">
          <div className="address">
          <IoLocationOutline/>
            <h4>Location:</h4>
            <p>32/10 Sultangoanj, RayerBazar, Dkaha 1207</p>
          </div>
          <div className="email">
          <BiEnvelope/>
            <h4>Email:</h4>
            <p>drrifatalashwad0@gmail.com</p>
          </div>
          <div className="phone">
          <BiMobile/>
            <h4>Call:</h4>
            <p>+8801771034383</p>
          </div>
          <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3652.052462328528!2d90.3587939775878!3d23.745508529103294!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755bf4409d3e6c1%3A0xe1556702c78ae66c!2sBaitul%20Asad%20Jame%20Mosque!5e0!3m2!1sen!2sbd!4v1629439916179!5m2!1sen!2sbd" frameBorder={0} style={{border: 0, width: '100%', height: 290}} allowFullScreen />
        </div>
      </div>
     <ContactForm/>
    </div>
  </div>
</section>

    )
}

export default ContactSection
