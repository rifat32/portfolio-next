import React from 'react';


const AboutSection = () => {
    return (
       <section id="resume" className="resume">
  <div className="container">
    <div className="section-title">
      <h2>Resume</h2>
      {/* <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p> */}
    </div>
    <div className="row">
      <div className="col-lg-6" data-aos="fade-up">
        <h3 className="resume-title">Sumary</h3>
        <div className="resume-item pb-0">
          <h4>Rifat Al Ashwad</h4>
          <p><em>Experienced fullstack web developer.</em></p>
          <ul>
            <li>Sultangoanj, Rayer Bazar, Dhaka, 1209</li>
            <li>+880 1771034383</li>
            <li>drrifatalashwad0@gmail.com@example.com</li>
          </ul>
        </div>
        <h3 className="resume-title">Education</h3>
        <div className="resume-item">
          <h4>Bsc in Cse (running)</h4>
          {/* <h5>2015 - 2016</h5> */}
          <p><em>National University of Bangladesh</em></p>
          {/* <p>Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend</p> */}
        </div>
        {/* <div className="resume-item">
          <h4>Bachelor of Fine Arts &amp; Graphic Design</h4>
          <h5>2010 - 2014</h5>
          <p><em>Rochester Institute of Technology, Rochester, NY</em></p>
          <p>Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem Earum molestiae consequatur neque etlon sader mart dila</p>
        </div> */}
      </div>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
        <h3 className="resume-title">Professional Experience</h3>
        <div className="resume-item">
          <h4>Laravel developer</h4>
          <h5>2021 - Present</h5>
          <p><em>Mohammadpur Dhaka</em></p>
          <ul>
            <li>Debugging software</li>
            <li>Creating new software</li>
            <li>Working on existiong software</li>
            <li>Api integration</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</section>


    )
}

export default AboutSection
