import { NamesOfBreakpoints } from "./constants";

export type IndentNamesT =
  | "xxlg"
  | "xlg"
  | "lg"
  | "mdld"
  | "md"
  | "mdsm"
  | "sm"
  | "xsm"
  | "xxsm"
  | "zero";

export type IndentDirectionT =
  | "default"
  | "top"
  | "bottom"
  | "left"
  | "right"
  | "vertical"
  | "horizontal";

export type FontSizeNamesT = "h1" | "h2" | "h3" | "text" | "caption";

export type NamesTypeT = FontSizeNamesT | IndentNamesT;

export type NamesOfBreakpointsT = keyof typeof NamesOfBreakpoints;

export type DictionaryT = Record<
  NamesOfBreakpointsT,
  Record<NamesTypeT, string>
>;

export type PaddingPropsT = {
  px?: IndentNamesT;
  py?: IndentNamesT;
  pt?: IndentNamesT;
  pb?: IndentNamesT;
  pl?: IndentNamesT;
  pr?: IndentNamesT;
  p?: IndentNamesT;
};

export type MarginPropsT = {
  mx?: IndentNamesT;
  my?: IndentNamesT;
  mt?: IndentNamesT;
  mb?: IndentNamesT;
  ml?: IndentNamesT;
  mr?: IndentNamesT;
  m?: IndentNamesT;
};
