import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { nav, title } from "../../lib/variants";
import NavLink from "./NavLink";
import useCalculateInnerWidth from "../../hooks/useCalculateInnerWidth";
import Sidebar from "./Sidebar";
import { animateScroll as scroll } from "react-scroll";

interface NavBarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavBarProps) => {
  const innerWidth = useCalculateInnerWidth();
  const { titleVariant } = title;
  const { mobileNavVariant, navVariant } = nav;

  return (
    <Wrapper>
      <Container
        variants={innerWidth <= 768 ? mobileNavVariant : navVariant}
        initial="initial"
        animate="animate"
      >
        <Title
          variants={titleVariant}
          initial="initial"
          animate="animate"
          onClick={() => {
            scroll.scrollToTop({ smooth: true, duration: 500 });
          }}
        >
          Dongmin's Portfolio
        </Title>
        {innerWidth <= 768 ? (
          <Sidebar toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        ) : (
          <NavLink toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        )}
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
  border-radius: 50px;
  max-width: 1200px;
  align-items: center;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.colors.bg[300]};
  justify-content: space-between;

  ${({ theme }) =>
    theme.media.mobile(css`
      height: 70px;
    `)}
`;

const Title = styled(motion.h1)`
  font-size: 30px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: ${({ theme }) => theme.colors.accent[100]};
  }

  ${({ theme }) =>
    theme.media.mobile(css`
      font-size: 22px;
    `)}
`;

export default Navbar;
