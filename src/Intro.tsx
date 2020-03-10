import React, { ReactNode } from 'react';
import styled from 'styled-components';
import mainBgImg from './img/main-bg.jpg';

type IntroProps = {
  children: ReactNode;
}

const IntroWrapper = styled.div`
	background: url(${mainBgImg}) 0% 50%/cover fixed;
	height: 100%;
`;

const Intro = ({ children }: IntroProps) => {

	return (
		<IntroWrapper className="intro-wrapper">
			{children} 
		</IntroWrapper>
	);
};

export default Intro;