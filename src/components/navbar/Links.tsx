import styled from "styled-components";
import { motion } from "framer-motion";
import { IoMoon, IoSunny } from "react-icons/io5";
import { DarkModeTypes } from "../../lib/types";
import { Link as ScrollLink } from "react-scroll";
import { link } from "../../lib/variants";
import useCalculateInnerWidth from "../../hooks/useCalculateInnerWidth";

interface LinksProps {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  toggleTheme: () => void;
  isDarkMode: boolean;
}

const Links = ({ setOpen, isDarkMode, toggleTheme }: LinksProps) => {
  const innerWidth = useCalculateInnerWidth();
  const isMobile = innerWidth <= 768;
  const { tap, mobileLinkVariant } = link;
  const links = ["About", "Projects", "Contact"];
  const themeToggleProps = isMobile
    ? { variants: mobileLinkVariant }
    : { initial: "initial", animate: "animate" };
  const linkProps = { ...themeToggleProps, whileTap: tap };

  return (
    <>
      {links.map((link) => (
        <Link key={link} {...linkProps}>
          <ScrollLink
            to={link.toLowerCase()}
            smooth={true}
            duration={100}
            onClick={() => {
              setOpen ? setOpen((prev) => !prev) : null;
            }}
          >
            {link}
          </ScrollLink>
        </Link>
      ))}
      <ThemeToggle onClick={toggleTheme} {...themeToggleProps}>
        <Moon $isDarkMode={isDarkMode} />
        <Sun $isDarkMode={isDarkMode} />
      </ThemeToggle>
    </>
  );
};

const Link = styled(motion.div)`
  cursor: pointer;
  display: block;
  padding: 15px 20px;
  border-radius: 10px;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.text[200]};
  font-size: 20px;
  font-weight: 900;
  box-sizing: border-box;

  &:hover {
    color: ${({ theme }) => theme.colors.text[100]};
    transition: color 0.5s;
  }
`;

const ThemeToggle = styled(motion.button)`
  padding: 0 20px;
  height: 50px;
  width: 100%;
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text[200]};
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover {
    color: ${({ theme }) => theme.colors.text[100]};
    transition: color 0.5s;
  }

  &:focus {
    outline: none;
  }
`;

const Moon = styled(IoMoon)<DarkModeTypes>`
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 0 : 1)};
  font-size: 30px;
  transition: opacity 0.2s;
  position: absolute;
`;

const Sun = styled(IoSunny)<DarkModeTypes>`
  opacity: ${({ $isDarkMode }) => ($isDarkMode ? 1 : 0)};
  font-size: 30px;
  transition: opacity 0.3s;
  position: absolute;
`;

export default Links;
