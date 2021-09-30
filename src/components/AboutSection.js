import { Link } from 'react-router-dom';
import myPix2 from '../assets/images/myPix2.jpg'

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-section-container">
        <div className='about-section-left'>
          <h2>About Me</h2>
          <p>
            Hi, am Michael. I am web developer and a cyber-security enthusaist. am confortable
          with using Frontend technology such as HTML, Javascript, CSS and the
          React Libray and Backend Technology such as Node.Js, MongoDb and Express.js
          </p>
          <div className='about-section-btn-container'>
              <button className='about-section-btn my-work-btn'><Link to='/projects'>My Work </Link></button>
              <button className='about-section-btn'><Link to='/about'>Read More</Link></button>
          </div>
        </div>
        <div className='about-section-right'>
            <img src={myPix2} alt='' />
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
