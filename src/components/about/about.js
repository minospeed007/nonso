import Me from '../../assests/me_about.jpg';
import './about.css';
import { FaAward } from 'react-icons/fa';
import { FiUsers } from 'react-icons/fi';
import { VscFolderLibrary } from 'react-icons/vsc';
import { Fade } from "react-awesome-reveal";


const About = () => {
  

 
  return (
    <Fade direction='right'>

    <section  >  
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        
          <div className="about__image">
            <img className="about__me-image" src={Me} alt="" />
          </div>
       <div className='about-div'>
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experience</h5>
              <small>3yrs+ working Experience</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>6+ Clients</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>10+ Projects</small>
            </article>
            </div>
            <div className="about__p">
            <div className="about__p-div">
              <p className="about__ps">
                Do you have a brilliant idea waiting to be brought to life? Let's make it happen!
                Together, we'll turn your dream into a reality, leaving you as a satisfied and fulfilled client.
              </p>
              <div className='btn-div'>
          <a href="#contact" className="btn btn-primary">
           <p> Let's Talk</p>
          </a>
          </div>
            </div>
            
        </div>
        </div>
      </div>
    </section>
 </Fade>

  );
};

export default About;
