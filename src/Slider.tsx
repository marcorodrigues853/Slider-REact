import styled from "styled-components";
import SliderDots from "./components/SliderDots";
import SliderArrows from "./components/SliderArrows";

const Slider = ({ children }) => {
  return (
    <StyledSlider>
      {children}
      <SliderDots dots={[1, 2, 0, 3, 4]}></SliderDots>
      <SliderArrows></SliderArrows>
    </StyledSlider>
  );
};

export default Slider;

export const StyledSlider = styled.div`
  position: relative;
  display: flex;

  gap: 24px;

  overflow: scroll;
  width: 400px;
  height: 600px;
`;
