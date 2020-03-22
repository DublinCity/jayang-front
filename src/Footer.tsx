import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
	padding-top: 5rem;	
	padding-bottom: 2rem;	
	height: 40%;
	border-top: 1px solid #868e96;
	background-color: white;
`;

const FooterContent = styled.div`
	display: flex;
	flex-direction: column;
	margin: auto;
	width: 70%;
`;

const FooterDescription = styled.div<{fontSize: string, fontWeight?:string}>`
	font-size: ${props => props.fontSize};
	font-weight: ${props => props.fontWeight};
	text-align: center;
	margin-top: 0.5rem;
`;

const Footer = () => {
	return (
		<FooterWrapper className="Footer-wrapper">
			<FooterContent>
				<FooterDescription fontSize="small">
				© 2020. ILURE. All rights reserved.
				</FooterDescription>
				<FooterDescription fontSize="medium" fontWeight="lighter">
				서울시 광진구 자양번영로 77 &nbsp; TEL. +82 10 5663 6667 &nbsp; FAX. 1234.5678.90
				</FooterDescription>
				<FooterDescription fontSize="smaller" fontWeight="lighter">
				사업자등록번호: 119-114-112  |  대표이사: 이철규  |  그리고 우리들
				</FooterDescription>
			</FooterContent>
		</FooterWrapper>
	);
};

export default Footer;