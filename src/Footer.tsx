import React from "react";
import styled from "styled-components";

const FooterWrapper = styled.div`
  padding: 2rem 0;
  border-top: 1px solid #868e96;
  background-color: #f8f9fa;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  width: 70%;
`;

const FooterDescription = styled.div<{ fontSize: string; fontWeight?: string }>`
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  text-align: center;
  margin-top: 0.5rem;
  word-break: keep-all;
`;

const Footer = () => {
  return (
    <FooterWrapper className="Footer-wrapper">
      <FooterContent>
        <FooterDescription fontSize="small">
          © 2020. ILURE. All rights reserved.
        </FooterDescription>
        <FooterDescription fontSize="medium" fontWeight="lighter">
          대한예수교장로회 자양교회
        </FooterDescription>
        <FooterDescription fontSize="medium" fontWeight="lighter">
          서울특별시 광진구 자양번영로 90 자양동
        </FooterDescription>
        <FooterDescription fontSize="smaller" fontWeight="lighter">
          T. 02.455.6071 &nbsp;&nbsp;|&nbsp;&nbsp; 위임목사: 이철규
        </FooterDescription>
        <FooterDescription fontSize="small">그리고 우리들</FooterDescription>
      </FooterContent>
    </FooterWrapper>
  );
};

export default Footer;
