import styled from "styled-components";
import generateProjectArray from "../../lib/generateProjectArray";
import Project from "./Project";

const Projects = () => {
  const projectArray = generateProjectArray();
  console.log(projectArray);
  return (
    <Wrapper id="projects">
      {projectArray.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default Projects;
