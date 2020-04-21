import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";
import { useHistory } from "react-router-dom";

const textArr = [
  {
    title: "J공동체",
    descStrong: ["예수님 안에서 기쁨과 사랑이 넘치는"],
    ageDesc: "20살부터 26살까지의 청년들이 함께 모여서 교체합니다",
  },
  {
    title: "RE공동체",
    descStrong: [
      "Recover(회복하는), Reaction(행동하는)",
      "Remain(한결같은), Refresh(늘 새로운)",
    ],
    ageDesc: "27살부터 32살까지의 청년들이 함께 모여서 교체합니다",
  },
  {
    title: "공감공동체",
    descStrong: ["예수님과 교회 지체 간 공감하며 사랑하는"],
    ageDesc: "34이상의 청년들이 함께 모여서 교체합니다",
  },
  {
    title: "동행공동체",
    descStrong: ["새가족과 동행하는"],
    ageDesc:
      "교회에 처음 나오신 분들이 각 공동체로 등조하기 전 까지 함께하며 교회에 적응을 도와드립니다",
  },
];

const CommunityWrapper = styled(StyledDiv)`
  font-family: ${(props) => props.theme.FONT.DO_HYEON};
  display: flex;
  flex-direction: column;
`;

const Header = styled(StyledDiv)`
  line-height: 2rem;
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

const Cell = styled(StyledDiv)`
  font-family: ${(props) => props.theme.FONT.NOTO};
  display: flex;
  flex-direction: column;
  width: 330px;
  margin: 1rem auto;
  line-height: 1.6;

  ::after {
    content: "";
    width: 60%;
    margin: auto;
    padding-top: 2rem;
    border-bottom: 2px solid #ced4da;
  }

  :last-child::after {
    content: "";
    width: 0;
  }
`;
const CellTitleWrap = styled(StyledDiv)`
  display: flex;
  align-items: flex-end;
  margin: 1rem 0;
  flex: 2;
`;
const CellTitleText = styled(StyledDiv)`
  font-size: 1.5rem;
  word-break: keep-all;
  color: #343a40;
  display: flex;
  font-weight: bold;
`;
const CellDesc = styled(StyledDiv)`
  margin: 1rem;
  flex: 5;
  word-break: keep-all;
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

function Community() {
  const history = useHistory();
  return (
    <>
      <CommunityWrapper>
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
        {textArr.map(({ title, descStrong, ageDesc }) => (
          <Cell key={title}>
            <CellTitleWrap>
              <CellTitleText>&ldquo;{title}&rdquo;</CellTitleText>
              &nbsp;<span style={{ lineHeight: "1.8rem" }}>는</span>
            </CellTitleWrap>
            <CellDesc>
              <span style={{ color: "#f03e3e" }}>
                {descStrong[0]}
                {descStrong[1] && (
                  <>
                    <br />
                    {descStrong[1]}
                  </>
                )}
              </span>{" "}
              공동체입니다!
            </CellDesc>
            <CellDesc>{ageDesc}</CellDesc>
          </Cell>
        ))}
      </CommunityWrapper>
    </>
  );
}

export default Community;
