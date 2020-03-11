import React, { useEffect } from 'react';
import styled from 'styled-components';

const LocationWrapper = styled.div`
`;

const LoactionMap = styled.div<{id:string}>`
top: 10%;
left: 25%;
width: 50%;
height: 50%;
`;

const Location = () => {
	useEffect(() => {
		var container = document.getElementById('map');
		var options = {
			center: new kakao.maps.LatLng(33.450701, 126.570667),
			level: 3
		};

		new kakao.maps.Map(container, options);
	}, []);

	return (
		// <LocationWrapper >
		<LoactionMap id="map"></LoactionMap>
		// </LocationWrapper>
	);
};

export default Location;