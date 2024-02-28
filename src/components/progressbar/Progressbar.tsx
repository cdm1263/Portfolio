import { useScroll, useSpring, motion } from "framer-motion";
import styled from "styled-components";

interface ProgressBarProps {
  portfolioRef: React.MutableRefObject<null>;
}

const Progressbar = ({ portfolioRef }: ProgressBarProps) => {
  const { scrollYProgress } = useScroll({
    target: portfolioRef,
    offset: ["start start", "end end"],
  });

  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return <ProgressBar style={{ scaleX, transformOrigin: "0%" }} />;
};

const ProgressBar = styled(motion.div)`
  z-index: 1;
  position: fixed;
  background-color: ${({ theme }) => theme.colors.text[100]};
  height: 5px;
  width: 100%;
  top: 0;
`;

export default Progressbar;
