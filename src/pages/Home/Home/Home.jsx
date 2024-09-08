import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../../assets/Saved Pictures/img1.jpg';
import { Fade } from 'react-awesome-reveal';
import AboutMe from '../../About Me/AboutMe';
import Skills from '../../Skills/Skills';
import Projects from '../../Projects/Projects';
import ContactMe from '../../Contact Me/ContactMe';

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      <div id="home" className="hero min-h-screen">
        <div className="hero-content flex-col lg:flex-row-reverse items-center text-center lg:text-left p-6  shadow-lg">
          <div className="mb-5 lg:mb-0 lg:ml-10">
            <img src={image} className="w-full max-w-xs lg:max-w-sm rounded-lg shadow-2xl" alt="Profile" />
          </div>
          <div className="lg:pr-10">
            <Fade>
              <h1 className="text-4xl lg:text-5xl font-bold mb-5 text-blue-950">Hi, I am Priya Barua</h1>
            </Fade>
            <Fade cascade>
              <p className='text-lg font-sans'>I am a dedicated MERN Stack Web Developer.</p>
              <p className='text-lg font-sans'>I am a hard-working and passionate person.</p>
              <p className='text-lg font-sans'>Growing and improving day by day</p>
            </Fade>
            {/* Buttons with spacing */}
            <div className="flex flex-col lg:flex-row gap-4 mt-5">
              <button className="btn transition-transform transform hover:scale-105" style={{backgroundColor: "#1a2a5b"}}>
                <a href="#contactme" className='text-white'>Contact Me</a>
              </button>
              <button className="btn transition-transform transform hover:scale-105" style={{backgroundColor: "#1a2a5b"}}>
                <a href="Priya'sResume2.pdf" download className='text-white'>Get Resume</a>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Other sections remain unchanged */}
      <section id="aboutme">
        <AboutMe />
      </section>

      <section id="skills">
        <Skills />
      </section>

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