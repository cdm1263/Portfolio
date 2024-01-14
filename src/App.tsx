import styled from "styled-components";
import About from "./components/about/About";
import Navbar from "./components/navbar/Navbar";
import Projects from "./components/projects/Projects";

const App = () => {
  return (
    <Wrapper>
      <Navbar />
      <About />
      <Projects />
    </Wrapper>
  );
};

const Wrapper = styled.div``;

export default App;
