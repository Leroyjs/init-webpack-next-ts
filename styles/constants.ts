import { NamesOfBreakpointsT } from "./types";

export const colors = {
  white: "#FFFFFF",
  black: "#101010",
};

const mainFontName = "Roboto";
const subFontName = "Roboto";

export const fontFamilies = {
  mainFont: `${mainFontName}, Arial, sans-serif`,
  subFont: `${subFontName}, Arial, sans-serif`,
};

export enum NamesOfBreakpoints {
  desktopXXLG = "desktopXXLG",
  desktopXLG = "desktopXLG",
  desktopLG = "desktopLG",
  desktopMD = "desktopMD",
  desktopSM = "desktopSM",
  tabletLG = "tabletLG",
  tabletSM = "tabletSM",
  phone = "phone",
}

const {
  desktopXXLG,
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
} = NamesOfBreakpoints;

export const subsequenceOfBreakpoints = [
  desktopXXLG, // больше чем 1920px
  desktopXLG,
  desktopLG,
  desktopMD,
  desktopSM,
  tabletLG,
  tabletSM,
  phone,
];

export const breakpointsWidth = {
  [desktopXXLG]: "1920px",
  [desktopXLG]: "1920px",
  [desktopLG]: "1600px",
  [desktopMD]: "1440px",
  [desktopSM]: "1280px",
  [tabletLG]: "1024px",
  [tabletSM]: "768px",
  [phone]: "600px",
};

const baseX = 4;

export const indents: Record<NamesOfBreakpointsT, Record<string, string>> = {
  [desktopXXLG]: {},
  [desktopXLG]: {},
  [desktopLG]: {},
  [desktopMD]: {},
  [desktopSM]: {},
  [tabletLG]: {},
  [tabletSM]: {},
  [phone]: {},
};
// xxlg: `${9 * baseX}px`,
// xlg: `${8 * baseX}px`,
// lg: `${7 * baseX}px`,
// mdld: `${6 * baseX}px`,
// md: `${5 * baseX}px`,
// mdsm: `${4 * baseX}px`,
// sm: `${3 * baseX}px`,
// xsm: `${2 * baseX}px`,
// xxsm: `${baseX}px`,
// zero: `0px`,

export const fontSizes: Record<NamesOfBreakpointsT, Record<string, string>> = {
  [desktopXXLG]: {},
  [desktopXLG]: {},
  [desktopLG]: {},
  [desktopMD]: {},
  [desktopSM]: {},
  [tabletLG]: {},
  [tabletSM]: {},
  [phone]: {},
};
// h1: `${7 * baseX}px`,
// h2: `${6 * baseX}px`,
// h3: `${5 * baseX}px`,
// text: `${4 * baseX}px`,
// caption: `${3 * baseX}px`,

export const zIndex = {
  zIndexGlobal: 10000,
  zIndexModal: 1000,
  zIndexHeader: 100,
  zIndexFrontItem: 10,
  zIndexBackItem: -1,
};
