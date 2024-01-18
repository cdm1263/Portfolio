import styled from "styled-components";
import { motion } from "framer-motion";
import { link } from "../../lib/variants";

const Navbar = () => {
  const { hover, tap } = link;

  return (
    <Wrapper>
      <Container>
        <Title>Dongmin's Portfolio</Title>
        <ButtonContainer>
          <Link whileHover={hover} whileTap={tap} href="/">
            Home
          </Link>
          <Link whileHover={hover} whileTap={tap} href="#about">
            About
          </Link>
          <Link whileHover={hover} whileTap={tap} href="#projects">
            Projects
          </Link>
          <Link whileHover={hover} whileTap={tap} href="#contact">
            Contact
          </Link>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 100vw;
  height: 150px;
  position: fixed;
  opacity: 0.7;
`;

const Container = styled.div`
  height: 80px;
  margin: auto;
  display: flex;
  flex: 1;
  padding: 0 50px;
  border-radius: 50px;
  max-width: 1200px;
  align-items: center;
  box-sizing: border-box;
  background-color: #454545;
  justify-content: space-between;
`;

const Title = styled.h1`
  font-size: 30px;
`;

const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
`;

const Link = styled(motion.a)`
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  color: inherit;
  border-radius: 8px;
  opacity: 0.7;
  font-weight: 900;
  box-sizing: border-box;
`;

export default Navbar;
