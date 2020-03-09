import React from 'react';
import styled from 'styled-components';

const HeaderWrap = styled.header`
	position:relative;
	color: #868e96;
	height: 3rem;
	margin: 2rem 2rem 1rem 2rem;
	font-size: 1.5rem;
`;

const inlineBlock = 'display: inline-flex;';

const Logo = styled.div`${inlineBlock}`;
const Navigation = styled.nav`
	${inlineBlock}
	position: absolute;
	right: 0;
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