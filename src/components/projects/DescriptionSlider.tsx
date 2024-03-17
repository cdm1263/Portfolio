import { useRef, useState } from "react";
import styled from "styled-components";

interface DescriptionSliderProps {
  projectNo: number;
  projectInfo: React.JSX.Element;
  devInfo: React.JSX.Element;
}

const DescriptionSlider = ({
  projectNo,
  projectInfo,
  devInfo,
}: DescriptionSliderProps) => {
  const [element, setElement] = useState<"left" | "right">("left");
  const [startX, setStartX] = useState<number | null>(null);
  const [scrollLeft, setScrollLeft] = useState<number>(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!startX || !sliderRef.current) return;
    const x = e.touches[0].clientX - startX;
    sliderRef.current.scrollLeft = scrollLeft - x;
  };

  const handleTouchEnd = () => {
    if (!sliderRef.current) return;
    setScrollLeft(sliderRef.current.scrollLeft);
    setStartX(null);
  };

  const scrollToLeft = () => {
    const leftElement = document.getElementById(`${projectNo}_left`);
    if (leftElement) {
      leftElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setElement("left");
    }
  };

  const scrollToRight = () => {
    const rightElement = document.getElementById(`${projectNo}_right`);
    if (rightElement) {
      rightElement.scrollIntoView({ behavior: "smooth", block: "nearest" });
      setElement("right");
    }
  };

  return (
    <Wrapper>
      <ElementContainer
        ref={sliderRef}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <Element id={`${projectNo}_left`}>{projectInfo}</Element>
        <Element id={`${projectNo}_right`}>{devInfo}</Element>
      </ElementContainer>
      <Nav>
        <Button onClick={scrollToLeft} $isViewing={element === "left"} />
        <Button onClick={scrollToRight} $isViewing={element === "right"} />
      </Nav>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;

const ElementContainer = styled.div`
  display: flex;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  width: 100%;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
`;

const Element = styled.div`
  min-width: 100%;
  display: flex;
  scroll-snap-align: start;
`;

const Nav = styled.div`
  width: 50px;
  display: flex;
  justify-content: space-between;
  pointer-events: none;
`;

const Button = styled.div<{ $isViewing: boolean }>`
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.colors.text[100]};
  opacity: ${({ $isViewing }) => ($isViewing ? 1 : 0.75)};
  transition: opacity ease 250ms;
  cursor: pointer;
  pointer-events: all;

  &:hover {
    opacity: 1;
  }
`;

export default DescriptionSlider;
