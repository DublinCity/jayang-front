import React , { useEffect } from 'react';
import styled from 'styled-components';
import mainPCBgImg from './img/main-pc.jpeg';
import mainMobileBgImg from './img/main-mobile.jpeg';
import { maxWidth } from './constant';

type IntroProps = {
}

const IntroWrapper = styled.div`
	/* rectangle 때문에 z-index */
	position: relative;
	top: 0;
	z-index:-1;

	background-color: #f0c41b;
	background-image: url(${mainPCBgImg});
	background-position: center;
	background-size: contain;
	background-attachment: fixed;
	background-repeat: no-repeat;
	border-bottom: 4px solid #868e96;
	box-shadow: 0px 2px 8px -1px rgba(33,37,41,0.5);
	height: 100%;

	@media(max-width:${maxWidth}){
		background-image: url(${mainMobileBgImg});
		background-size: cover;
	}
`;

const RotateRect = styled.div`
	height: 100%;
	width: 60%;
	border: 4px solid black;
	position: fixed;
	left: 20%;
	transform: rotate(-8deg);

	@media(max-width:${maxWidth}){
		border: 3px solid black;
		height: 100%;
		width: 100%;
		top: 0;
		left: 0;
	}
`;

const Intro = () => {
	return (
		<>
			<IntroWrapper className="intro-wrapper">
				<RotateRect />
			</IntroWrapper>
		</>
	);
};

export default Intro;