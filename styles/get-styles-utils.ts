import {
  Breakpoints,
  FontSizeNames,
  IndentNames,
  fontSizes,
  indents,
  subsequenceOfBreakpoints,
} from "./constants";
import { DirectionT, GetCurrentIndentStyleT, NamesTypeT } from "./types";

import { getResponsiveStyle } from "./media-query-utils";

export const getCurrentDictionaryValue = <B extends Breakpoints, T extends NamesTypeT>(
  dictionary: Record<B, Partial<Record<T, string>>>,
  breakpointName: B,
  type: T
): string | undefined => dictionary?.[breakpointName]?.[type];

export const getCurrentStyleByDictionary =
  <T extends NamesTypeT>(dictionary: Record<Breakpoints, Partial<Record<T, string>>>) =>
  (propertyName: string) =>
  (type: T) =>
    getResponsiveStyle(propertyName)(
      subsequenceOfBreakpoints.map((breakpointName) =>
        getCurrentDictionaryValue(dictionary, breakpointName, type)
      )
    );

const getCurrentIndentStyle = getCurrentStyleByDictionary(indents);

const getCurrentIndentStylesByDirection =
  (styleName: "margin" | "padding") => (type: IndentNames, direction: DirectionT) => {
    switch (direction) {
      case "top":
        return getCurrentIndentStyle(styleName + "Top")(type);
      case "bottom":
        return getCurrentIndentStyle(styleName + "Bottom")(type);
      case "left":
        return getCurrentIndentStyle(styleName + "Left")(type);
      case "right":
        return getCurrentIndentStyle(styleName + "Right")(type);
      case "vertical":
        return [
          getCurrentIndentStyle(styleName + "Top")(type),
          getCurrentIndentStyle(styleName + "Bottom")(type),
        ];
      case "horizontal":
        return [
          getCurrentIndentStyle(styleName + "Left")(type),
          getCurrentIndentStyle(styleName + "Right")(type),
        ];
      default:
        return getCurrentIndentStyle(styleName)(type);
    }
  };

export const getCurrentFontSizeStyle = (type: FontSizeNames) =>
  getCurrentStyleByDictionary(fontSizes)("fontSize")(type);

export const getCurrentMarginStyle: GetCurrentIndentStyleT = (type, direction) =>
  getCurrentIndentStylesByDirection("margin")(type, direction);

export const getCurrentPaddingStyle: GetCurrentIndentStyleT = (type, direction) =>
  getCurrentIndentStylesByDirection("padding")(type, direction);
