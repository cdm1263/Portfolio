import styled from "styled-components";
import { motion } from "framer-motion";
import Links from "./Links";
import { sidebar } from "../../lib/variants";

interface SidebarProps {
  toggleTheme: () => void;
  isDarkMode: boolean;
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({ toggleTheme, isDarkMode, open, setOpen }: SidebarProps) => {
  const linkProps = { toggleTheme, isDarkMode, setOpen };
  const { wrapperVariant, backgroundVariant } = sidebar;

  return (
    <Wrapper animate={open ? "open" : "closed"} variants={wrapperVariant}>
      <LinkBackground variants={backgroundVariant}>
        <Links {...linkProps} />
      </LinkBackground>
    </Wrapper>
  );
};

const Wrapper = styled(motion.div)`
  position: absolute;
  top: 130px;
  right: 0;
  display: none;
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
