import styled from "styled-components";
import { motion } from "framer-motion";
import { useState } from "react";
import Links from "./Links";
import { sidebar } from "../../lib/variants";

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
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      >
        icon
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

const ToggleSidebar = styled.button`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  border: none;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.text[100]};
  color: ${({ theme }) => theme.colors.text[100]};
`;

const LinkWrapper = styled(motion.div)`
  position: absolute;
  top: 70px;
  right: -30px;
`;

const LinkBackground = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default Sidebar;
