import styled from "styled-components";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";
import { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme.ts";
import GlobalStyles from "./styles/GlobalStyles.ts";

const App = () => {
  const storedDarkMode = localStorage.getItem("isDarkMode");
  const [isDarkMode, setIsDarkMode] = useState<boolean>(
    storedDarkMode !== null ? JSON.parse(storedDarkMode) : true
  );
  const currentTheme = isDarkMode ? theme.darkTheme : theme.lightTheme;

  const toggletheme = () => {
    setIsDarkMode((prev) => !prev);
  };

  useEffect(() => {
    localStorage.setItem("isDarkMode", JSON.stringify(isDarkMode));
  }, [isDarkMode]);

  return (
    <ThemeProvider theme={currentTheme}>
      <GlobalStyles />
      <Wrapper>
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
