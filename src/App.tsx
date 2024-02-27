import styled from "styled-components";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import { useEffect, useRef, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/GlobalStyles.ts";
import media from "./styles/media.ts";
import Progressbar from "./components/progressbar/Progressbar.tsx";

const App = () => {
  const storedDarkMode = localStorage.getItem("isDarkMode");
  const portfolioRef = useRef(null);
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    storedDarkMode !== null ? JSON.parse(storedDarkMode) : true
  );
  const colors = isDarkMode ? theme.darkTheme : theme.lightTheme;

  const toggletheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={{ colors, media }}>
      <GlobalStyles />
      <Wrapper ref={portfolioRef}>
        <Progressbar ref={portfolioRef} />
        <Navbar toggleTheme={toggletheme} isDarkMode={isDarkMode} />
        <Header />
        <About />
        <Projects />
        <Contact />
      </Wrapper>
    </ThemeProvider>
  );
};

const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default App;
