import styled from "styled-components";
import { motion } from "framer-motion";
import { link, nav, title } from "../../lib/variants";
import { IoMoon, IoSunny } from "react-icons/io5";
import { DarkModeTypes } from "../../lib/types";

interface NavBarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavBarProps) => {
  const { tap, linkVariant } = link;
  const { titleVariant } = title;
  const { navVariant } = nav;
  const links = ["Home", "About", "Projects", "Contact"];

  return (
    <Wrapper>
      <Container variants={navVariant} initial="initial" animate="animate">
        <Title variants={titleVariant} initial="initial" animate="animate">
          Dongmin's Portfolio
        </Title>
        <ButtonContainer>
          {links.map((link) => (
            <Link
              key={link}
              variants={linkVariant}
              initial="initial"
              animate="animate"
              whileTap={tap}
              href={link === "Home" ? "/" : `#${link.toLowerCase()}`}
            >
              {link}
            </Link>
          ))}
          <ThemeToggle
            variants={linkVariant}
            initial="initial"
            animate="animate"
            onClick={toggleTheme}
          >
            <Moon $isDarkMode={isDarkMode} />
            <Sun $isDarkMode={isDarkMode} />
          </ThemeToggle>
        </ButtonContainer>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  width: 95%;
  height: 150px;
  position: fixed;
  opacity: 0.7;
  z-index: 1;
  font-family: "Flipahaus-V2";
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
  align-items: center;
  gap: 10px;
`;

const Link = styled(motion.a)`
  display: block;
  padding: 15px 20px;
  text-decoration: none;
  border-radius: 8px;
  color: ${({ theme }) => theme.text[200]};
  font-size: 20px;
  font-weight: 900;
  box-sizing: border-box;

  &:hover {
    color: ${({ theme }) => theme.text[100]};
    transition: color 0.5s;
  }
`;

const ThemeToggle = styled(motion.button)`
  width: 30px;
  height: 30px;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.text[200]};
  cursor: pointer;

  &:hover {
    color: ${({ theme }) => theme.text[100]};
    transition: color 0.5s;
  }

  &:focus {
    outline: none;
  }
`;

const Moon = styled(IoMoon)<DarkModeTypes>`
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 0 : 1)};
  transform: translate(-50%, -50%) scale(2);
  transition: opacity 0.2s;
  position: absolute;
`;

const Sun = styled(IoSunny)<DarkModeTypes>`
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 1 : 0)};
  transform: translate(-50%, -50%) scale(2);
  transition: opacity 0.3s;
  position: absolute;
`;

export default Navbar;
