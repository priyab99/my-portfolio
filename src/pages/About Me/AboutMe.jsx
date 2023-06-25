import image from '../../assets/Saved Pictures/img1.jpg'
import icon1 from '../../assets/icons/mongo.png'
import icon2 from '../../assets/icons/react.png'
import icon3 from '../../assets/icons/nodejs.png'
import icon4 from '../../assets/icons/js.png'


const AboutMe = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-400">
                <div className="hero-content text-center">
                    <div className="w-9/12 text-left ">
                        <h1 className="text-5xl font-bold">About Me</h1>
                      <div className='grid grid-cols-2 gap-4'>
                     <div> <p className="py-6">Hello, I am Priya Barua, a passionate MERN Stack Web Developer. With a strong foundation in web development technologies, I specialize in building modern and responsive web applications.</p></div>
                      <div><img src={image} alt="" className='w-40 h-40'/></div>
                      </div>
                             <div className='grid grid-cols-2 gap-4'>
                                
                           <p className="py-6"> Throughout my journey as a developer, I have created a diverse range of projects that showcase my skills and creativity. I have successfully completed 6 projects, each demonstrating my ability to design and develop robust solutions.</p>

                           <div>
                            <ul>
                                <li className='text-3xl font-extrabold text-cyan-500'>Projects</li>
                                <li>SportsZone Academy</li>
                                <li>ToysStore</li>
                                <li>Chef-Recipe_Hunter</li>
                            </ul>
                           </div>
                             </div>

                         <div className='grid grid-cols-2 gap-4'>
                         <p className="py-6"> My expertise lies in utilizing the power of the MERN (MongoDB, Express.js, React.js, and Node.js) stack to create dynamic and interactive web applications. I am skilled in front-end development, crafting intuitive user interfaces with HTML, CSS, and JavaScript. Additionally, I have experience in back-end development, designing RESTful APIs and working with databases.</p>
                         <div>
                            <ul>
                                <li className='text-3xl font-extrabold text-cyan-500'>My Skills</li>
                                <li><div className='flex'><img src={icon1} alt="" className="src" /> <p>MongoDB</p></div></li>
                                <li><div className='flex'><img src={icon2} alt="" className="src" /> <p>React</p></div></li>
                                <li><div className='flex'><img src={icon3} alt="" className="src" /> <p>Node JS</p></div></li>
                                <li><div className='flex'><img src={icon4} alt="" className="src" /> <p>JavaScript</p></div></li>
                            </ul>
                           </div>
                    
                         </div>

                          <p className="py-6">  I am excited about the opportunity to contribute my skills and passion to new projects and make a positive impact. Lets connect and explore the possibilities of working together!</p>
                        
                        <button className="btn btn-primary">Contact Me</button>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutMe;