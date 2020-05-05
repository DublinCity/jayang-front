import styled from "styled-components";
import { StyledDiv } from "../customComponent";
export const Cell = styled(StyledDiv)`
  font-family: ${(props) => props.theme.FONT.NOTO};
  letter-spacing: -0.06rem;
  display: flex;
  flex-direction: column;
  width: 330px;
  margin: 1rem auto;
  line-height: 1.6;

  ::after {
    content: "";
    width: 60%;
    margin: auto;
    padding-top: 2rem;
    border-bottom: 2px solid #ced4da;
  }

  :last-child::after {
    content: "";
    width: 0;
  }
`;

export const CellDesc = styled(StyledDiv)`
  line-height: 27.5px;
  font-size: 17px;
  margin-left: 20px;
  margin-bottom: 10px;
  flex: 5;
  word-break: keep-all;
`;

export const CellDesc2 = styled(StyledDiv)`
  line-height: 25px;
  font-size: 15px;
  margin-left: 20px;
  margin-bottom: 10px;
  letter-spacing: -0.04rem;
  flex: 5;
  word-break: keep-all;
`;

export const CellColumn = styled(StyledDiv)`
  font-family: ${(props) => props.theme.FONT.NOTO};
  display: flex;
  align-items: flex-start;
  width: 330px;
  margin: 2rem auto;
  line-height: 1.6;
  flex-wrap: wrap;
  justify-content: center;

  ::after {
    width: 230px;
    content: "";
    padding-bottom: 5rem;
    border-bottom: 2px solid ${(props) => props.theme.COLOR.GRAY_BORDER};
  }
  :last-child::after {
    content: "";
    padding-bottom: 8rem;
    width: 0;
  }
`;
