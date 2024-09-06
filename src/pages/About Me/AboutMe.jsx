import img1 from '../../assets/Saved Pictures/experience.png';
import img2 from '../../assets/Saved Pictures/education.png';

const AboutMe = () => {
  return (
    <section id="about" className="mt-10 rounded-lg px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 text-center">
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-5 mt-5">About Me</h1>

      <div className="section-container flex flex-col md:flex-row justify-center items-center">
        {/* About Details Section */}
        <div className="w-full p-5">
          <div className="flex flex-col md:flex-row justify-center gap-5 md:gap-10 mb-6">
            {/* Experience Section */}
            <div className="p-4 shadow-lg border border-cyan-300 text-center rounded-lg flex-1 flex flex-col items-center">
              <img src={img1} className="w-14 sm:w-16 md:w-20 mb-4" alt="Experience" />
              <h3 className="text-xl sm:text-2xl font-bold mt-3">Experience</h3>
              <p className="text-base sm:text-lg">1+ years <br />Frontend Development</p>
            </div>
            {/* Education Section */}
            <div className="p-4 shadow-lg border border-cyan-300 text-center rounded-lg flex-1 flex flex-col items-center">
              <img src={img2} className="w-14 sm:w-16 md:w-20 mb-4" alt="Education" />
              <h3 className="text-xl sm:text-2xl font-bold mt-3">Education</h3>
              <p className="text-base sm:text-lg">Studying B.Sc. in Computer Science<br />2020 - running</p>
            </div>
          </div>

          <div className="text-container text-left">
            <p className="text-base sm:text-lg">
              I am Priya Barua, a dedicated MERN Stack Web Developer with a strong focus on building efficient and scalable web applications. With over 6 projects completed, I prioritize clean, maintainable code and user-centered design. I thrive on learning and implementing new technologies to deliver innovative solutions.
            </p>
          </div>
        </div>
      </div>

      <p className="py-6 text-base sm:text-lg">I'm excited to collaborate on impactful projects. Let's connect and explore how we can work together!</p>
    </section>
  );
};

export default AboutMe;
