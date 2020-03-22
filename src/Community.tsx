import React from 'react';
import styled from 'styled-components';

const CommunityWrap = styled.div`
  height: 10%;
`;

const Title = styled.div`
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-family: 'Do Hyeon', sans-serif;
  background-color: #1b4577;
  color: white;
`;

const ContentWrap = styled.div`
  height: 120vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ContentSection = styled.div`
  flex-basis: 33%;
  background-color: red;
  display: flex;
  justify-content: center;
`;

const Community = () => (
	<CommunityWrap>
		<Title>자양교회 청년부를 소개합니다!</Title>
		<ContentWrap>
			<ContentSection>daf</ContentSection>
			<ContentSection>daf</ContentSection>
			<ContentSection>daf</ContentSection>
		</ContentWrap>
	</CommunityWrap>
);

export default Community;