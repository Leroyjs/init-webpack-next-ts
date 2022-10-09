import { Breakpoints, subsequenceOfBreakpoints } from "./constants";

import facepaint from "facepaint";

const getMedia = (condition: string) => (value: string) => `@media(${condition}: ${value})`;

const getMediaMaxWidth = getMedia("max-width");

const getMediaMaxWidthWithValueInPx = (value: string) => getMediaMaxWidth(value);

const mediaQuery = facepaint(
  subsequenceOfBreakpoints
    .map((breakpointName) => getMediaMaxWidthWithValueInPx(breakpointName))
    .slice(1)
);

export const getResponsiveStyle = (styleName: string) => (values: (string | undefined)[]) =>
  mediaQuery({ [styleName]: values });
