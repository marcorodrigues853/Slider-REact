import styled from "styled-components";

const SliderDots = ({ dots }) => {
  return (
    <StyledDots>
      {dots && dots.map((dot) => <input type="radio" key={dot} />)}
    </StyledDots>
  );
};

export default SliderDots;

const StyledDots = styled.div`
  background-color: orangered;
  align-items: center;
  justify-content: flex-end;
`;
