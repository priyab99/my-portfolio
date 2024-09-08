import { useRef, useState ,useEffect} from 'react';
import emailjs from '@emailjs/browser';
import { Typed } from "react-typed";


const ContactMe = () => {
  const el = useRef(null);
  const form = useRef();
  const [status, setStatus] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Contact Me"],
      typeSpeed: 150,
      backSpeed: 100,
      loop: true
    });

    return () => {
      typed.destroy();
    };
  }, []);
 

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID,
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
      <div className="text text-8xl sm:text-4xl md:text-5xl font-extrabold text-center text-blue-950 mb-10 mt-5 font-serif">
      <span ref={el}></span>
      </div>

        <form ref={form} onSubmit={sendEmail}>
          <div className='text-center mb-5'>
            <input
              type="text"
              placeholder='Your Name'
              name="from_name"
              className="rounded-lg shadow-lg px-4 py-3 w-full max-w-md border text-gray-800"
              required
            />
          </div>
          <div className='text-center mb-5'>
            <input
              type="email"
              placeholder='Your Email'
              name="from_email"
              className="rounded-lg shadow-lg px-4 py-3 w-full max-w-md border text-gray-800"
              required
            />
          </div>
          <div className='text-center mb-5'>
            <textarea
              name="message"
              placeholder='Message'
              className="rounded-lg shadow-lg px-4 py-3 w-full max-w-md border text-gray-800"
              rows="6"
              required
            />
          </div>
          <div className='text-center mb-5'>
            <input
              type="submit"
              className={`btn w-full max-w-md ${isSubmitting ? 'bg-blue-950 cursor-not-allowed' : ''} transition-transform transform hover:scale-105 text-white!`}
              style={isSubmitting ? {} : { backgroundColor: "#1a2a5b", color: 'white' }}
              value={isSubmitting ? "Sending..." : "Send"}
              disabled={isSubmitting}
            />
          </div>
          {status && <p className="text-center text-lg font-bold text-blue-950">{status}</p>}
        </form>
      </div>
    </section>
  );
};

export default ContactMe;
