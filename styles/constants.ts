import { FontSizeNamesT, IndentsT } from "./types";

export enum Breakpoints {
  desktopXXLG = "1920px",
  desktopXLG = "1920px",
  desktopLG = "1600px",
  desktopMD = "1440px",
  desktopSM = "1280px",
  tabletLG = "1024px",
  tabletSM = "768px",
  phone = "600px",
}

export const subsequenceOfBreakpoints = [
  Breakpoints.desktopXXLG, // больше чем 1920px
  Breakpoints.desktopXLG,
  Breakpoints.desktopLG,
  Breakpoints.desktopMD,
  Breakpoints.desktopSM,
  Breakpoints.tabletLG,
  Breakpoints.tabletSM,
  Breakpoints.phone,
];

export const enum IndentNames {
  ZERO = "ZERO",
  XXSM = "XXSM",
  XSM = "XSM",
  SM = "SM",
  MDSM = "MDSM",
  MD = "MD",
  MDLG = "MDLG",
  LG = "LG",
  XLG = "XLG",
  XXLG = "XXLG",
}

export const enum FontSizeNames {
  H1 = "H1",
  H2 = "H2",
  H3 = "H3",
  text = "text",
  caption = "caption",
}

export const enum Colors {
  white = "#FFFFFF",
  black = "#101010",
}

export const enum FontFamilies {
  main = "Roboto, Arial, sans-serif",
  sub = "Roboto, Arial, sans-serif",
}

export const baseX = 4;

export const indents: IndentsT = {
  [Breakpoints.desktopXXLG]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.SM]: `${3 * baseX}px`,
    [IndentNames.MDSM]: `${4 * baseX}px`,
    [IndentNames.MD]: `${5 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
  [Breakpoints.desktopXLG]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
  [Breakpoints.desktopLG]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.SM]: `${3 * baseX}px`,
    [IndentNames.MDSM]: `${4 * baseX}px`,
    [IndentNames.MD]: `${5 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
  [Breakpoints.desktopMD]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.SM]: `${3 * baseX}px`,
    [IndentNames.MDSM]: `${4 * baseX}px`,
    [IndentNames.MD]: `${5 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
  [Breakpoints.desktopSM]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.SM]: `${3 * baseX}px`,
    [IndentNames.MDSM]: `${4 * baseX}px`,
    [IndentNames.MD]: `${5 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
  [Breakpoints.tabletLG]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.SM]: `${3 * baseX}px`,
    [IndentNames.MDSM]: `${4 * baseX}px`,
    [IndentNames.MD]: `${5 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
  [Breakpoints.tabletSM]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.SM]: `${3 * baseX}px`,
    [IndentNames.MDSM]: `${4 * baseX}px`,
    [IndentNames.MD]: `${5 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
  [Breakpoints.phone]: {
    [IndentNames.ZERO]: "0vw",
    [IndentNames.XXSM]: `${baseX}px`,
    [IndentNames.XSM]: `${2 * baseX}px`,
    [IndentNames.SM]: `${3 * baseX}px`,
    [IndentNames.MDSM]: `${4 * baseX}px`,
    [IndentNames.MD]: `${5 * baseX}px`,
    [IndentNames.MDLG]: `${6 * baseX}px`,
    [IndentNames.LG]: `${7 * baseX}px`,
    [IndentNames.XLG]: `${8 * baseX}px`,
    [IndentNames.XXLG]: `${9 * baseX}px`,
  },
};

export const fontSizes: FontSizeNamesT = {
  [Breakpoints.desktopXXLG]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
  [Breakpoints.desktopXLG]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
  [Breakpoints.desktopLG]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
  [Breakpoints.desktopMD]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
  [Breakpoints.desktopSM]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
  [Breakpoints.tabletLG]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
  [Breakpoints.tabletSM]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
  [Breakpoints.phone]: {
    [FontSizeNames.H1]: `${7 * baseX}px`,
    [FontSizeNames.H2]: `${6 * baseX}px`,
    [FontSizeNames.H3]: `${5 * baseX}px`,
    [FontSizeNames.text]: `${4 * baseX}px`,
    [FontSizeNames.caption]: `${4 * baseX}px`,
  },
};

export const enum ZIndex {
  global = 10000,
  modal = 1000,
  header = 100,
  frontItem = 10,
  backItem = -1,
}
