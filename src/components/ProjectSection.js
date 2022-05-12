import { Link } from "react-router-dom";
import styled from "styled-components";
import { useAppContext } from "../context/appContext";

const ProjectSection = () => {
  const { projects } = useAppContext();
  return (
    <Wrapper className="project-section">
      <div className="project-section-container">
        <h2>My Projects</h2>
        <div className="project-section-card-container">
          {projects.slice(0, 3).map((project) => {
            const {
              _id: id,
              imageUrl,
              appUrl,
              title,
              githubUrl,
              description,
            } = project;
            return (
              <article className="project-section-card" key={id}>
                <img src={imageUrl} alt={title} />
                <div className="section-content">
                  <div>
                  <h3>{title}</h3>
                  <p className="desc">{description}</p>
                  </div>
                  <div className="project-link">
                    <a
                      className="btn"
                      href={githubUrl}
                      target="_blank"
                      rel="noreferrer"
                    >
                      Github
                    </a>
                    {appUrl && (
                      <a
                        className="btn site-btn"
                        href={appUrl}
                        target="_blank"
                        rel="noreferrer"
                      >
                        view site
                      </a>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>
        <div>
          <Link to="/projects" className="project-section-link">
            See More Projects
          </Link>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-content {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100%;
  }
  .project-link {
    width: 100%;
    bottom: 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2rem;
    padding: 1rem;
    
  }
  .site-btn {
    background: transparent;
    border: 1px solid #ff7300;
  }
 @media (max-width: 768px){
  .project-link{
    grid-template-columns: 1fr;
    gap: 1rem;
  }
 }
`
export default ProjectSection;
