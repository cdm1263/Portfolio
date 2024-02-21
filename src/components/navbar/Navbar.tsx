import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { nav, title } from "../../lib/variants";
import useCalculateInnerWidth from "../../hooks/useCalculateInnerWidth";
import Sidebar from "./Sidebar";
import { animateScroll as scroll } from "react-scroll";
import Links from "./Links";

interface NavBarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavBarProps) => {
  const innerWidth = useCalculateInnerWidth();
  const isMobile = innerWidth <= 768;
  const linkProps = { toggleTheme, isDarkMode };
  const { titleVariant } = title;
  const { mobileNavVariant, navVariant } = nav;

  return (
    <Wrapper>
      <Container
        variants={isMobile ? mobileNavVariant : navVariant}
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
        {isMobile ? (
          <Sidebar {...linkProps} />
        ) : (
          <DesktopLinks>
            <Links {...linkProps} />
          </DesktopLinks>
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

const DesktopLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

export default Navbar;
