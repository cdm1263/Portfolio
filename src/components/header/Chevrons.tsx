import styled from "styled-components";
import { IoChevronDown } from "react-icons/io5";
import { motion } from "framer-motion";
import { chevron } from "../../lib/variants";

const Chevrons = () => {
  const { wrapperVariant, iconVariant } = chevron;

  return (
    <Wrapper variants={wrapperVariant} initial="initial" animate="animate">
      <ChevronIcon variants={iconVariant}>
        <ChevronDown />
      </ChevronIcon>
      <ChevronIcon variants={iconVariant}>
        <ChevronDown />
      </ChevronIcon>
      <ChevronIcon variants={iconVariant}>
        <ChevronDown />
      </ChevronIcon>
    </Wrapper>
  );
};
const Wrapper = styled(motion.div)`
  display: flex;
  width: fit-content;
  flex-direction: column;
  align-self: center;
  position: absolute;
  right: 0;
  left: 0;
  margin: auto;
  bottom: 10%;
`;

const ChevronIcon = styled(motion.i)`
  line-height: 0%;
`;

const ChevronDown = styled(IoChevronDown)`
  scale: 2;
`;

export default Chevrons;
