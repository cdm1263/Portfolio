import styled from "styled-components";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { header } from "../../lib/variants";
import Chevrons from "./Chevrons";

const Header = () => {
  const { textVariant } = header;
  const ref = useRef(null);
  const isInView = useInView(ref);

  return (
    <Wrapper>
      <Container
        ref={ref}
        variants={textVariant}
        initial="initial"
        animate={isInView && "animate"}
      >
        <Title variants={textVariant}>Dongmin</Title>
        <Intro variants={textVariant}>Frontend Developer Portfolio</Intro>
      </Container>
      <Chevrons />
    </Wrapper>
  );
};

const Wrapper = styled(motion.section)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 80px;
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-content: center;
  gap: 80px;
`;

const Title = styled(motion.h1)`
  font-size: 150px;
  font-weight: 800;
  text-align: center;
`;

const Intro = styled(motion.h2)`
  font-size: 30px;
  text-align: center;
`;

export default Header;
