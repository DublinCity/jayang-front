import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";
import { useHistory } from "react-router-dom";
import { COLOR } from "../GlobalStyle";
import { CellColumn } from "../Common/Cell";
import Desc from "../Common/Desc";

const basicEdu = [
  {
    title: "새가족",
    title2: "교육",
    desc: ["두근두근~", "자양교회 청년부에서의", "새로운 출발! 새가족 교육"],
    when: "주일 오후 3시",
    howLong: "등록 시점부터 4주",
    who: ["자양교회 청년부", "처음 등록하는 누구나!"],
  },
  {
    title: "일대일",
    title2: "동반자반",
    desc: ["신앙을 함께할", "든든한 멘토와 함께!", "일대일 동반자반"],
    when: "상·하반기 1회",
    howLong: "총 12주",
    who: ["새가족 교육 수료자 이상", "희망하는 사람 누구나"],
  },
];

const advanceEdu = [
  {
    title: "일대일",
    title2: "양육자반",
    desc: ["영혼을 돌보는 목자의 삶이란?", "일대일 양육자반"],
    when: "상·하반기 1회",
    howLong: "총 12주",
    who: ["동반자반 교육", "수료자 이상"],
  },
  {
    title: "JDTS",
    title2: "",
    desc: ["예수님을 더", "닮고 싶은 청년들", "여기로 모여라!"],
    when: "상반기 1회",
    howLong: ["총 13주", "(해외 단기선교 1주 포함)"],
    who: ["동반자반 교육", "수료자 이상"],
  },
  {
    title: "LTS",
    title2: "",
    desc: ["사랑 넘치는 사랑방 만들기 프로젝트! 사랑방 리더학교"],
    when: "상·하반기 1회",
    howLong: "상반기 4주, 하반기 2주",
    who: ["사랑방 리더·부리더,", "리더 추천자 1인"],
  },
  {
    title: "전도폭발",
    title2: "XEE",
    desc: ["땅 끝까지 전하라! 사람을 낚는 어부가 되게 하리라~"],
    who: "동반자반 교육 수료자 이상",
  },
];

const commonEdu = [
  {
    title: "큐티스쿨",
    title2: "",
    desc: ["큐티는 도대체 어떻게 하는 겁니까!? 궁금하다면 큐티스쿨!"],
    when: "2020년 상반기",
    howLong: "1회 특강",
    who: "자양교회 청년이라면 누구나",
  },
  {
    title: "성경",
    title2: "파노라마",
    desc: ["성경 파노라마 교육 들으면 어려운 성경이 술술~"],
    when: ["상·하반기 1회", "(각각 구약/신약)"],
    howLong: "상·하반기 각각 3주",
    who: "자양교회 청년이라면 누구나",
  },
];

const EducationWrapper = styled(StyledDiv)`
  font-family: ${(props) => props.theme.FONT.DO_HYEON};
  display: flex;
  flex-direction: column;
  letter-spacing: -0.06rem;
`;

const Header = styled(StyledDiv)<{ backColor: keyof typeof COLOR }>`
  line-height: 2rem;
  background-color: ${(props) => props.theme.COLOR[props.backColor]};
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
  font-size: 20.8px;
  line-height: 24px;
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
  font-size: 13px;
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

const PageTitleWrapper = styled(StyledDiv)<{ borderColor: keyof typeof COLOR }>`
  margin: 70px auto;
  width: 270px;
  border: 1rem solid ${(props) => props.theme.COLOR[props.borderColor]};
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

const EduInfo = styled(StyledDiv)`
  display: flex;
  font-size: 15px;
  line-height: 25px;
  letter-spacing: -0.04rem;
`;

const EduTitle = styled(StyledDiv)`
  width: 55px;
`;

const EduDesc = styled(StyledDiv)`
  flex: 5;
`;

const EduItem = ({
  title,
  content,
}: {
  title?: string;
  content?: string | string[];
}) => (
  <EduInfo>
    {content && (
      <>
        <EduTitle>{title}</EduTitle>
        <EduDesc>
          {Array.isArray(content)
            ? content.map((item, id) => <div key={id}>{item}</div>)
            : content}
        </EduDesc>
      </>
    )}
  </EduInfo>
);

function Education() {
  const history = useHistory();
  return (
    <>
      <EducationWrapper>
        <Header backColor="SKY_BLUE">
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
        <PageTitleWrapper borderColor="SKY_BLUE">
          <PageTitle fontSize="3.5rem">양육 기본 과정</PageTitle>
        </PageTitleWrapper>
        {basicEdu.map(({ title, title2, desc, when, who, howLong }) => (
          <CellColumn key={title}>
            <CellTitleWrap>
              <CellTitleText>&ldquo;{title}&rdquo;</CellTitleText>
              <CellTitleText>{title2}</CellTitleText>
            </CellTitleWrap>
            <CellDesc>
              <Desc desc={desc} />
              <EduItem title="언  제?" content={when} />
              <EduItem title="얼마나?" content={howLong} />
              <EduItem title="누  구?" content={who} />
            </CellDesc>
          </CellColumn>
        ))}
      </EducationWrapper>
      <EducationWrapper>
        <PageTitleWrapper borderColor="OCEAN_BLUE">
          <PageTitle fontSize="3.5rem">양육 심화 과정</PageTitle>
        </PageTitleWrapper>
        {advanceEdu.map(({ title, title2, desc, when, who, howLong }) => (
          <CellColumn key={title}>
            <CellTitleWrap>
              <CellTitleText>&ldquo;{title}&rdquo;</CellTitleText>
              <CellTitleText>{title2}</CellTitleText>
            </CellTitleWrap>
            <CellDesc>
              <Desc desc={desc} />
              <EduItem title="언 제?" content={when} />
              <EduItem title="얼마나?" content={howLong} />
              <EduItem title="누 구?" content={who} />
            </CellDesc>
          </CellColumn>
        ))}
      </EducationWrapper>
      <EducationWrapper>
        <PageTitleWrapper borderColor="DEEP_BLUE">
          <PageTitle fontSize="3.5rem">양육 공통 과정</PageTitle>
        </PageTitleWrapper>
        {commonEdu.map(({ title, title2, desc, when, who, howLong }) => (
          <CellColumn key={title}>
            <CellTitleWrap>
              <CellTitleText>&ldquo;{title}&rdquo;</CellTitleText>
              <CellTitleText>{title2}</CellTitleText>
            </CellTitleWrap>
            <CellDesc>
              <Desc desc={desc} />
              <EduItem title="언 제?" content={when} />
              <EduItem title="얼마나?" content={howLong} />
              <EduItem title="누 구?" content={who} />
            </CellDesc>
          </CellColumn>
        ))}
      </EducationWrapper>
    </>
  );
}

export default Education;
