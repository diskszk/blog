import { style } from "@vanilla-extract/css";

export const border = style({
  borderBottom: "solid 1px",
});

export const radius = style({
  borderRadius: "30%",
});

export const anchor = style({
  ":hover": {
    backgroundColor: "inherit",
  },
});

export const verticalNavigation = style({
  backgroundColor: "#E0E0E0",
  zIndex: "1",
});
