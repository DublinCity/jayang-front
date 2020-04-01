import styled from 'styled-components';

type DivProps = {
  textAlign?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
}
export const StyledDiv = styled.div.attrs((props: DivProps) => ({
	textAlign: props.textAlign || 'left',
	fontSize: props.fontSize || '1rem',
	fontWeight: props.fontWeight || 'normal',
	lineHeight: props.lineHeight || 'normal',
	color: props.color || 'black',
}))`
  text-align: ${props => props.textAlign};
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  line-height: ${props => props.lineHeight};
  color: ${props => props.color};
`;