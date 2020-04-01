import React from 'react';
import styled from 'styled-components';
import bibleImg from '../img/bible.png';
import birdImg from '../img/bird.png';
import handsImg from '../img/hands.png';
import heartsImg from '../img/hearts.png';
import { StyledDiv } from '../customComponent';
import { Link } from 'react-router-dom';
import { BLUE, PINK } from '../GlobalStyle';

const ContentBackground = styled.div`
	display: flex;
	justify-content: center;
	background-color: white;
`;
const Content = styled.div`
	line-height: 1.6;
	word-break: keep-all;
	background-color: white;
  display:flex;
	justify-content: space-between;
 	flex-flow: wrap;
	padding: 0 5%;
	margin: 2rem auto;
	max-width: 1114px;
  font-size: 3rem;
`;

const CoreValue = styled.div`
	min-width: 250px;
	flex: 1 1 50%;
	display: flex;
	flex-direction: column;
	padding: 0 1rem;

	::after {
		border-bottom: 1px solid #e9ecef;
		width: 50%;
		content: '';
		margin: 2rem auto;
	}
`;

const CoreThumbnail = styled.div<{backgroundImage: string}>`
	flex: 1;
	background-image: url(${props => props.backgroundImage});
	background-repeat: no-repeat;
	background-position: center;
	background-size: contain;
	padding-bottom: 70%;
`;

const CoreTitle = styled(StyledDiv)`
	overflow: hidden;
	white-space: nowrap;
	margin: 0.8rem 0;
`;

const CoreDesc = styled(StyledDiv)`
	margin: auto;
`;

const ContentTitle = styled(StyledDiv)`
	width: 100%;
	word-break: keep-all;
`;

const LinkButton = styled(StyledDiv)`
	border: 2px solid ${props => props.color};
	align-self: stretch;
	padding: 0.5rem;
	margin: 1rem 0;
	color: ${props => props.color};
	box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.2);

	&:hover {
		cursor: pointer;
	}
`;

const whatWeDo = [
	{ src: handsImg,
		title: '하나님을 예배해요',
		desc: ['삶의 예배가 회복될 때, 하나님과 사람 사이의 관계가 완전해진다고 믿어요.' ,'함께 모여 하나님의 영광을 위해 예배하고 회복을 꿈꾸고 있답니다'] },
	{
		src: birdImg, 
		title: '증거해요',
		desc:`땅 끝까지 이르러 내 증인이 되리라(행 1:8)’라는 말씀이 우리의 때에 이루어 질 것이라 믿고있어요!
			부족한 우리의 말과 삶을 통해 예수님을 증거하고 자랑할 수 있기를 기대합니다
			`
	},
	{
		src: heartsImg,
		title: '서로 사랑해요',
		desc: [`새가족, 사랑방모임, 또래모임, 각종 동아리 등등! 하나님의 사랑으로 서로를 사랑하며 즐겁게 교제해요.
		함께 기뻐하고 슬퍼하며 삶을 공유하는 동역자들이 옆에 있을 때 하나님의 사랑을 더 깊고 완전하게
		이해할 수 있으니까요
		`],
		link: { text: '소모임 안내', url: 'gathering', color: BLUE }
	}, {
		src: bibleImg, 
		title: '함께 성장해요',
		desc:`예수님께서 제자들을 삶으로 가르치신 것처럼, 말씀으로 깨지고 배우며 삶을 변화시켜 가요.
		그리스도의 장성한 분량까지 주를 알아가고, 자라가기를 함께 꿈꾸고 있어요
		`,
		link: { text: '교육 안내', url: 'education', color: PINK }
	},
];

const StyledLink = styled(Link)`
	text-decoration: none;
	color: inherit;
  :visited {
  }
`;

const CoreValueWrapper = () => (
	<ContentBackground>
		<Content>
			<ContentTitle fontSize="2rem" textAlign="center" fontWeight="bold">
			자양교회 청년부에서 무엇을 하나요?
			</ContentTitle>
			{whatWeDo.map(({ src, title, desc, link },index: number) => (
				<CoreValue key={index}>
					<CoreThumbnail backgroundImage={src}/> 
					<CoreTitle textAlign="center" fontSize="1.5rem">{title}</CoreTitle>
					<CoreDesc textAlign="center" fontWeight="lighter" fontSize="1.2rem">  
						{desc}
					</CoreDesc>
					{link && <LinkButton textAlign="center" fontSize="1.5rem" color={link.color}><StyledLink to={link.url}>{link.text} </StyledLink> </LinkButton>}
				</CoreValue>
			))}
		</Content>
	</ContentBackground>
);
export default CoreValueWrapper;