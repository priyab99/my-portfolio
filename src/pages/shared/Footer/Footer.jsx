import img from '../../../assets/Saved Pictures/img1.jpg';
import { GrFacebook } from 'react-icons/gr';
import { BsLinkedin, BsGithub } from 'react-icons/bs';

const Footer = () => {
    const currentYear = new Date().getFullYear(); // Get the current year
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content mt-5">
                <div>
                    <img src={img} alt="" className="w-28 h-28" />
                    <p className='text-3xl text-cyan-400 font-bold'>Priya Barua</p>
                    <p className='text-lg font-bold'>A Dedicated MERN Stack Web Developer</p>
                    <p >Phone: +880 1819434416</p>
                    <p>Contact Me: priya.bd.9911@gmail.com</p> {/* Add your contact info here */}
                </div>
                <div>
                    <span className="footer-title text-white">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/priya.barua.129142?mibextid=ZbWKwL" className="href"><GrFacebook /></a>
                        <a href="https://www.linkedin.com/in/priya-barua-642834216" className="href"><BsLinkedin /></a>
                        <a href="https://github.com/priyab99" className="href"><BsGithub /></a>
                    </div>
                </div>
            </footer>
            <footer className="footer footer-center p-4 bg-base-300 text-base-content">
                <p>&copy; {currentYear} Priya Barua. All Rights Reserved.</p>
            </footer>
        </div>
    );
};

export default Footer;
