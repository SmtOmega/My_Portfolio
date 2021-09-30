import myPix2 from "../assets/images/myPix2.jpg";
import "../css/AboutPage.css";
const AboutPage = () => {
  return (
    <div>
      <div className="about-page-container">
        <section className="top-section">
          <div className="about-page-left-section">
            <p>
              Hell0, I Am <span className="my_name">Michael</span>
            </p>
            <h2>Web Developer / Cyber Security Trainee</h2>
            <div>
              <p>
                I am web developer and a cyber-security enthusaist. am
                confortable with using Frontend technology such as HTML,
                Javascript, CSS and the React Libray and Backend Technology such
                as Node.Js, MongoDb and Express.js
              </p>
              <p>
                In 2017 I co-founded a startup 
                 <a href="https://traindemy.com/" target="_blank" rel="noreferrer" >
                  Traindemy
                 </a>
                 a vocational Training platform that allows user to learn and
                practice variety of vocational training. I quit my position in
                2020 to focus more on cybersecurity as well as web developement Training
              </p>
            </div>
          </div>
          <div className="about-page-right-section">
            <img src={myPix2} alt="I am Michael" />
          </div>
        </section>
        <section className="skills-section">
          <h2>My Skills</h2>
          <article>
            <div className="skills">
              <h3>Frontend</h3>
              <div className="skills-items">
                <div>
                  <p>HTML</p>
                </div>
                <div>
                  <p>CSS</p>
                </div>
                <div>
                  <p>JAVASCRIPT</p>
                </div>
                <div>
                  <p>REACT</p>
                </div>
              </div>
            </div>
            <div className="skills">
              <h3>Backend</h3>
              <div className="skills-items">
                <div>
                  <p>NODE JS</p>
                </div>
                <div>
                  <p>EXPRESS JS</p>
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </div>
  );
};

export default AboutPage;
