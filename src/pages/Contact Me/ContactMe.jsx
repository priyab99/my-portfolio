import { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_8rpvyzl', 'template_hf700z9', form.current, 'w5jXqV_9ZssrSTeca')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <div>
      <h2 className="text-center text-3xl text-cyan-500 font-extrabold mt-5 mb-5">
        Get In Touch
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='text-center mb-5'>
          <input
            type="text"
            placeholder='Your Name'
            name="user_name"
            className="rounded-lg px-4 py-2 w-64"
          />
        </div>
        <div className='text-center mb-5'>
          <input
            type="email"
            placeholder='Your Email'
            name="user_email"
            className="rounded-lg px-4 py-2 w-64"
          />
        </div>
        <div className='text-center mb-5'>
          <textarea
            name="message"
            placeholder='Message'
            className="rounded-lg px-4 py-2 w-64"
          />
        </div>
        <div className='text-center mb-5'>
          <input
            type="submit"
            className='btn w-64  btn-primary'
            value="Send"
          />
        </div>
      </form>
    </div>
  );
};

export default ContactMe;
