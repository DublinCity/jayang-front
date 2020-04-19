import styled from "styled-components";

type DivProps = {
  textAlign?: string;
  fontSize?: string;
  fontWeight?: string;
  lineHeight?: string;
  color?: string;
};
export const StyledDiv = styled.div.attrs((props: DivProps) => ({
  textAlign: props.textAlign || "inherit",
  fontSize: props.fontSize || "inherit",
  fontWeight: props.fontWeight || "inherit",
  lineHeight: props.lineHeight || "inherit",
  color: props.color || "inherit",
}))`
  text-align: ${(props) => props.textAlign};
  font-size: ${(props) => props.fontSize};
  font-weight: ${(props) => props.fontWeight};
  line-height: ${(props) => props.lineHeight};
  color: ${(props) => props.color};
`;
