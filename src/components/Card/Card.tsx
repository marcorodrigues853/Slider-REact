import styled from "styled-components";

const Card = () => {
  return (
    <StyledCard>
      <StyledPicture>
        <img src="https://cloudflare-ipfs.com/ipfs/Qmd3W5DuhgHirLHGVixi6V76LhCkZUz6pnFt5AJBiyvHye/avatar/151.jpg" />

        <StyledSocial>
          <span>F</span>
          <span>I</span>
          <span>T</span>
          <span>X</span>
        </StyledSocial>
      </StyledPicture>
      <div className="description">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nulla sed,
        odit excepturi aliquid explicabo quidem necessitatibus amet doloribus.
        Repellendus sapiente quo blanditiis perferendis beatae voluptates eaque
        at earum minima eius. Ex repellat officiis praesentium aut perferendis,
        impedit quae aliquam architecto amet nostrum neque quasi officia quis
        obcaecati sed saepe ipsum voluptatem et rerum dignissimos labore animi
        similique necessitatibus facere. Assumenda. Dicta animi, eligendi totam
        quae aliquid tenetur, mollitia inventore, quaerat unde dolorem eum optio
        debitis obcaecati impedit error magni repellendus sequi ipsum porro.
      </div>
      <Button>START</Button>
    </StyledCard>
  );
};

export default Card;

export const StyledCard = styled.div`
  display: flex;
  flex-direction: column;
  gap: 26px;
  border-radius: 20px;
  background-color: white;
  padding: 24px;
  min-width: 300px;

  .description {
    color: #292929;
    text-align: left;
  }
`;

export const StyledPicture = styled.div`
  display: flex;
  justify-content: space-between;
  img {
    border-radius: 18px;
  }
`;

export const StyledSocial = styled.div`
  display: flex;
  flex-direction: column;
  color: #292929;
`;

export const StyledButton = styled.div``;

export const Button = ({ children }) => {
  return (
    <StyledButton>
      <button>{children}</button>
    </StyledButton>
  );
};
