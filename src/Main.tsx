import React from 'react';
import styled from 'styled-components';
import thumbnail from './img/thumbnail.jpg';

const MainContainer = styled.div`
  margin-top: 7rem;
`;

const TitleBorder = styled.div`
  position: absolute;
  font-size: 4rem;
  font-weight: 500;
  bottom: 3%;
  right: 6%;
  displey:flex;
  flex-flow: column;
`;
const TitleBox = styled.div`
  margin: 5rem auto;
  width: 35%;
  height: 0;
  padding-top: 35%;
  border: 1.3rem solid #BF4E58;
  position:relative;

  @media (max-width: 900px) {
    width: 300px;
    padding-top: 300px;
  }
`;

type TitleTextProps = {
  fontSmall?: boolean;
  children: string;
}
const TitleText = styled.div<TitleTextProps>`
  text-align: right;
  font-size: ${props => props.fontSmall ? '3rem' : ''};
`;

const IntroWrap = styled.div`
  padding: 3rem;
  background: #D9969B;
`;

const FlexBox = styled.div`
  display:flex;
  flex-flow: wrap;
  justify-content: center;
`;

const TextCenterDiv = styled.div`
  text-align: center;
`;

const ThumbnailWrap = styled.div`
  padding: 2rem;

`;

const ThumbnailImg = styled.img`
  border-radius: 100%;
  border: 0.2px solid #F2EBEB;
  object-fit: cover;
  width: 10rem;
  height: 10rem;
`;
const ThumbnailDesc = styled.div`
  color: #343a40;
`;

const Main = () => {
	return (
		<MainContainer>
			<TitleBox>
				<TitleBorder>
					<TitleText>청년부</TitleText>
					<TitleText fontSmall>자양교회</TitleText>
				</TitleBorder>
			</TitleBox>
			<IntroWrap>
				<TextCenterDiv>사역현장</TextCenterDiv>
				<FlexBox>
					<ThumbnailWrap><ThumbnailImg src={thumbnail}></ThumbnailImg><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
					<ThumbnailWrap><ThumbnailImg src={thumbnail}></ThumbnailImg><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
					<ThumbnailWrap><ThumbnailImg src={thumbnail}></ThumbnailImg><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
					<ThumbnailWrap><ThumbnailImg src={thumbnail}></ThumbnailImg><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
				</FlexBox>
			</IntroWrap>
		</MainContainer>
	);
};

export default Main;  