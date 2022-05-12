import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";

import "../css/projectPage.css";
import NavMenu from "../components/NavMenu";
import FooterSection from "../components/FooterSection";
import { useAppContext } from "../context/appContext";
import Loading from "../components/Loading";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Project = () => {
  const { filteredproject, isLoading, filterProject } = useAppContext();

  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
  };

  useEffect(() => {
    filterProject(searchText);
    // eslint-disable-next-line
  }, [searchText]);

  return (
    <Wrapper>
      <NavMenu />
      <div className="project-section-container">
        <h1>My Project Works</h1>
        <div className="form-container">
          <form className="search-form">
            <input
              type="text"
              placeholder="Enter search details"
              value={searchText}
              onChange={handleChange}
            />
            <MdSearch className="search-icon" />
          </form>
        </div>
        {isLoading && <Loading center />}
        <div className="projectPage-card-container">
          {filteredproject.map((data) => {
            const {
              _id: id,
              title: appName,
              imageUrl: image,
              description: desc,
              githubUrl,
              appUrl,
            } = data;
            return (
              <article key={id} className="project-section-card">
                <img src={image} alt={appName} />
                <div className="section-content">
                  <div>
                    <h3>{appName}</h3>
                    <p>{desc}</p>
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
        <Link className="btn add-btn" to="/login">
          Add More Project
        </Link>
      </div>
      <FooterSection />
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
  .add-btn {
    margin-top: 3rem;
    padding: 0.75rem 1rem;
  }
`;

export default Project;
