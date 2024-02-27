import styled from "styled-components";
import generateProjectArray from "../../lib/generateProjectArray";
import Project from "./Project";
import { motion } from "framer-motion";

const Projects = () => {
  const projectArray = generateProjectArray();

  return (
    <Wrapper id="projects">
      {projectArray.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
`;

export default Projects;
