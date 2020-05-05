import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";

const DescStyled = styled(StyledDiv)`
  letter-spacing: -0.03rem;
  line-height: 21px;
  font-size: 17px;
  margin-bottom: 1rem;
`;

const Desc = ({ desc }: { desc: string[] }) => (
  <DescStyled>
    {desc.map((t) => (
      <>
        {t}
        <br />
      </>
    ))}
  </DescStyled>
);

export default Desc;
