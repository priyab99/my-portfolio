import img from '../../../assets/Saved Pictures/img1.jpg'
import { GrFacebook } from 'react-icons/gr';
import { BsLinkedin,BsGithub } from 'react-icons/bs';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
                <div>
                   <img src={img} alt="" className="w-28 h-28" />
                    <p>Priya Barua<br />A Dedicated MERN Stack Web Developer</p>
                </div>
                <div>
                    <span className="footer-title">Social</span>
                    <div className="grid grid-flow-col gap-4">
                        <a href="https://www.facebook.com/priya.barua.129142?mibextid=ZbWKwL" className="href"><GrFacebook></GrFacebook></a>
                        <a href="https://www.linkedin.com/in/priya-barua-642834216" className="href"><BsLinkedin></BsLinkedin></a>
                        <a href="https://github.com/priyab99" className="href"><BsGithub></BsGithub></a>
                    </div>
                </div>
            </footer>
        </div>
    );
};

export default Footer;