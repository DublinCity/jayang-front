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
  YELLOW: "#fdc70b",
  SKY_BLUE: "#87a9d6",
  OCEAN_BLUE: "#4b86d4",
  DEEP_BLUE: "#1567d3",
  PINK: "#e9278a",
  GREEN: "#2f9e44",
  GRAPE: "#9c36b5",
  VIOLET: "#7048e8",
  ORANGE: "#fa6f4e",
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
