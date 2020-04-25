import "./reset.css";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
	body {
		background: white;
		padding: 0;
		color: #343a40;
		
		@media screen and (min-width: 768px){
			min-width: 1120px;
		}
`;

export const COLOR = {
  YELLOW: "#f0c41b",
  BLUE: "#1976d2",
  PINK: "#fc5765",
  GREEN: "#2f9e44",
  GRAPE: "#9c36b5",
  VIOLET: "#7048e8",
  GRAY_BORDER: "#e9ecef",
  GRAY_7: "#495057",
} as const;

export const FONT = {
  DO_HYEON: `"Do Hyeon", sans-serif`,
  NOTO: `"Noto Sans KR", sans-serif`,
  NANUM_BRUSH: `Nanum Brush Script`,
} as const;

export type Theme = { COLOR: typeof COLOR; FONT: typeof FONT };

export default GlobalStyle;
