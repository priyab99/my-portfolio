import React from 'react';
import { Bounce } from 'react-awesome-reveal';

const Services = () => {
    return (
      <section id="about" className="mt-10 rounded-lg px-6 sm:px-12 md:px-16 lg:px-20 xl:px-28 text-center">
         <h3 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-5 mt-5">Services</h3>
            <div className="flex justify-center">
                
          <div className='grid grid-cols-1 md:grid-cols-3 gap-6'>
            <Bounce triggerOnce>
              <div className="card w-full max-w-sm bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                  <h2 className="card-title">Front-End Development</h2>
                  <p>Building interactive user interfaces using modern front-end frameworks.</p>
                </div>
                <figure>
                  <img src="https://img.freepik.com/free-vector/engineer-developer-with-laptop-tablet-code-cross-platform-development-cross-platform-operating-systems-software-environments-concept-bright-vibrant-violet-isolated-illustration_335657-312.jpg?size=626&ext=jpg&semt=ais" alt="Front-End Development" />
                </figure>
              </div>
            </Bounce>

            <Bounce triggerOnce>
              <div className="card w-full max-w-sm bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                  <h2 className="card-title" style={{textAlign: 'center'}}>Responsive Design</h2>
                  <p>Crafting mobile-friendly websites that adapt to different devices and screen sizes.</p>
                </div>
                <figure>
                  <img src="https://img.freepik.com/free-vector/flat-design-responsive-website-design_23-2149489189.jpg?size=626&ext=jpg&semt=ais" alt="Responsive Design" />
                </figure>
              </div>
            </Bounce>

            <Bounce triggerOnce>
              <div className="card w-full max-w-sm bg-base-100 shadow-xl mx-auto">
                <div className="card-body">
                  <h2 className="card-title" style={{textAlign: 'center'}}>Full-Stack Development</h2>
                  <p>Handling both front-end and back-end development using the MERN stack.</p>
                </div>
                <figure>
                  <img src="https://img.freepik.com/free-vector/web-development-seo-concept-design-cartoon-character-flat-style_1362-164.jpg?size=626&ext=jpg&semt=ais" alt="Full-Stack Development" />
                </figure>
              </div>
            </Bounce>
          </div>
        
        </div>
        </section>
    );
};

export default Services;