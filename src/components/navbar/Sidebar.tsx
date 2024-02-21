import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Links from "./Links";
import { sidebar } from "../../lib/variants";
import { IoMenu } from "react-icons/io5";

interface SidebarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Sidebar = ({ toggleTheme, isDarkMode }: SidebarProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const linkProps = { toggleTheme, isDarkMode, setOpen };
  const { wrapperVariant, backgroundVariant } = sidebar;

  return (
    <Wrapper>
      <ToggleSidebar
        $open={open}
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        <IoMenu />
      </ToggleSidebar>
      <LinkWrapper animate={open ? "open" : "closed"} variants={wrapperVariant}>
        <LinkBackground variants={backgroundVariant}>
          <Links {...linkProps} />
        </LinkBackground>
      </LinkWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
`;

const ToggleSidebar = styled.button<{ $open: boolean }>`
  cursor: pointer;
  width: 45px;
  height: 45px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 25px;
  border-radius: 50%;
  border: none;
  transition: background-color 0.2s ease;
  background-color: ${({ $open, theme }) =>
    $open ? theme.colors.bg[200] : "transparent"};
  color: ${({ theme }) => theme.colors.text[100]};

  &:hover {
    background-color: ${({ theme }) => theme.colors.bg[200]};
  }
`;

const LinkWrapper = styled(motion.div)`
  position: absolute;
  top: 70px;
  right: -33px;
`;

const LinkBackground = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 15px;
  padding: 15px 10px;
  backdrop-filter: blur(30px);
  box-shadow: 2px 7px 15px 8px rgba(0, 0, 0, 0.3);
`;

export default Sidebar;
