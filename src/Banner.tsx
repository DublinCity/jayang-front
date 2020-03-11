import React, { useState } from 'react';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';

import styled from 'styled-components';

const COLOR_LIST = [
	'#c92a2a',
	'#862e9c',
	'#5f3dc4',
	'#0b7285',
	'#ffa94d',
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
		<BannerWrapper>
			<AutoPlaySwipeableViews enableMouseEvents index={index} onChangeIndex={setIndex} interval={2000}>
				{BannerTexts.map((banner,idx) => <BannerItem key={banner} idx={idx}>{banner}</BannerItem>)}
			</AutoPlaySwipeableViews>
		</BannerWrapper>
	);};

export default Banner;
