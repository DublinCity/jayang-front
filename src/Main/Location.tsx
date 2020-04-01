import React from 'react';
import styled from 'styled-components';
import locationImg from '../img/location.jpeg';
import { StyledDiv } from '../customComponent';

const LocationWrapper = styled.div`
	padding: 2rem;
	padding-bottom: 40%;
	margin-bottom: -5rem;
	background-color: white;
	font-family: 'Noto Sans KR', sans-serif;
`;

const LocationTitle = styled(StyledDiv)`
	line-height:1.6;
	word-break: keep-all;
`;
const LoactionMap = styled.div<{backgroundImg: string}>`
  margin: 10% 0;
  padding-bottom: 100%;
	background-image: url(${props => props.backgroundImg});
	background-position: top;
	background-repeat: no-repeat;
	background-size: contain;
`;

const LocationDesc = styled(StyledDiv)`
`;

const Location = () => {
	return (
		<>
			<LocationWrapper id="location">
				<LocationTitle fontSize='2rem' textAlign='left' fontWeight="600">오시는 길</LocationTitle>
				<LoactionMap backgroundImg={locationImg} />
				<LocationDesc fontSize="1.2rem" textAlign="center" lineHeight="1.6rem">
			곧 만날 수 있겠죠? <br/>
			주일 오후 1:30 자양교회 본당에서 기다리고 있을게요 :) <br/>
			주일에 만나요~~
				</LocationDesc>
			</LocationWrapper>
		</>
	);
};

export default Location;