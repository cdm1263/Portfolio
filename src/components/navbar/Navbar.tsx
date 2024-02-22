import styled, { css } from "styled-components";
import { motion } from "framer-motion";
import { nav, title, link } from "../../lib/variants";
import useCalculateInnerWidth from "../../hooks/useCalculateInnerWidth";
import Sidebar from "./Sidebar";
import { animateScroll as scroll } from "react-scroll";
import Links from "./Links";
import SidebarToggleButton from "./SidebarToggleButton";
import { useState } from "react";

interface NavBarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Navbar = ({ toggleTheme, isDarkMode }: NavBarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const innerWidth = useCalculateInnerWidth();
  const isMobile = innerWidth <= 768;
  const { mobileNavVariant, navVariant } = nav;
  const { titleVariant } = title;
  const { linkVariant } = link;
  const linkProps = { toggleTheme, isDarkMode };
  const sidebarProps = { open, setOpen };

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
        <motion.div variants={linkVariant}>
          {isMobile ? (
            <SidebarToggleButton {...sidebarProps} />
          ) : (
            <DesktopLinks>
              <Links {...linkProps} />
            </DesktopLinks>
          )}
        </motion.div>
      </Container>
      {isMobile && <Sidebar {...linkProps} {...sidebarProps} />}
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  display: flex;
  align-items: center;
  position: relative;
  width: 95%;
  height: 150px;
  position: fixed;
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
  justify-content: space-between;
  backdrop-filter: blur(5px);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
  background-color: ${({ theme }) => {
    const hexToRgba = (hex: string, opacity: number) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);

      return `rgba(${r}, ${g}, ${b}, ${opacity})`;
    };

    return hexToRgba(theme.colors.bg[300], 0.7);
  }};

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
