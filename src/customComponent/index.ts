import styled from 'styled-components';

type DivProps = {
  textAlign?: string;
  fontSize?: string;
  fontWeight: string;
}
export const StyledDiv = styled.div.attrs((props: DivProps) => ({
	textAlign: props.textAlign || 'left',
	fontSize: props.fontSize || '1rem',
	fontWeight: props.fontWeight || 'normal',
}))`
  text-align: ${props => props.textAlign};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
`;