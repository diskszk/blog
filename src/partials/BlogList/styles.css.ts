import { style } from "@vanilla-extract/css";

export const blogItemContainer = style({
  border: "solid 1px",
});

export const text = style({
  display: "-webkit-box",
  WebkitLineClamp: "2",
  overflow: "hidden",
  WebkitBoxOrient: "vertical",
});

export const iconImage = style({
  borderRadius: "25%",
});
