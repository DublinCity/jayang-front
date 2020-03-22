import React from 'react';
import styled from 'styled-components';
import servantImg from '../src/img/servant.jpg';
import { repeat } from './utils';
import { StyledDiv } from './customComponent';

const ContentBackground = styled.div`
	display: flex;
	justify-content: center;
	background-color: white;
`;
const Content = styled.div`
	background-color: white;
  display:flex;
	justify-content: space-between;
 	flex-flow: wrap;
	padding: 0 5%;
	margin: auto;
	max-width: 1114px;
  font-size: 3rem;
`;

const CoreValue = styled.div`
	min-width: 250px;
	flex: 1 1 50%;
	display: flex;
	flex-direction: column;
	padding: 1rem;
`;

const CoreThumbnail = styled.div<{backgroundImage: string}>`
	flex: 1;
	background-image: url(${props => props.backgroundImage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: cover;
	padding-bottom: 70%;
`;

const CoreTitle = styled(StyledDiv)`
	overflow: hidden;
	white-space: nowrap;
	margin-bottom: 1.2rem;
`;

const CoreDesc = styled(StyledDiv)`
	margin: auto;
`;

const CoreValueWrapper = () => (
	<ContentBackground>
		<Content>
			{repeat(6).map((_: any,index: number) => (
				<CoreValue key={index}>
					<CoreThumbnail backgroundImage={servantImg}/> 
					<CoreTitle textAlign="center" fontWeight="bold" fontSize="1.5rem">{index}. 핵심코어</CoreTitle>
					<CoreDesc textAlign="center" fontWeight="lighter" fontSize="1.2rem">  
						이루어는 "하늘의 뜻이 땅에서 이루어" 
						의 의미를 가지면서비와이 가라사대 깝치지 말지어다
						넌 나를 위로 볼 지어다
						역사로 살 지어다
						증인의 삶이 될 지어다
						여기를 밝힐 지어다
						여길 다 삼킬 지어다
						구와 신의 기준이 나일 지어다
						그게 나일 지어다 
					</CoreDesc>
				</CoreValue>
			))}
		</Content>
	</ContentBackground>
);
export default CoreValueWrapper;