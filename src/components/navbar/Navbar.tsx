import styled from "styled-components";
import { motion } from "framer-motion";
import { hover } from "../../lib/variants";

const Navbar = () => {
  return (
    <Wrapper>
      <Container>
        <Title>Dongmin's Portfolio</Title>
        <ButtonContainer>
          <Link whileHover={hover.link} href="#about">
            About
          </Link>
          <Link whileHover={hover.link} href="#projects">
            Projects
          </Link>
          <Link whileHover={hover.link} href="#contact">
            Contact
          </Link>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  width: 100vw;
  height: 100px;
  position: fixed;
  // 임시
  background-color: yellowgreen;
  opacity: 0.7;
`;

const Container = styled.div`
  height: 100%;
  margin: auto;
  display: flex;
  padding: 0 20px;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

const Link = styled(motion.a)`
  text-decoration: none;
  color: inherit;
  opacity: 0.7;
  font-weight: 900;
`;

export default Navbar;
