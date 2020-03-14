import React, { useEffect } from 'react';
import styled from 'styled-components';

const LocationWrapper = styled.div`
  height: 100%;
	padding: 4rem;
`;

const LocationTitle = styled.div`
	font-size: 1.5rem;
	margin-bottom: 4rem;
	font-weight: bold;
	text-align: center;
	color: #495057;
`;
const LoactionMap = styled.div<{id:string}>`
  margin: auto;
	border: 1.4px solid #ced4da;
  height: 80%;
`;

const Location = () => {
	useEffect(() => {
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(37.5374388,127.0753194),
			level: 5
		};

		var kakaoMap = new kakao.maps.Map(container, options);
		kakaoMap.setMinLevel(3);
		kakaoMap.setMaxLevel(5);

		// 지도에 마커를 생성하고 표시한다
		new kakao.maps.Marker({
			position: new kakao.maps.LatLng(37.5374388,127.0753194), // 마커의 좌표
			map: kakaoMap // 마커를 표시할 지도 객체
		});
	}, []);

	return (
		<LocationWrapper >
			<LocationTitle>수고하고 짐진 자들아. 오라 내가 너희를 쉬게 하리라</LocationTitle>
			<LoactionMap id="map" />
		</LocationWrapper>
	);
};

export default Location;