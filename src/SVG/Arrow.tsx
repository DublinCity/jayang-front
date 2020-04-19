import styled from "styled-components";

const Arrow = styled.svg.attrs({
  viewBox: "0 0 24 24",
})`
  width: 25px;
  height: 25px;
  fill: white;
  display: block;

  @media (min-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;
export default Arrow;
