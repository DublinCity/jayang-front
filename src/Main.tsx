import React from 'react';
import styled from 'styled-components';
import thumbnail from './img/thumbnail.jpg';

const MainContainer = styled.div`
  margin-top: 7rem;
`;

type TitleTextProps = {
  fontSmall?: boolean;
  children: string;
}

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
			<IntroWrap>
				<TextCenterDiv>사역현장</TextCenterDiv>
				<FlexBox>
					<ThumbnailWrap><ThumbnailImg src={thumbnail} /><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
					<ThumbnailWrap><ThumbnailImg src={thumbnail} /><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
					<ThumbnailWrap><ThumbnailImg src={thumbnail} /><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
					<ThumbnailWrap><ThumbnailImg src={thumbnail} /><ThumbnailDesc>열심히 하고 있습니다.</ThumbnailDesc></ThumbnailWrap>
				</FlexBox>
			</IntroWrap>
		</MainContainer>
	);
};

export default Main;  