import React from "react";
import "./hambuger.css";
import styled from "styled-components";
import { maxWidth } from "../constant";

const HanbugerWrap = styled.div`
  display: none;
  @media (max-width: ${maxWidth}) {
    display: block;
  }
`;

const Hambuger = ({
  open,
  onClick,
}: {
  open: boolean;
  onClick: () => void;
}) => (
  <HanbugerWrap id="nav-icon3" className={open ? "open" : ""} onClick={onClick}>
    <span />
    <span />
    <span />
    <span />
  </HanbugerWrap>
);

export default Hambuger;
