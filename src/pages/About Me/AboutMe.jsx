import img1 from '../../assets/Saved Pictures/experience.png';
import img2 from '../../assets/Saved Pictures/education.png';
import { Typed } from "react-typed";
import { useEffect, useRef } from 'react';
import { Fade, Slide } from 'react-awesome-reveal';

const AboutMe = () => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["About Me"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <section id="about" className="mt-10 rounded-lg px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 text-center">
      {/* Section Title */}
      <div className="text text-8xl sm:text-4xl md:text-5xl font-extrabold text-blue-950 mb-10 mt-5 font-serif">
        <span ref={el}></span>
      </div>

      <div className="section-container flex flex-col md:flex-row justify-center items-center">
        {/* About Details Section */}
        <div className="w-full p-5">
          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 mb-6">
            {/* Experience Section */}
           <div className="p-6 shadow-lg border text-center rounded-lg flex-1 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
             <Fade direction="right" > <img src={img1} className="w-16 md:w-20 mb-4" alt="Experience" />
              <h3 className="text-2xl font-bold mt-3 text-blue-950">Experience</h3>
              <p className="text-lg mt-2">
                1+ years <br />
                Frontend Development
              </p></Fade>
            </div>

            {/* Education Section */}
            <div className="p-6 shadow-lg border text-center rounded-lg flex-1 flex flex-col items-center hover:shadow-xl transition-shadow duration-300">
            <Fade direction="left">  <img src={img2} className="w-16 md:w-20 mb-4" alt="Education" />
              <h3 className="text-2xl font-bold mt-3 text-blue-950">Education</h3>
              <p className="text-lg mt-2">
                B.Sc. in Computer Science <br />
                2020 - Present
              </p></Fade>
            </div>
          </div>

          {/* Professional Bio */}
          <div className="text-container text-left bg-gray-100 p-6 rounded-lg shadow-md">
            <p className="text-lg font-sans sm:text-lg leading-relaxed">
              Hi, I'm Priya Barua, a passionate MERN Stack Web Developer with over a year of experience in crafting efficient and scalable web applications. I've successfully completed 6+ projects, focusing on clean code and user-centered design. I constantly explore new technologies and strive to deliver innovative solutions for every project I take on.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="py-6 mt-6 text-lg font-sans sm:text-lg text-gray-700">
        I'm eager to collaborate on impactful projects. Let's connect and create something remarkable together!
      </div>
    </section>
  );
};

export default AboutMe;
