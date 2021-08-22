import React from 'react';
import profileImg from '../../assets/img/profile-img.jpg';
import Image from 'next/image'
import {BiChevronRight} from 'react-icons/bi'

const AboutSection = () => {
    return (
      <section id="about" className="about">
  <div className="container">
    <div className="section-title">
      <h2>About</h2>
      <p>I am a back-end web developer as well as a front-end web developer.I know several front-end and back-end web development frameworks. I have the ability to learn anything.  Always learning and pushing boundaries.</p>
    </div>
    <div className="row">
      <div className="col-lg-4" data-aos="fade-right">
        <Image src={profileImg} className="img-fluid" alt="profile-pic" quality={50} placeholder="blur"  layout="responsive" />
      </div>
      <div className="col-lg-8 pt-4 pt-lg-0 content align-self-center" data-aos="fade-left">
        <h3>Back-End & Front-End Web Developer.
</h3>
        <p className="font-italic">
          I am a full stack web developer. And Very strong at the back-end web development 
        </p>
        <div className="row">
          <div className="col-lg-6">
            <ul>
              <li><BiChevronRight></BiChevronRight><strong>Birthday:</strong> <span>18 January 2001</span></li>
              <li><BiChevronRight></BiChevronRight><strong>Website:</strong> <span>masterrifat.netlify.app</span></li>
              {/* <li><i className="bi bi-chevron-right" /> <strong>Phone:</strong> <span>+123 456 7890</span></li> */}
              <li><BiChevronRight></BiChevronRight> <strong>City:</strong> <span>Dhaka, Bangladesh</span></li>
            </ul>
          </div>
          <div className="col-lg-6">
            <ul>
              <li><BiChevronRight></BiChevronRight><strong>Age:</strong> <span>22</span></li>
              {/* <li><i className="bi bi-chevron-right" /> <strong>Degree:</strong> <span>Master</span></li> */}
              <li><BiChevronRight></BiChevronRight><strong>email:</strong> <span>drrifatalashwad0@gmail.com</span></li>
              <li><BiChevronRight></BiChevronRight><strong>Freelance:</strong> <span>Do not like</span></li>
            </ul>
          </div>
        </div>
        {/* <p>
          Officiis eligendi itaque labore et dolorum mollitia officiis optio vero. Quisquam sunt adipisci omnis et ut. Nulla accusantium dolor incidunt officia tempore. Et eius omnis.
          Cupiditate ut dicta maxime officiis quidem quia. Sed et consectetur qui quia repellendus itaque neque. Aliquid amet quidem ut quaerat cupiditate. Ab et eum qui repellendus omnis culpa magni laudantium dolores.
        </p> */}
      </div>
    </div>
  </div>
</section>

    )
}

export default AboutSection
