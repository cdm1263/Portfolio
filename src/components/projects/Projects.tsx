import styled from "styled-components";
import generateProjectArray from "../../lib/generateProjectArray";
import Project from "./Project";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";

const Projects = () => {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const projectArray = generateProjectArray();

  return (
    <Wrapper id="projects" ref={ref}>
      <ProgressBar style={{ scaleX, transformOrigin: "0%" }} />
      {projectArray.map((project) => (
        <Project key={project.id} project={project} />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: relative;
`;

const ProgressBar = styled(motion.div)`
  position: sticky;
  background-color: #fff;
  height: 10px;
  width: 100%;
  max-width: 1200px;
  top: 160px;
  left: 0;
  right: 0;
  margin: auto;
`;

export default Projects;
