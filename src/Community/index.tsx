import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from '../customComponent';
import { Link } from 'react-router-dom';

const textArr = [
	{ title: '# J공동체',
		desc: `J 공동체는 어쩌구 저쩌구 저쩌구.
		20~25살까지 청년들이 함께 모여 교제합니다`
	},
	{ title: '# RE공동체',
		desc: `RE공동체는 어쩌구 저쩌구 저쩌구.
		26~32살 청년들이 함께 하고 있어요!`
	},
	{ title: '# 공감공동체',
		desc: `공감공동체는 어쩌구 저쩌구 저쩌구
		33살 이상 청년들이 모입니다!`
	},
	{ title: '# 동행공동체',
		titleNext: '(새가족부)',
		desc: `교회에 처음 온 분들은 4주간 동행 공동체에서 함께 합니다.
		4주동안 사랑으로 서로 교제하고, 양육하며 교회에 적응해 갑니다.`
	},
];

const CommunityWrapper = styled(StyledDiv)`
	font-family: 'Do Hyeon', sans-serif;
	display: flex;
	flex-direction: column;
`;

const Header = styled(StyledDiv)`
	line-height: 2rem;
	background-color: #f0c41b;
	color: white;
	padding: 0.5rem 0;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	font-size: 1.5rem;
`;

const BackBtn = styled.svg.attrs({
	viewBox:'0 0 306 306',
})`
	width: 100%;
	margin-left: -1px;
`;

const Cell = styled(StyledDiv)`
	margin: 0;
	padding: 2rem 1rem 3rem 1rem;
	border-bottom: 2px solid #2d3b54;
`;
const CellTitleWrap = styled(StyledDiv)`
	display: flex;
	align-items: center;
	flex: 2;
`;
const CellTitleText = styled(StyledDiv)`
	font-family: 'Do Hyeon', sans-serif;
	word-break: keep-all;
	color: #343a40;
	display: flex;
`;
const CellDesc = styled(StyledDiv)`
flex: 5;
word-break: keep-all;
`;

const BackWrapper = styled(StyledDiv)`
	border: 1px solid white;
	display: flex;
	align-items: center;
	padding: 0.3rem;
	margin: 0.5rem 0.5rem 0.5rem 1rem; 
	flex-basis: 10%;
	max-width: 2rem;
	border-radius: 100%;
`;

const HeaderTitle = styled(StyledDiv)`
color: white;
max-width: 20rem;
flex: 1;
display: flex;
word-break: keep-all;
`;

function Community() {
	return (
		<>
			<CommunityWrapper>
				<Header>
					<Link to='/'>
						<BackWrapper>
							<BackBtn>
								<g>
									<g id="chevron-left">
										<polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153" fill="white"/>
									</g>
								</g>
							</BackBtn>
						</BackWrapper>
					</Link>
					<HeaderTitle fontSize="1.7rem">
					자양교회 청년부를 소개합니다.
					</HeaderTitle>
				</Header>
				{textArr.map(({ title, desc, titleNext }) => (
					<Cell key={title}>
						<CellTitleWrap>
							<CellTitleText fontSize="3rem">
								{title}
								<div style={{
									alignSelf: 'center',
									fontSize:'1.5rem',
									marginBottom: '-1rem',
									marginLeft:'3px'
								}}>
									{titleNext}
								</div>
							</CellTitleText>
						</CellTitleWrap>
						<CellDesc>
							{desc}	
						</CellDesc>
					</Cell>
				))}
			</ CommunityWrapper>
		</>
	);
}

export default Community;
