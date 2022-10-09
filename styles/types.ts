import { Breakpoints, FontSizeNames, IndentNames, indents } from "./constants";

import { DynamicStyle } from "facepaint";

export type IndentDirectionT =
  | "default"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "vertical"
  | "horizontal";

export type IndentsT = Record<Breakpoints, Partial<Record<IndentNames, string>>>;
export type FontSizeNamesT = Record<Breakpoints, Partial<Record<FontSizeNames, string>>>;

export type NamesTypeT = FontSizeNames | IndentNames;

export type PaddingPropsT = {
  px?: IndentNames;
  py?: IndentNames;
  pt?: IndentNames;
  pb?: IndentNames;
  pl?: IndentNames;
  pr?: IndentNames;
  p?: IndentNames;
};

export type MarginPropsT = {
  mx?: IndentNames;
  my?: IndentNames;
  mt?: IndentNames;
  mb?: IndentNames;
  ml?: IndentNames;
  mr?: IndentNames;
  m?: IndentNames;
};

export type DirectionT =
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "vertical"
  | "horizontal"
  | "default"
  | undefined;

export type GetCurrentIndentStyleT = (
  type: IndentNames,
  direction: DirectionT
) => DynamicStyle[] | DynamicStyle[][];
