const Resume = () => {
    return (
      <div>
        <h2 className="text-center text-3xl text-cyan-500 font-extrabold mt-5 mb-5">
          A Summary Of My Resume
        </h2>
        <div className="flex justify-between">
          <div className="w-1/2 p-5">
            <h3 className="font-bold text-lg text-blue-50 mb-3">My Skills</h3>
            <div>
              <h4 className="font-bold text-2xl">Expertise</h4>
              <h5>I am really strong with them</h5>
              <p>HTML, CSS, Tailwind, Bootstrap, React, Query, JavaScript, ES6, MongoDB</p>
            </div>
            <hr className="my-3" />
            <div>
              <h4 className="font-bold text-2xl">Comfortable</h4>
              <h5>Trying to be more comforable with them.</h5>
              <p>Firebase, Rest APIs, ExpressJS, JWT, C, MySQL</p>
            </div>
            <hr className="my-3" />
            <div>
              <h4 className="font-bold text-2xl">Familiar</h4>
              <h5>Trying to know them more</h5>
              <p>Node, C++, Java, Stripe, Python</p>
            </div>
          </div>
          <div className="w-1/2 p-5">
            <h3 className="font-bold text-lg text-blue-50 mb-3">My Projects</h3>
            <div>
              <h4 className="font-bold text-2xl">ToysStore</h4>
              <h5>Users can buy and sell toys online</h5>
              <div className="grid grid-flow-col gap-4">
                        <a href="https://assignment-eleven-dff48.web.app/" className="href text-blue-500">Live</a>
                        <a href="https://github.com/priyab99/toy-marketplace" className="href text-blue-500 ">Client</a>
                        <a href="https://github.com/priyab99/toy-marketplace-server" className="href text-blue-500">Server</a>
                    </div>
            </div>
            <hr className="my-3" />
            <div>
              <h4 className="font-bold text-2xl">SportsZone Academy</h4>
              <h5>Offers various classes for students to enroll in</h5>
              <div className="grid grid-flow-col gap-4">
                        <a href="https://assignment-twelve-f4bbd.web.app/" className="href text-blue-500">Live</a>
                        <a href="https://github.com/priyab99/Summer-Camp-Client" className="href text-blue-500">Client</a>
                        <a href="https://github.com/priyab99/Summer-camp-server" className="href text-blue-500">Server</a>
                    </div>
            </div>
            <hr className="my-3" />
            <div>
              <h4 className="font-bold text-lg text-blue-50 mb-3">Education</h4>
              <h5>BSc in Computer Science and Engineering(2020-running)</h5>
              <p>University Of Chittagong</p>
            </div>
          </div>
        </div>
        <div className="text-center mb-10 mt-5">
        <button className="btn btn-primary"> 
          <a href="Priya'sResume2.pdf" download>Get Resume</a>
        </button>
      </div>
      </div>
    );
  };
  
  export default Resume;
  