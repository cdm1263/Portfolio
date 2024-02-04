import styled from "styled-components";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { IoMail } from "react-icons/io5";

const About = () => {
  return (
    <Wrapper id="about">
      <IntroContainer>
        <Title>
          끊임없이 성장하고 변화에 도전하는 <br />
          프론트엔드 개발자 <Point>차동민</Point>입니다
        </Title>
        <Introduction>
          개발자와의 <Point>유연한 소통</Point>과 동시에 사용자에게{" "}
          <Point>최상의 경험</Point>을 제공하는,
          <br />
          <Point>징검다리</Point> 같은 개발자를 목표로 하고 있습니다. <br />
          개발을 단순한 기술 습득이나 적용으로 여기지 않고, 그 자체를 즐기고
          있습니다.
        </Introduction>
        <SNS>
          <Icon
            href="https://github.com/cdm1263"
            data-info="Github"
            target="_blank"
          >
            <FaGithub />
          </Icon>
          <Icon
            href="https://www.linkedin.com/in/dongmincha/"
            data-info="LinkedIn"
            target="_blank"
          >
            <FaLinkedin />
          </Icon>
          <Icon href="#contact" data-info="cdm1263@gmail.com">
            <IoMail />
          </Icon>
        </SNS>
      </IntroContainer>
      <ImageContainer></ImageContainer>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  align-items: center;
`;

const IntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 40px;
  white-space: nowrap;
`;

const ImageContainer = styled.div`
  display: flex;
  flex: 1;
`;

const Title = styled.h2`
  font-size: 50px;
  line-height: 140%;
`;

const Point = styled.strong`
  font-weight: 900;
  font-size: 1.3em;
  color: ${({ theme }) => theme.accent[100]};
`;

const Introduction = styled.p`
  font-size: 22px;
  font-weight: 300;
  line-height: 180%;
`;

const SNS = styled.div`
  display: flex;
  margin-top: 20px;
  gap: 20px;
  align-self: center;
`;

const Icon = styled.a`
  display: flex;
  position: relative;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  padding: 5px;
  border-radius: 7px;
  transition: background-color 0.2s ease;

  &::before {
    content: attr(data-info);
    position: absolute;
    top: 70px;
    background-color: ${({ theme }) => theme.bg[300]};
    color: ${({ theme }) => theme.text[200]};
    padding: 5px;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.2s ease, visibility 0.3s ease;
  }

  &:hover {
    background-color: ${({ theme }) => theme.bg[300]};

    &::before {
      visibility: visible;
      opacity: 1;
    }

    svg {
      color: ${({ theme }) => theme.accent[200]};
    }
  }

  svg {
    color: ${({ theme }) => theme.text[200]};
    width: 40px;
    height: 40px;
  }
`;

export default About;
