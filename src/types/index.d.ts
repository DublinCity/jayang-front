import { Theme } from "../GlobalStyle";

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
