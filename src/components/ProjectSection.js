import { Link } from "react-router-dom";
import header from "../assets/images/header.jpg";

const ProjectSection = () => {
  return (
    <section className="project-section">
      <div className="project-section-container">
        <h2>My Projects</h2>
        <div className="project-section-card-container">
          <article className="project-section-card">
            <img src={header} alt="Hacker news" />
            <div>
              <h3>Hacker News</h3>
              <p>
                This app allows user to search and read latest news from
                collective categories, it was develope using react.js
              </p>
            </div>
          </article>
          <article className="project-section-card">
            <img src={header} alt="Hacker news" />
            <div>
              <h3>Quiz App</h3>
              <p>
                This app fetches questions and answers from an api which is
                render to the DOM. This is another project developed during my
                period of learning React.
              </p>
            </div>
          </article>
          <article className="project-section-card">
            <img src={header} alt="Hacker news" />
            <div>
              <h3>Pagination</h3>
              <p>
                
              </p>
            </div>
          </article>
        </div>
        <div>
          <Link to="/projects" className="project-section-link">
            See More Projects
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ProjectSection;
