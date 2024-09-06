import { Link } from 'react-router-dom';
import image from '../../../assets/Saved Pictures/img1.jpg';
import { Fade } from 'react-awesome-reveal';
import AboutMe from '../../About Me/AboutMe';
import Services from '../../Services/Services';
import Skills from '../../Skills/Skills';
import Projects from '../../Projects/Projects';
import ContactMe from '../../Contact Me/ContactMe';

const Home = () => {
  

  return (
    <div>
      {/* Hero Section */}
      <div id="home" className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse items-center text-center lg:text-left">
          <img src={image} className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl mb-5 lg:mb-0 lg:ml-10" alt="Profile" />
          <div>
            <Fade>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5">Hi, I am Priya Barua</h1>
            </Fade>
            <Fade cascade>
              <p>I am a dedicated MERN Stack Web Developer.</p>
              <p>I am a hard-working and passionate person.</p>
              <p>Growing and improving day by day</p>
            </Fade>
            {/* Buttons with spacing */}
            <div className="flex flex-col lg:flex-row gap-4 mt-5">
              <button className="btn btn-accent">
              <a href="#contactme">Contact Me</a>
              </button>
              <button className="btn btn-accent">
                <a href="Priya'sResume2.pdf" download>Get Resume</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About Me Section */}
      <section id="aboutme">
        <AboutMe />
      </section>

      {/* Services Section *

         <section id="services">
        <Services />
      </section>
      /}
   

      {/* Skills Section */}
      <section id="skills">
        <Skills />
      </section>

      {/* Projects Section */}
      <section id="projects">
        <Projects />
      </section>
      <section id="contactme">
        <ContactMe />
      </section>

      
     
    </div>
  );
};

export default Home;
