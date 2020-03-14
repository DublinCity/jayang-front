import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
	position: fixed;
	z-index: 100;
	width: 100%;
	display: flex;
	justify-content: space-between;
	color: #fff5f5;
	background-color: #BF4E58;
	box-shadow: 0px 2px 10px -1px rgba(33,37,41,1);
	padding: 1.5rem 2rem;
	font-size: 1.5rem;
`;

const Logo = styled.div``;
const Navigation = styled.nav`
`;
const NavigationSpan= styled.span`
	margin: 0 0.8rem;
`;

const Header = () => {
	return (
		<HeaderWrap>
			<Logo>자양교회 이미지</Logo>
			<Navigation>
				<NavigationSpan>소개</NavigationSpan>
				<NavigationSpan>교육</NavigationSpan>
				<NavigationSpan>신청</NavigationSpan>	
			</Navigation>
		</HeaderWrap>
	);
};

export default Header;