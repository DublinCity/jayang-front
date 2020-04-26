import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";
import { useHistory } from "react-router-dom";
import { Cell } from "../Common/Cell";
import bibleImg from "../img/1.png";

const mock = [
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사", "자양교회 담임목사", "자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
  {
    name: "이철규",
    position: "목사",
    src: bibleImg,
    assign: ["자양교회 담임목사"],
  },
];

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
const Avatar = styled.img.attrs((props: { src: string }) => ({
  src: props.src,
}))`
  vertical-align: middle;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  border: 2px solid rgba(25, 25, 25, 0.4);

  @media (min-width: 700px) {
    width: 200px;
    height: 200px;
  }

  :hover {
    color: CornflowerBlue;
  }
`;

const Name = styled.span`
  font-size: 16px;
`;
const Position = styled.span`
  font-size: 14px;
`;

const Assign = styled.div`
  font-size: 14px;
  display: flex;
  flex-direction: column;
`;

const NameWrap = styled.div`
  padding: 5px 0;
  border-bottom: 2px solid ${(props) => props.theme.COLOR.YELLOW};

  @media (min-width: 700px) {
    margin: 5px;
  }
`;

const Person = ({
  src,
  name,
  position,
  assign,
}: {
  src: string;
  name: string;
  position: string;
  assign: string[];
}) => (
  <PersonWrap>
    <Avatar src={src} />
    <NameWrap>
      <Name>{name}</Name> <Position>{position}</Position>
    </NameWrap>
    <Assign>
      {assign.map((a) => (
        <div key={a}>{a}</div>
      ))}
    </Assign>
  </PersonWrap>
);

const PersonContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
`;

const WideCell = styled(Cell)`
  width: 100%;
  padding: 0 10%;
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
        <WideCell>
          <CellTitleText>교역자</CellTitleText>
          <PersonContainer>
            {mock.map((people) => (
              <Person key={people.name} {...people} />
            ))}
          </PersonContainer>
        </WideCell>
      </PeopleWrapper>
    </>
  );
}

export default People;
