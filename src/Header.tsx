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

	@media (max-width: 500px) {
		text-align: center;
		padding: 1rem 0 0 0;
		flex-direction: column;
		justify-content: space-around;
	}
`;

const Logo = styled.div`
`;
const Navigation = styled.nav`
	@media (max-width: 500px) {
		display: flex;
		flex-direction: column;
		}
`;
const NavigationSpan= styled.span`
	margin: 0 0.8rem;

	@media (max-width: 500px) {
		border-bottom: 1px solid #fff5f5;
		margin: 0;
		padding: 0.5rem;

		:last-child {
				border: none;
			}
		}
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