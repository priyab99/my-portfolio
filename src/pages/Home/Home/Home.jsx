import { Link } from 'react-router-dom';
import image from '../../../assets/Saved Pictures/img1.jpg';
import { Fade, Slide, Bounce } from 'react-awesome-reveal';
import mongo from '../../../assets/icons/mongo.png';
import react from '../../../assets/icons/react.png';
import node from '../../../assets/icons/nodejs.png';
import js from '../../../assets/icons/js.png';
import '../Home/Home.css';

const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img src={image} className="max-w-sm rounded-lg shadow-2xl ml-10" />
          <div>
            <Fade>
              <h1 className="text-5xl font-bold mb-5">
                Hi, I am Priya Barua
              </h1>
            </Fade>
            <Fade cascade>
              <p>I am a dedicated MERN Stack Web Developer.</p>
              <p>I am a hard-working and passionate person.</p>
              <p>Growing and improving day by day</p>
            </Fade>
            <button className="btn btn-primary mt-5">
              <Link to="/contactme">CONTACT ME</Link>
            </button>
          </div>
        </div>
      </div>

      <section className="what-i-do">
        <h3 className="text-center text-3xl font-extrabold text-cyan-400 mb-8">
          My Skills
        </h3>
        <div className="skill-container">
          <Slide direction="up" triggerOnce>
            <div className="skill">
              <img src={js} alt="" />
              <p className="skill-title">Vanilla Javascript</p>
              <p className="skill-description--">
                I have experience and proficiency in Vanilla JavaScript and can
                create dynamic and interactive web applications.
              </p>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={200}>
            <div className="skill">
              <img src={react} alt="" />
              <p className="skill-title">React</p>
              <p className="skill-description--">
                I am skilled in building user interfaces using React and can
                develop modern, responsive, and scalable web applications.
              </p>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={400}>
            <div className="skill">
              <img src={node} alt="" />
              <p className="skill-title">Node Js</p>
              <p className="skill-description--">
                I have experience working with Node.js and can develop
                server-side applications, REST APIs, and perform database
                operations.
              </p>
            </div>
          </Slide>
          <Slide direction="up" triggerOnce delay={600}>
            <div className="skill">
              <img src={mongo} alt="" />
              <p className="skill-title">Mongodb</p>
              <p className="skill-description--">
                I am familiar with MongoDB and can design and implement database
                schemas, perform CRUD operations, and work with Mongoose.
              </p>
            </div>
          </Slide>
        </div>
      </section>
      <section>
        <h3 className="text-center text-3xl font-extrabold text-cyan-400 mb-8 mt-20">
          Services
        </h3>
        <div className="grid grid-cols-3 gap-2 ml-14">
          <Bounce triggerOnce>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Front-End Development</h2>
                <p>
                  Building interactive and engaging user interfaces using modern
                  front-end technologies and frameworks.
                </p>
              </div>
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/engineer-developer-with-laptop-tablet-code-cross-platform-development-cross-platform-operating-systems-software-environments-concept-bright-vibrant-violet-isolated-illustration_335657-312.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                  alt="Front-End Development"
                />
              </figure>
            </div>
          </Bounce>

          <Bounce triggerOnce>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Responsive Design</h2>
                <p>
                  Crafting visually appealing and mobile-friendly websites and
                  applications that adapt to different devices and screen sizes.
                </p>
              </div>
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?size=626&ext=jpg&ga=GA1.2.928138083.1680619194&semt=ais"
                  alt="Responsive Design"
                />
              </figure>
            </div>
          </Bounce>

          <Bounce triggerOnce>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">Full-Stack Development</h2>
                <p>
                  Building end-to-end web applications, handling both front-end
                  and back-end development using the MERN stack.
                </p>
              </div>
              <figure>
                <img
                  src="https://img.freepik.com/free-vector/web-development-seo-concept-design-cartoon-character-flat-style_1362-164.jpg?size=626&ext=jpg&ga=GA1.1.928138083.1680619194&semt=ais"
                  alt="Full-Stack Development"
                />
              </figure>
            </div>
          </Bounce>
        </div>
      </section>
    </div>
  );
};

export default Home;

