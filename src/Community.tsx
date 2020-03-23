import React from 'react';
import styled from 'styled-components';
import { StyledDiv } from './customComponent';
import communityImg from '../src/img/community-test.png';

const CommunityWrap = styled.div`
  height: 80%;
  display:flex;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.div`
  height: 15%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-family: 'Do Hyeon', sans-serif;
  background-color: #1b4577;
  color: white;
`;

const ContentWrap = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContentSection = styled.div`
  border-bottom: 1px solid black;
  flex-basis: 33%;
  display: flex;
  justify-content: center;
  padding-top: 2rem;
  overflow: hidden;
`;

const ContentSectionColumn = styled(ContentSection)`
  flex-direction: column;
`;
const ContentSectionTitle = styled(StyledDiv)`
  flex: 1;
  display: flex;
  justify-content: center;
  white-space: nowrap;
`;

const ContentSectionDesc = styled(StyledDiv)`
  flex: 1;
`;

const ContentSectionImg = styled.img.attrs({
	src: communityImg
})`
  max-height: 100%;
`;

const Community = () => (
	<CommunityWrap>
		<Title>자양교회 청년부를 소개합니다!</Title>
		<ContentWrap>
			<ContentSection>
				<ContentSectionTitle fontSize="1.5rem">묵은 땅을 기경하라</ContentSectionTitle>
				<ContentSectionDesc fontSize="0.8rem">
          내가 그들에게 한 마음을 주고 그 속에 새 영을 주며 그 몸에서
          돌같은 마음을 제거하고 살처럼 부드러운 마음을 주어
          내 율례를 따르며 내 규례를 지켜 행하게 하리니
          그들은 내 백성이 되고 나는 그들의 하나님이 되리라

          에스겔 11:19~20
				</ContentSectionDesc>
			</ContentSection>
			<ContentSectionColumn>
				<ContentSectionTitle>자양교회 청년부는요</ContentSectionTitle>
				<ContentSectionImg />
			</ContentSectionColumn>
			<ContentSection>함께 하나님을 찬양하고 예배하길 원하는 청년들 모두에게 열려 있습니다. <br /> (처음 오시는 분들은 본당 입구에서 노란색 명찰을 한 새가족 리더들을 찾아주세요~)
			</ContentSection>
		</ContentWrap>
	</CommunityWrap>
);

export default Community;