import React from 'react';
import styled from 'styled-components';
import locationImg from '../src/img/location.jpeg';

const LocationWrapper = styled.div`
	padding: 2rem;
	padding-bottom: 40%;
	margin-bottom: -5rem;
`;

const LocationTitle = styled.div`
	font-size: 2rem;
	font-weight: 300;
	text-align: center;
	color: #495057;
`;
const LoactionMap = styled.div<{backgroundImg: string}>`
  margin: 10% 0;
  padding-bottom: 100%;
	background-image: url(${props => props.backgroundImg});
	background-position: top;
	background-repeat: no-repeat;
	background-size: contain;
`;

const Location = () => {
	/**
	 * 카카오 지도 서비스
	 */
	// useEffect(() => {
	// 	var container = document.getElementById('map');
	// 	var options = {
	// 		center: new kakao.maps.LatLng(37.5374388,127.0753194),
	// 		level: 5
	// 	};

	// 	var kakaoMap = new kakao.maps.Map(container, options);
	// 	kakaoMap.setMinLevel(3);
	// 	kakaoMap.setMaxLevel(5);

	// 	// 지도에 마커를 생성하고 표시한다
	// 	new kakao.maps.Marker({
	// 		position: new kakao.maps.LatLng(37.5374388,127.0753194), // 마커의 좌표
	// 		map: kakaoMap // 마커를 표시할 지도 객체
	// 	});
	// }, []);

	return (
		<LocationWrapper id="location">
			<LocationTitle>🚌 오라이</LocationTitle>
			<LoactionMap backgroundImg={locationImg} />
		</LocationWrapper>
	);
};

export default Location;