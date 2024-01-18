import styled from "styled-components";

const Header = () => {
  return (
    <Wrapper>
      <Intro>Frontend Developer</Intro>
      <Title>Dongmin Portfolio</Title>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 30px;
`;

const Intro = styled.h2`
  font-size: 70px;
  text-align: center;
`;

const Title = styled.h1`
  font-size: 60px;
  text-align: center;
`;

export default Header;
