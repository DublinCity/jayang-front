import React from 'react';
import styled from 'styled-components';

const WorshipInfoWrapper = styled.div`
  height: 20rem;
  display: flex;
`;
const Content = styled.div`
  display:flex;
  margin: auto;
  width: 70%;
  font-size: 3rem;
`;

const RightLeanDiv = styled.div`
  text-align: right;
`;

const LeftLeanDiv = styled.div`
  text-align: left;
`;

const WorshipInfo = () => (
	<WorshipInfoWrapper className="worship-info-wrapper">
		<Content>
			<RightLeanDiv>
				<div>예배시간</div>
				<div>장소</div>  
			</RightLeanDiv>
			<LeftLeanDiv>
				<div>: 13:30</div>
				<div>:  본관 2층</div>  
			</LeftLeanDiv>
		</Content>
	</WorshipInfoWrapper>
);
export default WorshipInfo;