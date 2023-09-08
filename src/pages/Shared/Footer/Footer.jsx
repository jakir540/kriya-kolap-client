import { GrYoga } from 'react-icons/gr';
import "./Footer.css"

const Footer = () => {
  return (
    <>
   
<footer className="footer p-10 text-black ">


      <div>
        <GrYoga className='text-6xl'></GrYoga>
        <p className='font-semibold'>
          Kriya Kolap
          <br />
          Providing reliable center since 2012
        </p>
      </div>
      <div>
        <span className="footer-title text-black">Services</span>
        <a className="link link-hover">Fitness</a>
        <a className="link link-hover">Weight Loss</a>
        <a className="link link-hover">Marketing</a>
        <a className="link link-hover">Advertisement</a>
      </div>
      <div>
        <span className="footer-title">Company</span>
        <a className="link link-hover">About us</a>
        <a className="link link-hover">Contact</a>
        <a className="link link-hover">Instructors</a>
        <a className="link link-hover">Classes</a>
      </div>
      <div>
        <span className="footer-title">Legal</span>
        <a className="link link-hover">Terms of use</a>
        <a className="link link-hover">Privacy policy</a>
        <a className="link link-hover">Cookie policy</a>
      </div>
    </footer>
    </>
    
  );
};

export default Footer;




