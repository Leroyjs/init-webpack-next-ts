import {
  DictionaryT,
  FontSizeNamesT,
  IndentDirectionT,
  IndentNamesT,
  NamesOfBreakpointsT,
  NamesTypeT,
} from "./types";
import { fontSizes, indents, subsequenceOfBreakpoints } from "./constants";

import { getResponsiveStyle } from "./media-query-utils";

export const getCurrentDictionaryValue = (
  dictionary: DictionaryT,
  breakpointName: NamesOfBreakpointsT,
  type: NamesTypeT
) => dictionary?.[breakpointName]?.[type];

export const getCurrentStyleByDictionary =
  (dictionary: DictionaryT) => (propertyName: string) => (type: NamesTypeT) =>
    getResponsiveStyle(propertyName)(
      subsequenceOfBreakpoints.map((breakpointName) =>
        getCurrentDictionaryValue(dictionary, breakpointName, type)
      )
    );

const getCurrentIndentStyle = getCurrentStyleByDictionary(indents);

const getCurrentIndentStylesByDirection =
  (styleName: "margin" | "padding") =>
  (direction: IndentDirectionT, type: IndentNamesT) => {
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

export const getCurrentFontSizeStyle = (type: FontSizeNamesT) =>
  getCurrentStyleByDictionary(fontSizes)("fontSize")(type);

export const getCurrentMarginStyle = (
  type: IndentNamesT,
  direction: IndentDirectionT
) => getCurrentIndentStylesByDirection("margin")(direction, type);

export const getCurrentPaddingStyle = (
  type: IndentNamesT,
  direction: IndentDirectionT
) => getCurrentIndentStylesByDirection("padding")(direction, type);
