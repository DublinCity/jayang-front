import React from "react";
import styled from "styled-components";
import bibleImg from "../img/bible.png";
import birdImg from "../img/bird.png";
import handsImg from "../img/hands.png";
import heartsImg from "../img/hearts.png";
import { StyledDiv } from "../customComponent";

const Content = styled.div`
  line-height: 1.6;
  word-break: keep-all;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 5%;
  max-width: 1114px;
  font-size: 3rem;
  margin: auto;
  margin-top: 4rem;
  margin-bottom: 2rem;

  @media (min-width: 768px) {
    height: 100%;
  }
`;

const CoreValue = styled.div`
  position: relative;
  min-width: 250px;
  flex: 0 0 33%;
  display: flex;
  flex-direction: column;
  padding: 0 1rem;
  margin-bottom: 4rem;

  ::after {
    position: absolute;
    bottom: -4rem;
    right: 0;
    left: 0;
    border-bottom: 2px solid ${(props) => props.theme.COLOR.GRAY_BORDER};
    width: 50%;
    content: "";
    margin: 2rem auto;
  }

  @media (min-width: 768px) {
    padding-top: 0;
    ::after {
      content: none;
    }
  }
`;

const CoreThumbnail = styled.div<{ backgroundImage: string }>`
  flex: 0 0 40%;
  background-image: url(${(props) => props.backgroundImage});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  padding-bottom: 70%;

  @media (min-width: 768px) {
    padding-bottom: 0;
  }
`;

const CoreTitle = styled(StyledDiv)`
  white-space: nowrap;
  flex: 0 1 10%;
  margin: 0.8rem 0;
`;

const CoreDesc = styled(StyledDiv)`
  margin: auto;
  flex: 1 0 40%;
`;

const ContentTitle = styled(StyledDiv)`
  word-break: keep-all;
  display: flex;
  justify-content: center;
  align-items: center;
  flex: 0 0 10%;
`;

const whatWeDo = [
  {
    src: handsImg,
    title: "예배하는 공동체",
    desc: `삶의 예배가 회복될 때, 하나님과 사람 사이의 관계가 완전해진다고 믿어요.
      "함께 모여 하나님의 영광을 위해 예배하고 회복을 꿈꾸고 있답니다`,
  },
  {
    src: heartsImg,
    title: "사랑하는 공동체",
    desc: `새가족, 사랑방모임, 또래모임, 각종 동아리 등등! 
      서로 사랑하라고 말씀하신 주님의 명렬을 따라 하나님의 사랑으로 서로를 사랑하며 즐겁게 교제해요. 
      하나님의 사랑으로 서로를 사랑하며 즐겁게 교제해요.`,
  },

  {
    src: bibleImg,
    title: "성장하는 공동체",
    desc: `예수님께서 제자들을 삶으로 가르치신 것처럼, 
    말씀으로 깨지고 배우며 삶을 변화시켜 가요.
		그리스도의 장성한 분량까지 주를 알아가고, 자라가기를 함께 꿈꾸고 있어요`,
  },
  {
    src: birdImg,
    title: "함께 울고 웃는 공동체",
    desc: `우리는 절대 혼자 힘으로 살아갈 수 없어요! 
    함께 기뻐하고 슬퍼하며 삶을 공유하는 동역자들이 옆에 있을 때 
    하나님의 사랑을 더 깊고 완전하게 이해할 수 있어요`,
  },
  {
    src: birdImg,
    title: "증거해요",
    desc: `땅 끝까지 이르러 내 증인이 되리라(행 1:8)’라는 말씀이 우리의 때에 이루어 질 것이라 믿고 있어요!
			부족한 우리의 말과 삶을 통해 예수님을 증거하고 자랑할 수 있기를 기대합니다`,
  },
];

const CoreValueContainer = styled(StyledDiv)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 0 0 40%;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

const CoreValueWrapper = () => (
  <Content>
    <ContentTitle fontSize="2rem" fontWeight="bold" textAlign="center">
      자양교회 청년부에서 무엇을 하나요?
    </ContentTitle>
    <CoreValueContainer>
      {whatWeDo.slice(0, 3).map(({ src, title, desc }, index: number) => (
        <CoreValue key={index}>
          <CoreThumbnail backgroundImage={src} />
          <CoreTitle textAlign="center" fontSize="1.3rem">
            {title}
          </CoreTitle>
          <CoreDesc textAlign="center" fontWeight="lighter" fontSize="1.1rem">
            {desc}
          </CoreDesc>
        </CoreValue>
      ))}
    </CoreValueContainer>
    <CoreValueContainer>
      {whatWeDo.slice(3, 5).map(({ src, title, desc }, index: number) => (
        <CoreValue key={index}>
          <CoreThumbnail backgroundImage={src} />
          <CoreTitle textAlign="center" fontSize="1.3rem">
            {title}
          </CoreTitle>
          <CoreDesc textAlign="center" fontWeight="lighter" fontSize="1.1rem">
            {desc}
          </CoreDesc>
        </CoreValue>
      ))}
    </CoreValueContainer>
  </Content>
);
export default CoreValueWrapper;
