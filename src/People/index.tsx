import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";
import { useHistory } from "react-router-dom";
import { Cell } from "../Common/Cell";

import {
  importMinisterImg,
  importCheifImg,
  importYouth1Img,
  importYouth2Img,
  importYouth3Img,
} from "../Utils/index";
import position from "./position";

interface Dictionary<T> {
  [key: string]: T;
}

type Image = { [key: string]: string };
const ministerImages: Dictionary<string> = importMinisterImg();
const cheifImages: Dictionary<string> = importCheifImg();
const youth1Img: Dictionary<string> = importYouth1Img();
const youth2Img: Dictionary<string> = importYouth2Img();
const youth3Img: Dictionary<string> = importYouth3Img();

const imageMap = {
  ...ministerImages,
  ...cheifImages,
  ...youth1Img,
  ...youth2Img,
  ...youth3Img,
};

const namaMap = position;
console.log(imageMap);

const PeopleWrapper = styled(StyledDiv)`
  font-family: ${(props) => props.theme.FONT.DO_HYEON};
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const Header = styled(StyledDiv)`
  line-height: 2rem;
  width: 100%;
  background-color: ${(props) => props.theme.COLOR.YELLOW};
  color: white;
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  font-size: 1.5rem;
`;

const BackBtn = styled.svg.attrs({
  viewBox: "0 0 306 306",
})`
  width: 100%;
  margin-left: -1px;
`;

const CellTitleText = styled(StyledDiv)`
  align-self: center;
  font-size: 24px;
  word-break: keep-all;
  color: #343a40;
  display: flex;
  font-weight: bold;
  padding-bottom: 3px;
  margin: 20px;
  border-bottom: 3px solid ${(props) => props.theme.COLOR.YELLOW};
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

const PageTitleWrapper = styled(StyledDiv)`
  margin: 70px auto;
  width: 270px;
  border: 1rem solid ${(props) => props.theme.COLOR.YELLOW};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  white-space: nowrap;
  ::before {
    content: "";
    display: block;
    padding-bottom: 70px;
  }
  ::after {
    content: "";
    display: block;
    padding-bottom: 70px;
  }
`;

const PageTitle = styled(StyledDiv)`
  background-color: white;
  padding: 10% 0;
`;

const PersonWrap = styled(StyledDiv)`
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 140px;
  margin: 15px 0;

  @media (min-width: 700px) {
    width: 300px;
  }
`;

const Avatar2 = styled.div<{ src: string }>`
  vertical-align: middle;
  width: 150px;
  height: 150px;
  border-radius: 50%;
  border: 2px solid rgba(25, 25, 25, 0.4);
  background-image: url('${(props) => props.src}');
  background-repeat: no-repeat;
  background-size: 233px 295px;
  background-position: center 6%;

  @media (min-width: 700px) {
    background-size: auto auto;
    width: 200px;
    height: 200px;
  }
`;

const Name = styled.span`
  font-size: 22px;
  font-weight: 500;
`;
const Position = styled.span`
  font-size: 20px;
  font-weight: 400;
`;

const Assign = styled.div`
  font-size: 17px;
  display: flex;
  flex-direction: column;
  word-break: keep-all;
`;

const NameWrap = styled.div`
  padding: 5px 0;
  border-bottom: 2px solid ${(props) => props.theme.COLOR.YELLOW};

  @media (min-width: 700px) {
    margin: 5px;
  }
`;

const Person = ({
  name,
  assign = ["청년부 총괄", "RE J공동체"],
}: {
  name: string;
  assign: string[];
}) => {
  const [imgName] = name.split(".");
  const [realName, position] = imgName.split(" ");
  return (
    <PersonWrap>
      <Avatar2 src={imageMap[name]} />
      <NameWrap>
        <Name>{realName}</Name> <Position>{position}</Position>
      </NameWrap>
      <Assign>
        {assign &&
          assign.map((a) => (
            <StyledDiv key={a} textAlign="center" fontSize="17px">
              {a}
            </StyledDiv>
          ))}
      </Assign>
    </PersonWrap>
  );
};

const PersonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex-wrap: wrap;
  justify-items: center;
  justify-content: center;

  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 1fr);
    padding: 0;
    font-size: 2rem;
  }
`;

const WideCell = styled(Cell)`
  width: 100%;
  padding: 0 3%;

  @media (min-width: 768px) {
    padding: 0 15%;
  }

  :after {
    content: none;
  }
`;

function People() {
  const history = useHistory();
  return (
    <>
      <PeopleWrapper>
        <Header>
          <BackWrapper onClick={() => history.goBack()}>
            <BackBtn>
              <g>
                <g id="chevron-left">
                  <polygon
                    points="247.35,35.7 211.65,0 58.65,153 211.65,306 247.35,270.3 130.05,153"
                    fill="white"
                  />
                </g>
              </g>
            </BackBtn>
          </BackWrapper>
          <HeaderTitle fontSize="1.7rem">청년부 소개</HeaderTitle>
        </Header>
        <PageTitleWrapper>
          <PageTitle fontSize="3.5rem" color="black">
            청년 공동체 소개
          </PageTitle>
        </PageTitleWrapper>
        {Object.entries(namaMap).map(([부서, 구성원]) => (
          <WideCell key={부서}>
            <CellTitleText>{부서}</CellTitleText>
            <PersonContainer>
              {Object.entries(구성원).map(([이름, 직책]) => (
                <Person key={이름} name={이름} assign={직책} />
              ))}
            </PersonContainer>
          </WideCell>
        ))}
      </PeopleWrapper>
    </>
  );
}

export default People;
