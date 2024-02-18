import styled from "styled-components";

const SliderArrows = () => {
  return (
    <StyledArrows>
      <span>
        <button>{"<"}</button>
      </span>
      <span>
        <button>{">"}</button>
      </span>
    </StyledArrows>
  );
};

export default SliderArrows;

const StyledArrows = styled.div`
  background-color: red;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
`;
