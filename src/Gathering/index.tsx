import React from "react";
import styled from "styled-components";
import { StyledDiv } from "../customComponent";
import { useHistory } from "react-router-dom";
import { COLOR } from "../GlobalStyle";
import { CellColumn, CellDesc2, CellDesc } from "../Common/Cell";

const gatheringInfo = [
  {
    title: "부별 모임",
    desc: "서로 축복하고, 함께 웃고 우는 자양 청년 공동체 부별 모임!",
    when: `주일 오후 3시
    `,
    howLong: [
      "J공동체 – 교육관 7층",
      "RE공동체 – 교육관 5층",
      "공감공동체 – 본관 로뎀홀",
      "동행공동체 – 본관 4층",
    ],
  },
  {
    title: "사랑방",
    desc:
      "사람과 사람이 만나 사랑이 됩니다! 삶도 나누고, 사랑도 나누고 함께라서 더 즐거운 신앙생활!",
    when: "주일 오후 3시 30분",
    howLong: ["각 사랑방 별 진행"],
  },
  {
    title: "마하나임",
    title2: "기도회",
    desc:
      "혼자서는 기도하기 어렵죠? 그래서 우리는 모여서 함께 기도해요! 개인, 교회, 나라와 민족을 위해 함께 기도하는 시간!",
    when: "수요일 저녁 8시 30분",
    howLong: ["교육관 2층"],
  },
  {
    title: "동아리",
    desc:
      "모이기에 힘쓰는 자양교회 청년부! 축구, 독서, 봉사활동 등등 함께해서 더 행복해요!",
    when: "동아리별 진행",
  },
];

const GatheringWrapper = styled(StyledDiv)`
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

const CellTitleWrap = styled(StyledDiv)`
  align-items: flex-end;
  margin: 0;
  width: 95px;
`;
const CellTitleText = styled(StyledDiv)`
  font-size: 20.8px;
  text-align: center;
  white-space: nowrap;
  word-break: keep-all;
  font-weight: bold;
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
  padding: 10% 10%;
  text-align: center;
`;

const EduInfo = styled(StyledDiv)`
  display: flex;
`;

const EduTitle = styled(StyledDiv)`
  width: 60px;
`;

const EduDesc = styled(StyledDiv)`
  flex: 1;
`;

const Desc = styled(CellDesc)`
  margin-bottom: 1rem;
  margin-left: 0;
  font-size: 17px;
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

function Gathering() {
  const history = useHistory();
  return (
    <>
      <GatheringWrapper>
        <Header backColor="ORANGE">
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
          <HeaderTitle fontSize="1.7rem">모임 안내</HeaderTitle>
        </Header>
        <PageTitleWrapper borderColor="ORANGE">
          <PageTitle fontSize="3.5rem">
            청년부 <br /> 소모임 안내
          </PageTitle>
        </PageTitleWrapper>
        {gatheringInfo.map(({ title, title2, desc, when, howLong }) => (
          <CellColumn key={title}>
            <CellTitleWrap>
              <CellTitleText>&ldquo;{title}&rdquo;</CellTitleText>
              {title2 && <CellTitleText>{title2}</CellTitleText>}
            </CellTitleWrap>
            <CellDesc2>
              <Desc>{desc}</Desc>
              <EduItem title="언  제?" content={when} />
              <EduItem title="어디서 ?" content={howLong} />
            </CellDesc2>
          </CellColumn>
        ))}
      </GatheringWrapper>
    </>
  );
}

export default Gathering;
