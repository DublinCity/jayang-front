import React from 'react';
import styled from 'styled-components';

const TextBox = styled.div`
  position: absolute;
  font-size: 4rem;
  font-weight: 500;
  bottom: 3%;
  right: 6%;
  display:flex;
  flex-flow: column;
`;
const IntroContentBox = styled.div`
  margin: auto;
  width: 35%;
  min-width: 300px;
  min-height: 340px;
  height: 0;
  padding-top: 35%;
  border: 1.3rem solid #BF4E58;
  position:relative;
  

  @media (max-width: 900px) {
    width: 300px;
    height: 340px;
  }
`;

type TitleTextProps = {
  fontSmall?: boolean;
  children: string;
}
const TitleText = styled.div<TitleTextProps>`
  text-align: right;
  font-size: ${props => props.fontSmall ? '3rem' : ''};
`;

const IntroContentWrapper = styled.div`
  padding: 7rem;
`;

const IntroContent = () => (
	<IntroContentWrapper>
		<IntroContentBox className="intro-content">
			<TextBox>
				<TitleText>청년부</TitleText>
				<TitleText fontSmall>자양교회</TitleText>
			</TextBox>
		</IntroContentBox>
	</IntroContentWrapper>
);

export default IntroContent;