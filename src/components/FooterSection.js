import { Link } from "react-router-dom";
import {FaTwitter, FaFacebook, FaGithub} from 'react-icons/fa'

const FooterSection = () => {
  return (
    <footer className='footer-section'>
      <div className="footer-container">
        <ul className='footer-link'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
          <li>
            <Link to='projects'>Projects</Link>
          </li>
          <li>
            <Link to='/contact'>Contacts</Link>
          </li>
        </ul>
        <ul className='footer-link'>
          <li >
            <Link to='/policy'>Privacy Policy</Link>
          </li>
        </ul>
        <ul className='social-links'>
          <li><a href='https://www.facebook.com/' target='_blank' rel="noreferrer"> <FaFacebook /></a></li>
          <li><a href='https://github.com/SmtOmega' target='_blank' rel="noreferrer"> <FaGithub /></a></li>
          <li><a href='https://twitter.com/smtomega' target='_blank' rel="noreferrer"> <FaTwitter /></a></li>
        </ul>
      </div>
    </footer>
  );
};


export default FooterSection