import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from '../customComponent';
import { Link } from 'react-router-dom';
import { BLUE } from '../GlobalStyle';

const textArr = [
	{ title: '[부별모임]',
		desc: '서로 축복도 하고 함께 웃고 우는 자양 청년부 부별모임!',
		time: `주일 오후 3시
    `,
		placeInfo: [
			'J공동체 – 교육관 7층',
			'RE공동체 – 교육관 5층',
			'공감공동체 – 본관 로뎀홀',
			'동행공동체 – 본관 4층',
		]
	},
	{ title: '[사랑방]',
		desc: `RE공동체는 어쩌구 저쩌구 저쩌구.
    26~32살 청년들이 함께 하고 있어요!`,
		time: '주일 오후 3시 30분',
		placeInfo: ['소그룹 별 진행']
	},
	{ title: '[마하나임 기도회]',
		desc: `공감공동체는 어쩌구 저쩌구 저쩌구
    33살 이상 청년들이 모입니다!`,
		time: '매주 수요일 저녁 8시 30분',
		placeInfo: ['교육관 2층']
	},
	{ title: '[동아리] ',
		desc: `교회에 처음 온 분들은 4주간 동행 공동체에서 함께 합니다.
    4주동안 사랑으로 서로 교제하고, 양육하며 교회에 적응해 갑니다.`,
		time: '동아리별 진행',
		placeInfo: ['']
	},
];

const CommunityWrapper = styled(StyledDiv)`
	font-family: 'Do Hyeon', sans-serif;
	display: flex;
	flex-direction: column;
`;

const Header = styled(StyledDiv)`
	line-height: 2rem;
	background-color: ${BLUE};
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
  display: flex;
  flex-direction: column;
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
margin-bottom: 1rem;
font-family: 'Noto Sans KR', sans-serif;
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

const TimeInfo = styled(StyledDiv)`
  align-self: flex-end;
`;

const PlaceInfo = styled(StyledDiv)`
font-family: 'Noto Sans KR', sans-serif;
align-self: flex-end;
`; 

const ContentWrap = styled(StyledDiv)`
	padding: 1rem 0;
  background-color: ${BLUE};
  font-family: 'Do Hyeon', sans-serif;
`;

const ContentSectionTitle = styled(StyledDiv)`
  margin: 1rem;
  padding: 0.7rem;
  white-space: nowrap;
  border: 2px solid white;

  color: white;
  align-self: center;
  box-shadow: 3px 3px 6px rgba(50, 50, 50, 0.7);
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  :visited {
    color: white;
  }
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
					<HeaderTitle fontSize="2rem">
          모임 안내
					</HeaderTitle>
				</Header>
				{textArr.map(({ title, desc, time, placeInfo }) => (
					<Cell key={title}>
						<CellTitleWrap>
							<CellTitleText fontSize="2rem">
								{title}
							</CellTitleText>
						</CellTitleWrap>
						<CellDesc fontSize="1.5rem;">
							{desc}	
						</CellDesc>
						<TimeInfo fontSize="1.8rem">
							{time}
						</TimeInfo>
						{placeInfo.map(info => <PlaceInfo fontSize="1.5rem;" key={info}>{info}</PlaceInfo>)}
					</Cell>
				))}
				<ContentWrap fontSize='1.2rem' textAlign='center'>
				아직 부족해요! <br />
				청년부에 어떤 교육이
				있는지도 알고 싶어요 
					<ContentSectionTitle fontSize="1.5rem" textAlign="center" fontWeight="bold">
						<StyledLink to="education" >
        더 많은 교육이 궁금하다면?
						</StyledLink>
					</ContentSectionTitle>
				</ContentWrap>
			</ CommunityWrapper>
		</>
	);
}

export default Community;
