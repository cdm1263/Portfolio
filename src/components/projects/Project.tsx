import styled from "styled-components";
import { ProjectTypes } from "../../lib/types";

interface ProjectProps {
  project: ProjectTypes;
}

const Project = ({ project }: ProjectProps) => {
  return (
    <Wrapper>
      <Title>{project.title}</Title>
      {project.skills.map((skill: string) => (
        <Skill key={skill}>{skill}</Skill>
      ))}
      <Description>{project.desc}</Description>
    </Wrapper>
  );
};

const Wrapper = styled.section``;
const Title = styled.h1``;
const Skill = styled.h2``;
const Description = styled.p``;

export default Project;
