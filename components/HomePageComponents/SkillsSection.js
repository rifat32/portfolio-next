import {ProgressBar} from 'react-bootstrap'
const firstColumn = [
  {
    tech:"Laravel (Framework of php)",
    now:100
  },
  {
    tech:"Express (Framework of nodeJs)",
    now:85
  },
  {
    tech:"Spring Boot (Framework of Java)",
    now:65
  },
  {
    tech:"NestJs Framework of nodeJs) ",
    now:80
  }
]
const secondColumn =  [
  {
    tech:"Typescript (superset of javascript)",
    now:85
  },
  {
    tech:"ReactJs (Framework of javascript)",
    now:100
  },
  {
    tech:"NextJs (Framework of reactJs)",
    now:100
  },
  {
    tech:"GatsbyJs ( Framework of reactJs)",
    now:65
  }
]
const SkillsSection = () => {
    return (
      <section id="skills" className="skills section-bg">
  <div className="container">
    <div className="section-title">
      <h2>Skills</h2>
      <p>{"I have learnt from w3schools.com, udemy videos , youtube playlists and free code camp. I know 8 programming languages. These are Java, Php, Typescript, Javascript, C, C++, Python and Sql. To see projects that I have created, scroll down to the portfolio section"}</p>
    </div>
    <div className="row skills-content">
      <div className="col-lg-6" data-aos="fade-up">
        {
          firstColumn.map((el,indx) => ( <div key={indx} className="progress">
          <span className="skill">{el.tech}</span>
          <div className="progress-bar-wrap">

            <ProgressBar now={el.now} variant="info"  />
          </div>
        </div>))
        }
        
      </div>
      <div className="col-lg-6" data-aos="fade-up" data-aos-delay={100}>
      {
          secondColumn.map((el,indx) => ( <div key={indx} className="progress">
          <span className="skill">{el.tech}</span>
          <div className="progress-bar-wrap">

            <ProgressBar now={el.now} variant="info"  />
          </div>
        </div>))
        }
      
      </div>
    </div>
  </div>
</section>

    )
}

export default SkillsSection
