import styled from "styled-components";
import { useAppContext } from "../context/appContext";
import ProjectCard from "./ProjectCard";
import Loading from "./Loading";

const ProjectCardContainer = () => {
  const { isLoading, projects } = useAppContext();

  if (isLoading) {
    return <Loading center />;
  }

  if (projects.length === 0) {
    return (
      <Wrapper>
        <h2>No Project to display...</h2>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <h4>All Projects</h4>
      <div className="projects">
        {projects.map((project) => {
          return <ProjectCard key={project._id} {...project} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .projects {
    display: grid;
    grid-template-columns: 1fr;
    row-gap: 2rem;
  }

  @media (min-width: 992px) {
    .projects {
      grid-template-columns: 1fr 1fr;
      gap: 1rem;
    }
  }
`;

export default ProjectCardContainer;
