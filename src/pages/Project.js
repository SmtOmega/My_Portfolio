import { useEffect, useState } from "react";
import { MdSearch } from "react-icons/md";
import { dummyData } from "../data/dataFile";
import "../css/projectPage.css";
const Project = () => {
  const [projectData, setProjectData] = useState(dummyData);
  const [searchText, setSearchText] = useState("");

  const handleChange = (e) => {
    e.preventDefault();
    setSearchText(e.target.value);
    if (!e.target.value > 0) {
      setProjectData(dummyData);
    }
  };

  useEffect(() => {
    if (searchText === "") return;

    setProjectData(() =>
      projectData.filter((item) =>
        item.appName.toLowerCase().match(searchText.toLowerCase())
      )
    );
    // eslint-disable-next-line
  }, [searchText]);
  console.log(searchText);
  return (
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
      <div className="projectPage-card-container">
        {projectData.map((data) => {
          const { id, appName, image, desc } = data;
          return (
            <article key={id} className="project-section-card">
              <img src={image} alt={appName} />
              <div>
                <h3>{appName}</h3>
                <p>{desc}</p>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
};

export default Project;
