import { DirectionT, GetCurrentIndentStyleT, MarginPropsT, PaddingPropsT } from "./types";
import { getCurrentMarginStyle, getCurrentPaddingStyle } from "./get-styles-utils";

import { DynamicStyle } from "facepaint";
import { IndentNames } from "./constants";

enum PaddingDirectionDictionary {
  p = "default",
  px = "horizontal",
  py = "vertical",
  pt = "top",
  pb = "bottom",
  pl = "left",
  pr = "right",
}

enum MarginDirectionDictionary {
  m = "default",
  mx = "horizontal",
  my = "vertical",
  mt = "top",
  mb = "bottom",
  ml = "left",
  mr = "right",
}

const getIndentStylesByProps = <K extends string>(
  props: Record<K, IndentNames | undefined>,
  directionDictionary: Record<K, DirectionT>,
  getCurrentIndentStyleHandler: GetCurrentIndentStyleT
): (DynamicStyle | DynamicStyle[])[] =>
  (Object.keys(props) as K[]).reduce((acc, key) => {
    const type = props[key];

    if (type) {
      const arrayOfIndents = getCurrentIndentStyleHandler(type, directionDictionary[key]);

      return [...arrayOfIndents, ...acc];
    } else {
      return acc;
    }
  }, [] as (DynamicStyle | DynamicStyle[])[]);

export const applyMargins = ({ mx, my, mt, mb, ml, mr, m }: MarginPropsT) => {
  const marginProps = { mx, my, mt, mb, ml, mr, m };

  const marginStyles = getIndentStylesByProps(
    marginProps,
    MarginDirectionDictionary,
    getCurrentMarginStyle
  );

  return marginStyles;
};

export const applyPaddings = ({ px, py, pt, pb, pl, pr, p }: PaddingPropsT) => {
  const paddingProps = { px, py, pt, pb, pl, pr, p };

  const paddingStyles = getIndentStylesByProps(
    paddingProps,
    PaddingDirectionDictionary,
    getCurrentPaddingStyle
  );

  return paddingStyles;
};
