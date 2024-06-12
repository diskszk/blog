import { style } from "@vanilla-extract/css";
import { calc } from "@vanilla-extract/css-utils";

export const mainContainer = style({
  minHeight: calc.subtract("100vh", "112px", "64px"),
});
