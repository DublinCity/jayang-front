import React, { ReactNode } from 'react';
import styled from 'styled-components';

type FooterProps = {
  children: ReactNode;
}

const FooterWrapper = styled.div`
	height: 40%;
`;

const Footer = ({ children }: FooterProps) => {

	return (
		<FooterWrapper className="Footer-wrapper">
			{children} 
		</FooterWrapper>
	);
};

export default Footer;