import React from 'react';
import styled from 'styled-components';
import mainBgImg from './img/test.png';

type IntroProps = {
}

const IntroWrapper = styled.div`
	margin: auto;
	border-right: 1rem solid #1b4577;
	border-left: 1rem solid #1b4577;
	border-bottom: 1rem solid #1b4577;
	background-image: url(${mainBgImg});
	background-position: center;
	background-size: contain;
	background-attachment: fixed;
	height: 100%;
	background-repeat: no-repeat;
`;

const Intro = () => {

	return (
		<IntroWrapper className="intro-wrapper" />
	);
};

export default Intro;