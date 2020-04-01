import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { StyledDiv } from '../customComponent';
import { YELLOW } from '../GlobalStyle';

const CommunityWrap = styled.div`
  height: 100%;
  display:flex;
  flex-direction: column;
  background-color: white;
`;

const Title = styled.div`
  flex: 3 1 0;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.7rem;
  font-family: 'Do Hyeon', sans-serif;
  color: white;
  display:flex;
  flex-direction:column;
  border-top: 4px solid #495057;
`;

const ContentWrap = styled(StyledDiv)`
  flex: 1 1 0;
  padding: 1rem 0;
  background-color: ${YELLOW};
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const TitleImageDiv = styled(StyledDiv)`
  font-family: 'Nanum Brush Script';
  margin: 2rem 0;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;
  :visited {
    color: white;
  }
`;

const Community = () => (
	<CommunityWrap>
		<Title>
			<StyledDiv fontSize="2rem" >
      2020 자양교회 청년부
			</StyledDiv>
			<TitleImageDiv fontSize="4rem" textAlign='center'>
      묵은 땅을 기경하라
			</TitleImageDiv>
		</Title>
		<ContentWrap fontSize="2rem" textAlign='center'>
      자양교회 청년부 처음이세요?
			<ContentSectionTitle fontSize="2rem" textAlign="center" fontWeight="bold">
				<StyledLink to="community" >
        청년부가 궁금하다면?
				</StyledLink>
			</ContentSectionTitle>
		</ContentWrap>
	</CommunityWrap>
);

export default Community;