import styled, { css } from "styled-components";
import { ProjectTypes } from "../../lib/types";
import { IoCheckmark } from "react-icons/io5";
import useCalculateInnerWidth from "../../hooks/useCalculateInnerWidth";

interface ProjectProps {
  project: ProjectTypes;
}

const Project = ({
  project: { id, title, term, skills, desc, url, github },
}: ProjectProps) => {
  const innerWidth = useCalculateInnerWidth();
  const isMobile = innerWidth <= 768;

  return (
    <Wrapper>
      <Title>{title}</Title>
      <Term>{term}</Term>
      {id % 2 || isMobile ? (
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

const Title = styled.h1`
  font-size: 45px;
  font-weight: 800;

  ${({ theme }) =>
    theme.media.mobile(css`
      font-size: 25px;
    `)}
`;

const Term = styled.h2`
  color: ${({ theme }) => theme.colors.text[200]};
  font-size: 25px;

  ${({ theme }) =>
    theme.media.mobile(css`
      font-size: 15px;
    `)}
`;

const Detail = styled.div`
  display: flex;
  flex: 1;
  gap: 30px;
  padding: 20px 0;

  ${({ theme }) =>
    theme.media.mobile(css`
      flex-direction: column;
    `)}
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

  ${({ theme }) =>
    theme.media.mobile(css`
      font-size: 18px;
    `)}
`;

const StyledHr = styled.hr`
  margin: 30px 0;
`;

const DescriptionBottom = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 30px;

  ${({ theme }) =>
    theme.media.mobile(css`
      gap: 15px;
    `)}
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

  ${({ theme }) =>
    theme.media.mobile(css`
      font-size: 15px;
    `)}
`;

const InfoContent = styled.h3`
  flex: 3;
  display: flex;
  gap: 10px;
  flex-wrap: wrap;

  a {
    color: ${({ theme }) => theme.colors.primary[200]};
  }
`;

export default Project;
