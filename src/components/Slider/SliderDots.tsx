import styled, { css } from "styled-components";

const SliderDots = ({ dots, handlerDotClick, currentIndex }) => {
  return (
    <StyledDots>
      {dots &&
        dots.map((_, index) => (
          <StyledDot
            key={index}
            $active={index === currentIndex}
            onClick={() => handlerDotClick(index)}
          >
            <li>{index}</li>
          </StyledDot>
        ))}
    </StyledDots>
  );
};

export default SliderDots;

const StyledDots = styled.ul`
  position: absolute;
  bottom: 0.5rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  gap: 16px;
`;

const StyledDot = styled.div`
  list-style: none;
  background: ${(props) => (props.$active ? "#292929" : "transparent")};
  padding: 1rem;

  border-radius: 50%;
  width: 0.5rem;
  height: 0.5rem;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 300ms ease-in-out;

  outline-color: #292929;

  box-shadow: inset 0 0 0 2px #292929;

  ${(props) =>
    props.$active
      ? css`
          box-shadow: inset 0 0 0 8px #292929;
        `
      : ""};

  li {
    outline: 1px solid transparent;
    outline-offset: 2px;
    
  }

  transition: scale 200ms ease-in-out;
  &:hover {
    scale: 1.2;
  }

  &:focus-visible {
    outline: auto;
  }
`;
