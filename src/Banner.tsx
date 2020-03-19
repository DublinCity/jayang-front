import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import styled from 'styled-components';

const COLOR_LIST = [
	'#c92a2a',
	'#F2A25C',
	'#8C2E0B',
	'#F2594B',
	'#400606',
];

const BannerTexts = [
	'YANOLJA',
	'GOOGLE',
	'NAVER',
	'TMON',
	'SUMMMER',
];

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);
const BannerItem =styled.div<{idx:number}>`
  padding: 3rem;
  min-height: 5rem;
  font-size:2rem;
  text-align: center;
  color: #f1f3f5;
  background-color: ${props => COLOR_LIST[props.idx]};
`;

const BannerWrapper = styled.div`
  position: relative;
`;

const Banner = () => {
	const [index, setIndex] = useState(0);

	return (
		<BannerWrapper id="banner">
			<AutoPlaySwipeableViews enableMouseEvents index={index} onChangeIndex={setIndex} interval={2000}>
				{BannerTexts.map((banner,idx) => <BannerItem key={banner} idx={idx}>{banner}</BannerItem>)}
			</AutoPlaySwipeableViews>
		</BannerWrapper>
	);};

export default Banner;
