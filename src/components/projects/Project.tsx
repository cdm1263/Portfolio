import styled from "styled-components";
import { ProjectTypes } from "../../lib/types";
import { IoCheckmark } from "react-icons/io5";

interface ProjectProps {
  project: ProjectTypes;
}

const Project = ({ project }: ProjectProps) => {
  const { id, title, term, skills, desc, url, github } = project;

  return (
    <Wrapper>
      <ProgressBarArea />
      <Title>{title}</Title>
      <Term>{term}</Term>
      {id % 2 ? (
        <Detail>
          <ImageContainer></ImageContainer>
          <Description>
            <DescriptionTop>{desc}</DescriptionTop>
            <StyledHr />
            <DescriptionBottom>
              <InfoWrapper>
                <InfoTitle>
                  <IoCheckmark /> Skills
                </InfoTitle>
                <InfoContent>
                  {skills.map((skill: string) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </InfoContent>
              </InfoWrapper>
              <InfoWrapper>
                <InfoTitle>
                  <IoCheckmark />
                  URL
                </InfoTitle>
                <InfoContent>
                  <a href={url}>{url}</a>
                </InfoContent>
              </InfoWrapper>
              <InfoWrapper>
                <InfoTitle>
                  <IoCheckmark />
                  Github
                </InfoTitle>
                <InfoContent>
                  <a href={github}>{github}</a>
                </InfoContent>
              </InfoWrapper>
            </DescriptionBottom>
          </Description>
        </Detail>
      ) : (
        <Detail>
          <Description>
            <DescriptionTop>{desc}</DescriptionTop>
            <StyledHr />
            <DescriptionBottom>
              <InfoWrapper>
                <InfoTitle>
                  <IoCheckmark />
                  Skills
                </InfoTitle>
                <InfoContent>
                  {skills.map((skill: string) => (
                    <span key={skill}>{skill}</span>
                  ))}
                </InfoContent>
              </InfoWrapper>
              <InfoWrapper>
                <InfoTitle>
                  <IoCheckmark />
                  URL
                </InfoTitle>
                <InfoContent>
                  <a href={url}>{url}</a>
                </InfoContent>
              </InfoWrapper>
              <InfoWrapper>
                <InfoTitle>
                  <IoCheckmark />
                  Github
                </InfoTitle>
                <InfoContent>
                  <a href={github}>{github}</a>
                </InfoContent>
              </InfoWrapper>
            </DescriptionBottom>
          </Description>
          <ImageContainer></ImageContainer>
        </Detail>
      )}
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
  height: 30px;
`;

const Title = styled.h1`
  font-size: 45px;
  font-weight: 800;
`;

const Term = styled.h2`
  color: ${({ theme }) => theme.text[200]};
  font-size: 25px;
`;

const Detail = styled.div`
  display: flex;
  flex: 1;
  gap: 30px;
  padding: 20px 0;
`;

const ImageContainer = styled.div`
  flex: 1;
  background-color: lightblue;
`;

const Description = styled.div`
  width: 100%;
  flex: 1;
`;

const DescriptionTop = styled.p`
  display: flex;
  flex-direction: column;
  font-size: 22px;
  line-height: 130%;
  justify-content: space-between;
`;

const StyledHr = styled.hr`
  margin: 30px 0;
`;

const DescriptionBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const InfoWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const InfoTitle = styled.h2`
  display: flex;
  flex: 1;
  font-weight: 800;
  font-size: 20px;
  gap: 5px;
  letter-spacing: 3px;
`;

const InfoContent = styled.h3`
  flex: 3;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.primary[200]};
  }
`;

export default Project;
