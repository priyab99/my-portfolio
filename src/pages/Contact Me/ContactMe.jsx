import { GrFacebook } from 'react-icons/gr';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const ContactMe = () => {
  return (
    <div>
      <h2 className='text-center text-3xl text-cyan-500 font-extrabold mb-5'>Contact Me</h2>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <div className=" lg:text-left mb-8 lg:mb-0">
            <h1 className="text-5xl font-bold">Lets Communicate</h1>
            <p className="py-6">You Can Contact Me Anytime.</p>
            <div className="grid grid-flow-col gap-2">
              <a href="https://www.facebook.com/priya.barua.129142?mibextid=ZbWKwL" className="href">
                <GrFacebook></GrFacebook>
              </a>
              <a href="https://www.linkedin.com/in/priya-barua-642834216" className="href">
                <BsLinkedin></BsLinkedin>
              </a>
              <a href="https://github.com/priyab99" className="href">
                <BsGithub></BsGithub>
              </a>
            </div>
          </div>
          <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <div className="card-body">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Name</span>
                </label>
                <input type="text" name="name" placeholder="name" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Your Email</span>
                </label>
                <input type="email" name="email" placeholder="email" className="input input-bordered" />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Message</span>
                </label>
                <textarea placeholder="message" name="message" className="input input-bordered"></textarea>
              </div>
              <div className="form-control mt-6">
              <input className="btn btn-primary" type="submit" value="Send" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
