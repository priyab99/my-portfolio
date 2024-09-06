import { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const ContactMe = () => {
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(  import.meta.env.VITE_EMAILJS_SERVICE_ID, 
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID, 
      form.current, 
      import.meta.env.VITE_EMAILJS_USER_ID)
      .then((result) => {
        console.log(result.text);
        setStatus('Thank You!');
        form.current.reset(); // Clear form fields
      }, (error) => {
        console.log(error.text);
        setStatus('Failed to send message. Please try again.');
      })
      .finally(() => {
        setIsSubmitting(false);
      });
  };

  return (
    <section id='contactme'>
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-cyan-400 mb-6 mt-5 text-center">
        Get In Touch
      </h2>
      <form ref={form} onSubmit={sendEmail}>
        <div className='text-center mb-5'>
          <input
            type="text"
            placeholder='Your Name'
            name="from_name"
            className="rounded-lg px-4 py-3 w-full max-w-md border border-cyan-300"
            required
          />
        </div>
        <div className='text-center mb-5'>
          <input
            type="email"
            placeholder='Your Email'
            name="from_email"
            className="rounded-lg px-4 py-3 w-full max-w-md border border-cyan-300"
            required
          />
        </div>
        <div className='text-center mb-5'>
          <textarea
            name="message"
            placeholder='Message'
            className="rounded-lg px-4 py-3 w-full max-w-md border border-cyan-300"
            rows="6"
            required
          />
        </div>
        <div className='text-center mb-5'>
          <input
            type="submit"
            className={`btn w-full max-w-md ${isSubmitting ? 'border-cyan-300 cursor-not-allowed' : 'btn-accent'} transition-transform transform hover:scale-105`}
            value={isSubmitting ? "Sending..." : "Send"}
            disabled={isSubmitting}
          />
        </div>
        {status && <p className="text-center text-lg font-bold text-cyan-500">{status}</p>}
      </form>
    </div>
    </section>
  );
};

export default ContactMe;
