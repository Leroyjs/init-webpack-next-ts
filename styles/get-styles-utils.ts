import {
    FontSizes,
    IndentDirectionT,
    IndentSizes,
    Breakpoints,
    NamesTypeT, IndentsT, FontSizesT,
} from "./types";
import {fontSizes, indents} from "./constants";

import {getResponsiveStyle} from "./media-query-utils";

export const getCurrentDictionaryValue = (
    dictionary: IndentsT | FontSizesT,
    breakpointName: Breakpoints,
    type: NamesTypeT
) => dictionary?.[breakpointName]?.[type];

export const getCurrentStyleByDictionary =
    (dictionary: IndentsT) => (propertyName: string) => (type: NamesTypeT) =>
        getResponsiveStyle(propertyName)(
            Object.keys(Breakpoints).map((breakpointName) =>
                getCurrentDictionaryValue(dictionary, breakpointName as Breakpoints, type)
            )
        );

const getCurrentIndentStyle = getCurrentStyleByDictionary(indents);

const getCurrentIndentStylesByDirection =
    (styleName: "margin" | "padding") =>
        (direction: IndentDirectionT, type: IndentSizes) => {
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

export const getCurrentFontSizeStyle = (type: FontSizes) =>
    getCurrentStyleByDictionary(fontSizes)("fontSize")(type);

export const getCurrentMarginStyle = (
    type: IndentSizes,
    direction: IndentDirectionT
) => getCurrentIndentStylesByDirection("margin")(direction, type);

export const getCurrentPaddingStyle = (
    type: IndentSizes,
    direction: IndentDirectionT
) => getCurrentIndentStylesByDirection("padding")(direction, type);
