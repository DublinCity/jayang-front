import React from "react";
import styled from "styled-components";
import mainPCBgImg from "../img/main-pc.jpeg";
import mainMobileBgImg from "../img/main-mobile.jpeg";
import { maxWidth } from "../constant";
import Arrow from "../lib/Arrow";

type IntroProps = {};

const IntroWrapper = styled.div`
  /* rectangle 때문에 z-index */
  position: relative;
  top: 0;
  z-index: -1;

  background-color: ${(props) => props.theme.COLOR.YELLOW};
  background-image: url(${mainPCBgImg});
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  height: 100%;
  overflow: hidden;

  @media (max-width: ${maxWidth}) {
    background-image: url(${mainMobileBgImg});
    background-size: cover;
  }

  @supports not (-webkit-overflow-scrolling: touch) {
    background-attachment: fixed;
  }
`;

const RotateRect = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 10%;
  right: 10%;
  border: 4px solid black;
  transform: rotate(-7deg);

  @media (max-width: ${maxWidth}) {
    border: 3px solid black;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }
  @supports not (-webkit-overflow-scrolling: touch) {
    border: none;
  }
`;

const Intro = () => {
  return (
    <>
      <IntroWrapper className="intro-wrapper">
        <RotateRect />
        <Arrow />
      </IntroWrapper>
    </>
  );
};

export default Intro;
