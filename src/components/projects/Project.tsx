import styled from "styled-components";
import { ProjectTypes } from "../../lib/types";

interface ProjectProps {
  project: ProjectTypes;
}

const Project = ({ project }: ProjectProps) => {
  const { id, title, term, skills, desc } = project;

  return (
    <Wrapper>
      <ProgressBarArea />
      <Title>{title}</Title>
      <Term>{term}</Term>
      <SkillsContainer>
        {skills.map((skill: string) => (
          <Skill key={skill}>{skill}</Skill>
        ))}
      </SkillsContainer>
      <DescriptionWrapper>
        {id % 2 ? (
          <>
            <ImageContainer></ImageContainer>
            <Description>{desc}</Description>
          </>
        ) : (
          <>
            <Description>{desc}</Description>
            <ImageContainer></ImageContainer>
          </>
        )}
      </DescriptionWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const ProgressBarArea = styled.div`
  height: 60px;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const Term = styled.h2``;

const SkillsContainer = styled.div`
  display: flex;
`;

const Skill = styled.h2``;

const DescriptionWrapper = styled.div`
  display: flex;
  flex: 1;
  gap: 30px;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-color: yellow;
`;

const Description = styled.p`
  display: flex;
  flex: 1;
  font-size: 20px;
`;

export default Project;
