import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from '../customComponent';
import { Link, useHistory } from 'react-router-dom';
import { BLUE } from '../GlobalStyle';

const textArr = [
	{ title: '부별모임',
		desc: '서로 축복하고, 함께 웃고 우는 자양 청년 공동체 부별 모임!',
		time: `주일 오후 3시
    `,
		placeInfo: [
			'J공동체 – 교육관 7층',
			'RE공동체 – 교육관 5층',
			'공감공동체 – 본관 로뎀홀',
			'동행공동체 – 본관 4층',
		]
	},
	{ title: '사랑방',
		desc: '사람과 사람이 만나 사랑이 됩니다! 삶도 나누고, 사랑도 나누고 함께라서 더 즐거운 신앙생활!',
		time: '주일 오후 3시 30분',
		placeInfo: ['각 사랑방 별 진행']
	},
	{ title: '마하나임 기도회',
		desc: '혼자서는 기도하기 어렵죠? 그래서 우리는 모여서 함께 기도해요! 개인, 교회, 나라와 민족을 위해 함께 기도하는 시간!',
		time: '수요일 저녁 8시 30분',
		placeInfo: ['교육관 2층']
	},
	{ title: '동아리',
		desc: '모이기에 힘쓰는 자양교회 청년부! 축구, 독서, 봉사활동 등등 함께해서 더 행복해요!',
		time: '동아리별 진행',
		placeInfo: ['']
	},
];

const CommunityWrapper = styled(StyledDiv)`
	font-family: 'Noto Sans KR', sans-serif;
	display: flex;
	flex-direction: column;
`;

const Header = styled(StyledDiv)`
	font-family: 'Do Hyeon', sans-serif;
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
	viewBox:'0 0 350 350',
})`
	width: 100%;
`;

const Cell = styled(StyledDiv)`
	margin: 0;
	padding: 2rem;
  border-bottom: 2px solid #2d3b54;
  display: flex;
	margin: auto;
	@media(min-width: 800px) {
		width: 800px;
	}
`;
const CellTitleWrap = styled(StyledDiv)`
	flex: 1;
	display: flex;
`;
const CellTitleText = styled(StyledDiv)`
	word-break: keep-all;
	color: #343a40;
`;

const CellDescWrap = styled(StyledDiv)`
	flex: 3;
	display: flex; 
	flex-direction: column;
	justify-content: space-between;
	padding: 0 2rem;
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
	flex-basis: 20px;
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
	margin: 1.5rem 0;
	padding-bottom: 2px;
	border-bottom: 1px solid #343a40;
	align-self: flex-start;
`;

const PlaceInfo = styled(StyledDiv)`
`; 

const ContentWrap = styled(StyledDiv)`
	padding: 1rem 0;
  background-color: ${BLUE};
	margin-top: -2px;
`;

const ContentSectionTitle = styled(StyledDiv)`
  margin: 1rem auto;
  padding: 0.7rem;
  white-space: nowrap;
  border: 2px solid white;

  color: white;
  align-self: center;
  box-shadow: 3px 3px 6px rgba(50, 50, 50, 0.7);

	max-width: 800px;

	@media(max-width:768px) {
		margin: 1.5rem;
	}
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  :visited {
    color: white;
  }
`;

function Community() {
	const history = useHistory();
	return (
		<>
			<CommunityWrapper>
				<Header>
					<BackWrapper onClick={() => history.goBack()}>
						<BackBtn>
							<g>
								<g id="chevron-left">
									<polygon points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153" fill="white"/>
								</g>
							</g>
						</BackBtn>
					</BackWrapper>
					<HeaderTitle fontSize="20px">
          모임 안내
					</HeaderTitle>
				</Header>
				{textArr.map(({ title, desc, time, placeInfo }) => (
					<Cell key={title}>
						<CellTitleWrap>
							&ldquo;&nbsp;
							<CellTitleText fontSize="17px" textAlign="center">
								{title}
							</CellTitleText>
							&nbsp;&rdquo;
						</CellTitleWrap>
						<CellDescWrap>
							<CellDesc fontSize="13px">
								{desc}	
							</CellDesc>
							<TimeInfo fontSize="11px">
								{time}
							</TimeInfo>
							{placeInfo.map(info => <PlaceInfo fontSize="11px" key={info}>{info}</PlaceInfo>)}
						</CellDescWrap>
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
