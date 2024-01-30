import styled from "styled-components";

const About = () => {
  return (
    <Wrapper id="about">
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 40px;
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

export default About;
