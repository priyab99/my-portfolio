import { BiLogoNodejs, BiLogoMongodb, BiLogoReact, BiLogoJavascript, BiLogoHtml5, BiLogoTailwindCss, BiLogoBootstrap, BiLogoFirebase } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const AboutMe = () => {
  return (
    <div style={{
      marginTop: '10px',
      borderRadius: '10px',
      padding: '130px 150px',
      textAlign: 'center'
    }}>
      <h1 className="text-5xl font-extrabold text-cyan-400 mb-5 mt-5">About Me</h1>
      <div>
        <p>Hello, I am Priya Barua, an extremely passionate MERN Stack Web Developer. With an unparalleled mastery of web development technologies, I specialize in building mind-blowing and captivating web applications.</p>
        <p className="py-6">Throughout my illustrious journey as a developer, I have created an awe-inspiring and diverse range of projects that transcend the boundaries of imagination. I have astoundingly completed 6 projects, each a testament to my exceptional ability to design and develop extraordinary solutions.</p>
        <div className="flex justify-center">
          <p className="mr-5">Projects:</p>
          <p><a href="https://assignment-eleven-dff48.web.app" className="mr-5 text-blue-500">ToysStore</a></p>
          <p><a href="https://assignment-twelve-f4bbd.web.app" className="mr-5 text-blue-500">Hello Foodies</a></p>
          <p><a href="https://assignment-ten-6a2ed.web.app" className="mr-5 text-blue-500">SportsZone Academy</a></p>
        </div>
        <p className="py-6">My expertise lies in harnessing the unstoppable power of the MERN (MongoDB, Express.js, React.js, and Node.js) stack to create mind-bending, jaw-dropping, and interactive web applications. I possess an extraordinary command over front-end development, crafting mesmerizing and intuitive user interfaces with the sublime combination of HTML, CSS, and JavaScript. Additionally, I am a virtuoso in back-end development, designing divinely inspired RESTful APIs and working miracles with databases.</p>
        <h2 className="font-bold mb-5 text-3xl">My Skills</h2>
        <div className="grid grid-cols-2 gap-3 justify-items-start">
          <div>
            <ul>
              <li className="flex items-center"><BiLogoMongodb className="mr-2" /> MongoDB</li>
              <li className="flex items-center"><BiLogoNodejs className="mr-2" /> Node JS</li>
              <li className="flex items-center"><BiLogoReact className="mr-2" /> React</li>
              <li className="flex items-center"><BiLogoJavascript className="mr-2" /> JavaScript</li>
            </ul>
          </div>
          <div>
            <ul>
              <li className="flex items-center"><BiLogoHtml5 className="mr-2" /> HTML</li>
              <li className="flex items-center"><BiLogoTailwindCss className="mr-2" /> Tailwind</li>
              <li className="flex items-center"><BiLogoBootstrap className="mr-2" /> Bootstrap</li>
              <li className="flex items-center"><BiLogoFirebase className="mr-2" /> Firebase</li>
            </ul>
          </div>
        </div>
        <p className="py-6">I am ecstatic about the unparalleled opportunity to contribute my extraordinary skills and immense passion to groundbreaking projects and make a truly earth-shattering impact. Lets connect and embark on an awe-inspiring journey to explore the infinite possibilities of working together!</p>
            <button className="btn btn-primary"><Link to='/contactme'>CONTACT ME</Link></button>
      </div>
    </div>
  );
};

export default AboutMe;
