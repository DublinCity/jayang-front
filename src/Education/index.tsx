import React from 'react';
import styled from 'styled-components';

import { StyledDiv } from '../customComponent';
import { Link } from 'react-router-dom';
import { PINK } from '../GlobalStyle';

const basicEdu = [
	{ title: '새가족 교육',
		desc: '두근두근~ 자양교회 청년부에서의 새로운 출발! 새가족 교육',
		who: '자양교회 처음 등록하는 분들 누구나', 
		when: '등록 시점부터 4주',
	},
	{ title: '일대일 동반자반',
		desc: '신앙을 함께할 든든한 멘토와 함께! 일대일 동반자반',
		who: '새가족 교육 수료자 이상. 희망하는 사람 누구나', 
		when: '상·하반기 1회씩. 12주 과정',
	},
];

const commonEdu = [
	{ title: '큐티스쿨',
		desc: '큐티는 도대체 어떻게 하는 겁니까!? 궁금하다면 큐티스쿨!',
		who: '자양교회 청년이라면 누구나', 
	},
	{ title: '성경 파노라마',
		desc: '성경 파노라마 교육 들으면 어려운 성경이 술술~',
		who: '자양교회 청년이라면 누구나', 
		when: '상반기 ‘구약’ 3주 / 하반기 ‘신약‘ 3주',
	},
];

const advanceEdu = [
	{ title: '일대일 양육자반',
		desc: '영혼을 돌보는 목자의 삶이란? 일대일 양육자반',
		who: '동반자반 교육 수료자 이상', 
		when: '상·하반기 1회씩. 12주 과정'
	},
	{ title: 'JDTS',
		desc: '예수님을 더 닮고 싶은 청년들, 여기로 모여라!',
		who: '동반자반 교육 수료자 이상', 
		when: '상반기1회. 13주 과정(해외 단기선교 1주 포함)',
	},
	{ title: 'LTS',
		desc: '사랑 넘치는 사랑방 만들기 프로젝트! 사랑방 리더학교',
		who: '사랑방 리더, 부리더, 리더 추천자 1인', 
		when: '상반기 4주, 하반기 2주',
	},
	{ title: '전도폭발 XEE',
		desc: '땅 끝까지 전하라! 사람을 낚는 어부가 되게 하리라~',
		who: '동반자반 교육 수료자 이상.', 
	},
];

const CommunityWrapper = styled(StyledDiv)`
	font-family: 'Do Hyeon', sans-serif;
	display: flex;
	flex-direction: column;
	align-items: center;
`;

const Header = styled(StyledDiv)`
	align-self: stretch;
	line-height: 2rem;
	background-color: ${PINK};
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
  display: flex;
  flex-direction: column;
  border-bottom: 2px solid #2d3b54;

	@media(min-width: 800px) {
		width: 800px;
	}
`;

const CellTitleText = styled(StyledDiv)`
	font-family: 'Do Hyeon', sans-serif;
	word-break: keep-all;
	color: #343a40;
`;
const CellDesc = styled(StyledDiv)`
flex: 5;
word-break: keep-all;
margin-bottom: 1rem;
font-family: 'Noto Sans KR', sans-serif;
`;

const CellTarget = styled(StyledDiv)`
display: flex;
flex-direction: column;
word-break: keep-all;
margin-bottom: 1rem;
font-family: 'Noto Sans KR', sans-serif;
align-self: flex-end;
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

const ContentWrap = styled(StyledDiv)`
	align-self: stretch;
  background-color: ${PINK};
  font-family: 'Do Hyeon', sans-serif;
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

const CellTargetWrap = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
`;

const EduTitle = styled(StyledDiv)`
	align-self: stretch;
  background-color: #212529;
	color: white;
	padding: 0.5rem 0;
	margin-top: -2px;
`;

function Community() {
	return (
		<>
			<CommunityWrapper>
				<Header>
					<Link to='/'>
						{/* TODO: 소모임 페이지에서 왔을때, 고려해서 goBack 해야함. */}
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
          교육 프로그램 안내
					</HeaderTitle>
				</Header>
				<EduTitle fontSize='3rem' textAlign='center'>
          양육 기본 과정
				</EduTitle>
				{basicEdu.map(({ title, desc, who, when }) => (
					<Cell key={title}>
						<CellTitleText fontSize="2rem">
							{title}
						</CellTitleText>
						<CellDesc fontSize="1.5rem;">
							{desc}	
						</CellDesc>
						<CellTargetWrap>
							<CellTarget key={who}>
								<StyledDiv fontSize="1.3rem" textAlign="right" fontWeight="700">Who?</StyledDiv>
								<StyledDiv textAlign="right">{who}	</StyledDiv>
								<StyledDiv fontSize="1.3rem" textAlign="right" fontWeight="700">When?</StyledDiv>
								<StyledDiv textAlign="right">{when}	</StyledDiv>
							</CellTarget>
						</CellTargetWrap>
					</Cell>
				))}
				<EduTitle fontSize='3rem' textAlign='center'>
          양육 공통 과정
				</EduTitle>
				{commonEdu.map(({ title, desc, who, when }) => (
					<Cell key={title}>
						<CellTitleText fontSize="2rem">
							{title}
						</CellTitleText>
						<CellDesc fontSize="1.5rem;">
							{desc}	
						</CellDesc>
						<CellTargetWrap>
							<CellTarget key={`${who}${when}`}>
								{who && (
									<>
										<StyledDiv fontSize="1.3rem" textAlign="right" fontWeight="700">Who?</StyledDiv>
										<StyledDiv textAlign="right">{who}	</StyledDiv>
									</>
								)}
								{when && (
									<>
										<StyledDiv fontSize="1.3rem" textAlign="right" fontWeight="700">When?</StyledDiv>
										<StyledDiv textAlign="right">{when}	</StyledDiv>
									</>
								)}
							</CellTarget>
						</CellTargetWrap>
					</Cell>
				))}
				<EduTitle fontSize='3rem' textAlign='center'>
          양육 심화 과정
				</EduTitle>
				{advanceEdu.map(({ title, desc, who, when }) => (
					<Cell key={title}>
						<CellTitleText fontSize="2rem">
							{title}
						</CellTitleText>
						<CellDesc fontSize="1.5rem;">
							{desc}	
						</CellDesc>
						<CellTargetWrap>
							<CellTarget key={`${who}${when}`}>
								{who && (
									<>
										<StyledDiv fontSize="1.3rem" textAlign="right" fontWeight="700">Who?</StyledDiv>
										<StyledDiv textAlign="right">{who}	</StyledDiv>
									</>
								)}
								{when && (
									<>
										<StyledDiv fontSize="1.3rem" textAlign="right" fontWeight="700">When?</StyledDiv>
										<StyledDiv textAlign="right">{when}	</StyledDiv>
									</>
								)}
							</CellTarget>
						</CellTargetWrap>
					</Cell>
				))}
				<ContentWrap fontSize='1.2rem' textAlign='center'>
					<StyledLink to="" >
						<ContentSectionTitle fontSize="1.5rem" textAlign="center" >
              교육 신청하기!
						</ContentSectionTitle>
					</StyledLink>
				</ContentWrap>
			</ CommunityWrapper>
		</>
	);
}

export default Community;
