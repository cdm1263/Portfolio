import styled from "styled-components";
import { motion } from "framer-motion";
import { link, nav, title } from "../../lib/variants";

const Navbar = () => {
  const { hover, tap, linkVariant } = link;
  const { titleVariant } = title;
  const { navVariant } = nav;

  return (
    <Wrapper>
      <Container variants={navVariant} initial="initial" animate="animate">
        <Title variants={titleVariant} initial="initial" animate="animate">
          Dongmin's Portfolio
        </Title>
        <ButtonContainer>
          <Link
            variants={linkVariant}
            whileHover={hover}
            initial="initial"
            animate="animate"
            whileTap={tap}
            href="/"
          >
            Home
          </Link>
          <Link
            variants={linkVariant}
            whileHover={hover}
            initial="initial"
            animate="animate"
            whileTap={tap}
            href="#about"
          >
            About
          </Link>
          <Link
            variants={linkVariant}
            whileHover={hover}
            initial="initial"
            animate="animate"
            whileTap={tap}
            href="#projects"
          >
            Projects
          </Link>
          <Link
            variants={linkVariant}
            whileHover={hover}
            initial="initial"
            animate="animate"
            whileTap={tap}
            href="#contact"
          >
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

const Container = styled(motion.div)`
  height: 80px;
  margin: auto;
  display: flex;
  flex: 1;
  padding: 0 50px;
  border-radius: 50px;
  max-width: 1200px;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.bg[300]};
  justify-content: space-between;
`;

const Title = styled(motion.h1)`
  font-size: 30px;
`;

const ButtonContainer = styled(motion.div)`
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
