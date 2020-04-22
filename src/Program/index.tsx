import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";
import { useHistory } from "react-router-dom";

const textArr = [
  {
    title: "5월 청년",
    title2: "부흥 집회",
    ageDesc: "성령 강림절을 맞이하여 성령의 임재를 구하는 특별한 은혜의 시간!",
  },
  {
    title: "강사",
    title2: "초청 예배",
    ageDesc:
      "좋은 강사분을 모시고 사회적 이슈들에 대한 성경적 시각에 대해 들어봅니다.",
  },
  {
    title: "주제 특강",
    title2: "",
    ageDesc:
      "재정, 결혼, 직업 등 청년의 때에 깊이 있게 고민해야 할 주제들을 다뤄보는 토요특강",
  },
  {
    title: "캠퍼스",
    title2: "전도",
    ageDesc:
      "캠퍼스 학생들에게 예수님을 소개하기 위해 대학교와 협력하여 함께 전도합니다",
  },
  {
    title: "국내외",
    title2: "단기선교",
    ageDesc:
      "매 년 여름 떠나는 국내외 단기선교를 통해 선교지를 향한 하나님의 마음을 알아갑니다",
  },
  {
    title: "장학금",
    title2: "수여",
    ageDesc:
      "자양교회 장학위에서 삶과 신앙적으로 모범이 되는 학생들의 학업을 돕기위해 장학금을 지원합니다.",
  },
  {
    title: "봉사활동",
    title2: "",
    ageDesc:
      "청년들이 함께 모여 도움이 필요한 기관을 섬기며 예수님의 사랑을 실천합니다",
  },
  {
    title: "동아리",
    title2: "",
    ageDesc:
      "축구, 독서, 볼링, 사회봉사 등 다양한 동아리 활동을 통해 함께 교제하고 성장합니다",
  },
];

const CommunityWrapper = styled(StyledDiv)`
  font-family: ${(props) => props.theme.FONT.DO_HYEON};
  display: flex;
  flex-direction: column;
`;

const Header = styled(StyledDiv)`
  line-height: 2rem;
  background-color: ${(props) => props.theme.COLOR.GREEN};
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
  align-items: flex-start;
  width: 330px;
  margin: 2rem auto;
  line-height: 1.6;
  flex-wrap: wrap;
  justify-content: center;

  ::after {
    width: 230px;
    content: "";
    padding-bottom: 5rem;
    border-bottom: 2px solid ${(props) => props.theme.COLOR.GRAY_BORDER};
  }
  :last-child::after {
    content: "";
    padding-bottom: 8rem;
    width: 0;
  }
`;
const CellTitleWrap = styled(StyledDiv)`
  align-items: flex-end;
  margin: 0;
  width: 95px;
`;
const CellTitleText = styled(StyledDiv)`
  font-size: 1.3rem;
  text-align: center;
  white-space: nowrap;
  word-break: keep-all;
  color: #343a40;
  font-weight: bold;
`;
const CellDesc = styled(StyledDiv)`
  display: inline-block;
  margin: 0;
  margin-left: 1.5rem;
  width: 200px;
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
  border: 1rem solid ${(props) => props.theme.COLOR.GREEN};
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
  text-align: center;
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
            청년부 <br /> 특별 프로그램
          </PageTitle>
        </PageTitleWrapper>
        {textArr.map(({ title, title2, ageDesc }) => (
          <Cell key={title}>
            <CellTitleWrap>
              <CellTitleText>&ldquo;{title}&rdquo;</CellTitleText>
              <CellTitleText>{title2}</CellTitleText>
            </CellTitleWrap>
            <CellDesc>{ageDesc}</CellDesc>
          </Cell>
        ))}
      </CommunityWrapper>
    </>
  );
}

export default Community;
