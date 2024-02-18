import styled from "styled-components";
import SliderDots from "./SliderDots";
import SliderArrows from "./SliderArrows";

const Slider = ({ children }) => {
  return (
    <>
      <StyledSlider>
        {children}
        <SliderArrows></SliderArrows>
        <SliderDots dots={[1, 2, 0, 3, 4]}></SliderDots>
      </StyledSlider>
    </>
  );
};

export default Slider;

export const StyledSlider = styled.div`
  position: relative;
  display: flex;

  gap: 24px;

  overflow: scroll;
  width: 400px;
  /* height: 600px; */
`;
