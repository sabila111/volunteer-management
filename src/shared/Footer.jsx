import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className="bg-black">
            <footer className="footer max-w-7xl mx-auto text-white  p-10 mt-10  ">
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Terms of use</a>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
<footer className="footer text-white max-w-7xl mx-auto   border-base-300 border-t px-10 py-4">
  <aside className="grid-flow-col items-center">
 
    <p className="btn btn-ghost text-xl font-semibold">
    <span className="text-4xl font-bold text-indigo-600 -mr-2 mb-3">Kind</span>Hive
    </p>
  </aside>
  <nav className="md:place-self-center md:justify-self-end">
    <div className="grid grid-flow-col gap-4 text-2xl">
      <Link to={'https://www.facebook.com/sharmin.sabila.520'}><button><FaFacebook /></button></Link>
      <Link to={'https://www.linkedin.com/in/sharmin-sharker-443865231/'}><button><FaLinkedin /></button></Link>
      <Link to={'https://github.com/sabila111'}><button><FaGithub /></button></Link>
      
    </div>
  </nav>
</footer>
        </div>
    );
};

export default Footer;