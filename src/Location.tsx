import React from 'react';
import styled from 'styled-components';
import locationImg from '../src/img/location.jpeg';
import { StyledDiv } from './customComponent';

const LocationWrapper = styled.div`
	padding: 2rem;
	padding-bottom: 40%;
	margin-bottom: -5rem;
	background-color: white;
`;

const LocationTitle = styled.div`
	font-size: 2rem;
	font-weight: 300;
	text-align: center;
	color: #495057;
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
		<LocationWrapper id="location">
			<LocationTitle>수고하고 짐 진 자들아. 오라 내가 너희를 쉬게 하리라</LocationTitle>
			<LocationDesc fontSize="1.2rem" textAlign="center" lineHeight="1.6rem">
					함께 예배하고 교제하고 싶은 청년분들, 여기로 모여주세요!
			</LocationDesc>
			<LoactionMap backgroundImg={locationImg} />
			<LocationDesc fontSize="1.2rem" textAlign="center" lineHeight="1.6rem">
			곧 만날 수 있겠죠? <br/>
			주일 오후 1:30 자양교회 본당에서 기다리고 있을게요 :) <br/>
			주일에 만나요~~
			</LocationDesc>
		</LocationWrapper>
	);
};

export default Location;