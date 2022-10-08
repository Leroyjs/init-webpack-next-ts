import { breakpointsWidth, Breakpoints } from "./constants";

import facepaint from "facepaint";

const getMedia = (condition: string) => (value: string) =>
  `@media(${condition}: ${value})`;

const getMediaMaxWidth = getMedia("max-width");

const getMediaMaxWidthWithValueInPx = (value: string) =>
  getMediaMaxWidth(value);

const mediaQuery = facepaint(
  Breakpoints
    .map((breakpointName) =>
      getMediaMaxWidthWithValueInPx(breakpointsWidth[breakpointName])
    )
    .slice(1)
);

export const getResponsiveStyle = (styleName: string) => (values: string[]) =>
  mediaQuery({ [styleName]: values });