import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";
import titleBackground from "../img/ground.png";
import Arrow from "../SVG/Arrow";
import { COLOR } from "../GlobalStyle";

const detailLinkInfo = [
  {
    desc: ["자양교회", "청년 공동체를", "소개합니다"],
    bgColor: COLOR.YELLOW,
    url: "/community",
  },
  {
    desc: ["청년 공동체", "프로그램을", "소개합니다"],
    bgColor: COLOR.PINK,
    url: "/program",
  },
  {
    desc: ["청년 공동체", "모임을", "소개합니다"],
    bgColor: COLOR.ORANGE,
    url: "gathering",
  },
  {
    desc: ["청년 공동체", "교육을", "소개합니다"],
    bgColor: COLOR.OCEAN_BLUE,
    url: "/education",
  },
];

const CommunityWrap = styled.div`
  display: flex;
  overflow: hidden;
  align-items: center;
  flex-direction: column;
  background-color: white;
  border-top: ${(props) => `4px solid ${props.theme.COLOR.GRAY_7}`};
`;

const Title = styled.div`
  width: 895px;
  padding: 1rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.7rem;
  font-family: ${(props) => props.theme.FONT.DO_HYEON};
  flex-direction: column;

  @media (min-width: 768px) {
  }
`;

const DetailLink = styled(Link)`
  position: absolute;
  top: 8px;
  bottom: 8px;
  right: 8px;
  left: 8px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-decoration: none;
  color: white;
  border: 3px solid white;
`;

const DetailLinkContent = styled(StyledDiv)`
  position: relative;
  padding-bottom: 30vh;
  display: flex;
  background-color: ${(props: { bgColor: string }) => props.bgColor};
`;

const ContentWrap = styled(StyledDiv)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  font-size: 1.4rem;
  /* max-width: 1120px; */
  width: 100%;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
    font-size: 2rem;
  }
`;

const TitleImageDiv = styled(StyledDiv)`
  text-shadow: 2px 1px 0px rgba(200, 200, 200, 1);
  font-family: ${(props) => props.theme.FONT.NANUM_BRUSH};
  margin: 1rem 0;

  font-size: 4rem;
  text-align: center;

  @media (min-width: 768px) {
    margin: 1rem 0;
    font-size: 5rem;
  }
`;

const ArrowSVG = styled(StyledDiv)`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

const ImgTag = styled(StyledDiv)`
  align-self: stretch;
  width: 100%;
  height: 215px;
  background-image: url(${titleBackground});
  background-repeat: no-repeat;
  background-position: center 60%;
  background-size: contain;
  @media (min-width: 768px) {
    background-position: 80% 85%;
    background-size: contain;
  }
`;

const TextWrapper = styled(StyledDiv)`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: 768px) {
    flex: 1;
    align-self: flex-start;
    padding-top: 3%;
    padding-left: 13%;
  }
`;

const Text = styled(StyledDiv)`
  font-size: 2rem;
  text-align: center;

  @media (min-width: 768px) {
    font-size: 3rem;
  }
`;

const Community = () => (
  <CommunityWrap>
    <Title color="black">
      <TextWrapper>
        <Text>2020 자양교회 청년부</Text>
        <TitleImageDiv>묵은 땅을 기경하라</TitleImageDiv>
      </TextWrapper>
      <ImgTag />
    </Title>
    <ContentWrap textAlign="center">
      {detailLinkInfo.map(({ bgColor, desc, url }, i) => (
        <DetailLinkContent key={i} bgColor={bgColor} textAlign="center">
          <DetailLink key={i} to={url}>
            {desc.map((d, i) => (
              <StyledDiv key={i} lineHeight="1.5">
                {d}
              </StyledDiv>
            ))}
            <ArrowSVG>
              <Arrow>
                <path d="M13.025 1l-2.847 2.828 6.176 6.176h-16.354v3.992h16.354l-6.176 6.176 2.847 2.828 10.975-11z" />
              </Arrow>
            </ArrowSVG>
          </DetailLink>
        </DetailLinkContent>
      ))}
    </ContentWrap>
  </CommunityWrap>
);

export default Community;
