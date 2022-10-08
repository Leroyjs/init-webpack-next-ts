import {
  IndentDirectionT,
  IndentSizes,
  MarginPropsT,
  PaddingPropsT,
} from "./types";
import {
  getCurrentMarginStyle,
  getCurrentPaddingStyle,
} from "./get-styles-utils";

type DirectionDictionaryT =
  | Record<keyof PaddingPropsT, IndentDirectionT>
  | Record<keyof MarginPropsT, IndentDirectionT>;

type GetCurrentIndentStyleHandlerT = (
  type: IndentSizes,
  direction: IndentDirectionT
) => string[];

const getIndentStylesByProps = <T extends MarginPropsT | PaddingPropsT>(
  props: T,
  directionDictionary: DirectionDictionaryT,
  getCurrentIndentStyleHandler: GetCurrentIndentStyleHandlerT
) =>
  Object.keys(props).reduce((acc, key: keyof T): string[] => {
    const type = props[key];

    if (type) {
      const arrayOfIndents = getCurrentIndentStyleHandler(
        directionDictionary[key],
        props[key]
      );

      return [...arrayOfIndents, ...acc];
    } else {
      return acc;
    }
  }, []);

export const applyMargins = ({ mx, my, mt, mb, ml, mr, m }: MarginPropsT) => {
  const marginProps = { mx, my, mt, mb, ml, mr, m };

  enum MarginDirectionDictionary {
    m = "default",
    mx = "horizontal",
    my = "vertical",
    mt = "top",
    mb = "bottom",
    ml = "left",
    mr = "right",
  }

  const marginStyles = getIndentStylesByProps(
    marginProps,
    MarginDirectionDictionary,
    getCurrentMarginStyle
  );

  return marginStyles;
};

export const applyPaddings = ({ px, py, pt, pb, pl, pr, p }: PaddingPropsT) => {
  const paddingProps = { px, py, pt, pb, pl, pr, p };

  enum PaddingDirectionDictionary {
    p = "default",
    px = "horizontal",
    py = "vertical",
    pt = "top",
    pb = "bottom",
    pl = "left",
    pr = "right",
  }

  const paddingStyles = getIndentStylesByProps(
    paddingProps,
    PaddingDirectionDictionary,
    getCurrentPaddingStyle
  );

  return paddingStyles;
};
