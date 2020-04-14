import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { maxWidth } from "./constant";
import Hanbuger from "./lib/hambuger";

const HeaderWrap = styled.header<{ showNavi: boolean; open: boolean }>`
  font-family: "Noto Sans KR", sans-serif;
  font-weight: 500;
  position: fixed;
  z-index: 100;
  width: 100%;
  display: flex;
  justify-content: space-between;
  color: #495057;
  background-color: white;
  box-shadow: 0px 0px 8px -1px rgba(33, 37, 41, 0.5);
  padding: 1.5rem 2rem;
  font-size: 1.5rem;
  opacity: ${(props) => (props.showNavi ? "1" : "0")};
  transition: all 0.35s ease-out;

  @media (max-width: ${maxWidth}) {
    text-align: center;
    padding: 1rem 0 ${(props) => (props.open ? 0 : "1rem")} 0;
    flex-direction: column;
    justify-content: space-around;
  }
`;

const Logo = styled.div``;

const NavigationSpan = styled.a`
  margin: 0 0.8rem;
  text-decoration: none;
  color: #495057;
  :visited {
    color: #495057;
  }
  :hover {
    color: #343a40;
  }

  @media (max-width: 500px) {
    border-bottom: 1px solid #fff5f5;
    margin: 0;
    padding: 0.8rem;

    :last-child {
      border: none;
    }
  }
`;

const Navigation = styled.nav<{ open: boolean }>`
  @media (max-width: ${maxWidth}) {
    transition: visibility 0s, opacity 0.3s linear, max-height 0.25s ease-out;
    display: flex;
    flex-direction: column;
    max-height: ${(props) => (props.open ? "300px" : 0)};
    visibility: ${(props) => (props.open ? "visible" : "hidden")};
    opacity: ${(props) => (props.open ? "1" : "0")};
  }
`;

const Header = () => {
  const [open, setOpen] = useState(false);
  const [showNavi, setShowNavi] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > document.body.offsetHeight) {
        setShowNavi(true);
      } else {
        setShowNavi(false);
        setOpen(false);
      }
    });
  }, []);
  return (
    <HeaderWrap showNavi={showNavi} open={open}>
      <Hanbuger open={open} onClick={() => setOpen((prev) => !prev)} />
      <Logo>
        자양교회 <span style={{ position: "relative", top: "-2px" }}>⛪</span>{" "}
        청년부 👫
      </Logo>
      {showNavi && (
        <Navigation open={open}>
          <NavigationSpan href="#banner">🎤 소개</NavigationSpan>
          <NavigationSpan href="#location">🚌 오라이</NavigationSpan>
          <NavigationSpan href="#location">📷 잉스타</NavigationSpan>
        </Navigation>
      )}
    </HeaderWrap>
  );
};

export default Header;
