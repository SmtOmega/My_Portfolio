import ProjectInfo from "./ProjectInfo";
import { FaCalendarAlt } from "react-icons/fa";
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";
import styled from "styled-components";
import moment from "moment";
import { useAppContext } from "../context/appContext";

const ProjectCard = ({ title, _id, createdAt, description }) => {

    const {setEditProject, deleteProject} = useAppContext()
  const date = moment(createdAt).format("MM Do YY");
  return (
    <Wrapper>
      <header>
        <div className="main-icon">{title.charAt(0)}</div>
        <div className="info">
          <h3>{title}</h3>
        </div>
      </header>
      <div className="content">
        <div className="content-center">
          <ProjectInfo icon={<FaCalendarAlt />} text={date} />
          <ProjectInfo icon={<MdDescription />} text={description} />
        </div>
      <footer>
        <div className="actions">
          <Link to="/add-project" className="btn edit-btn" onClick={() => setEditProject(_id)}>
            Edit
          </Link>
          <button className="btn delete-btn" type="button" onClick={() => deleteProject(_id)}>
            delete
          </button>
        </div>
      </footer>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  background: white;
  border-radius: 4px;
  display: grid;
  grid-template-rows: auto 1fr;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1),
    0 2px 4px -1px rgba(0, 0, 0, 0.06);

  header {
    padding: 1rem 1.5rem;
    border-bottom: 1px solid #d9e2ec;
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }
  .main-icon {
    width: 60px;
    height: 60px;
    border-radius: 4px;
    background: #2cb1bc;
    display: grid;
    place-items: center;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    margin-right: 2rem;
  }
  .info h3 {
    color: gray;
    text-transform: capitalize;
  }
  .content {
    padding: 1rem 1.5rem;
  }
  .content-center {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 0.5rem;
    @media (min-width: 576px) {
      grid-template-columns: 1fr 1fr;
    }
    @media (min-width: 992px) {
      grid-template-columns: 1fr;
    }
    @media (min-width: 1120px){
        grid-template-columns: 1fr 1fr;
    }
  }
  footer {
      margin-top: 1rem;
  }
  .edit-btn, .delete-btn {
    cursor: pointer;
    letter-spacing: 1px;
    height: 30px;
  }
  .edit-btn {
      color: #0f5132;
      background: #d1e7dd;
      margin-right: 0.25rem;
  }
  .delete-btn {
    color: #842029;
    background: #f8d7da;
  }
`;

export default ProjectCard;
