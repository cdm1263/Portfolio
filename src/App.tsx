import styled from "styled-components";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";
import Contact from "./components/contact/Contact";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <Header />
      <About />
      <Projects />
      <Contact />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  position: relative;
`;

export default App;
