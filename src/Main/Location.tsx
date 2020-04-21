import React from "react";
import styled from "styled-components";
import locationImg from "../img/location.jpeg";
import { StyledDiv } from "../customComponent";
import BusSVG from "../SVG/Bus";
import SubwaySVG from "../SVG/Subway";
import ParkingSVG from "../SVG/Parking";

const LocationWrapper = styled.div`
  padding: 0 2rem 2rem 2rem;
  background-color: white;
  font-family: ${(props) => props.theme.FONT.NOTO};
  max-width: 1114px;
  margin: auto;
`;

const LocationTitle = styled(StyledDiv)`
  line-height: 1.6;
  word-break: keep-all;
`;
const LoactionMap = styled.div<{ backgroundImg: string }>`
  margin: 0;
  padding-bottom: 70%;
  background-image: url(${(props) => props.backgroundImg});
  background-position: top;
  background-repeat: no-repeat;
  background-size: contain;
`;

const HowToCome = styled(StyledDiv)`
  display: flex;
  @media (max-width: 500px) {
    flex-direction: column;
  }
`;

const Method = styled(StyledDiv)`
  flex: 1;
  display: flex;
  margin-bottom: 1rem;
  padding: 1rem;
`;
const SVGWrapper = styled(StyledDiv)`
  flex-basis: 30%;
`;

const MethodDesc = styled(StyledDiv)`
  flex: 1;
  word-break: keep-all;
`;

const Location = () => {
  return (
    <LocationWrapper id="location">
      <LocationTitle fontSize="2rem" textAlign="center" fontWeight="600">
        오시는 길
      </LocationTitle>
      <LoactionMap backgroundImg={locationImg} />
      <HowToCome>
        <Method>
          <SVGWrapper>
            <BusSVG />
          </SVGWrapper>
          <MethodDesc textAlign="center">
            <StyledDiv textAlign="right" fontWeight="500">
              버스
            </StyledDiv>
            <StyledDiv textAlign="right" fontWeight="300">
              건대입구역 마을버스 05번
              <br /> (강변역행) <br />
              강변역 마을 버스05번 <br /> (건대역행) <br />
            </StyledDiv>
          </MethodDesc>
        </Method>
        <Method>
          <SVGWrapper>
            <SubwaySVG />
          </SVGWrapper>
          <MethodDesc textAlign="center">
            <StyledDiv textAlign="right" fontWeight="500">
              지하철
            </StyledDiv>
            <StyledDiv textAlign="right" fontWeight="300">
              2호선 건대입구역 5번 출구
              <br />
              7호선 건대입구역 4번 출구 <br />
            </StyledDiv>
          </MethodDesc>
        </Method>
        <Method>
          <SVGWrapper>
            <ParkingSVG />
          </SVGWrapper>
          <MethodDesc textAlign="center">
            <StyledDiv textAlign="right" fontWeight="500">
              주차
            </StyledDiv>
            <StyledDiv textAlign="right" fontWeight="300">
              교회 (신관 1층, 지하 1-2층)
              <br />
              뚝섬유원지 (한강둔치)
              <br />
              (공간이 협소하여 대중교통을 이용하시면 좋습니다)
            </StyledDiv>
          </MethodDesc>
        </Method>
      </HowToCome>
    </LocationWrapper>
  );
};

export default Location;
