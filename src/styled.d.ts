import "styled-components";

import { ICustomTheme } from "interfaces/styled";

declare module "styled-components" {
  export interface DefaultTheme extends ICustomTheme {}
}
