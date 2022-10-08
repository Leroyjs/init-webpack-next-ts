import {Breakpoints, FontSizes, IndentSizes} from "./types";

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

const BASE_SIZE = 4;

export const indents: Record<Breakpoints, Record<IndentSizes, string>> = {
    [Breakpoints.desktopXXLG]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopXLG]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopLG]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopMD]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopSM]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
    [Breakpoints.tabletLG]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
    [Breakpoints.tabletSM]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
    [Breakpoints.phone]: {
        [IndentSizes.ZERO]: '0vw',
        [IndentSizes.XXSM]: `${BASE_SIZE}px`,
        [IndentSizes.XSM]: `${2 * BASE_SIZE}px`,
        [IndentSizes.SM]: `${3 * BASE_SIZE}px`,
        [IndentSizes.MDSM]: `${4 * BASE_SIZE}px`,
        [IndentSizes.MD]: `${5 * BASE_SIZE}px`,
        [IndentSizes.MDLG]: `${6 * BASE_SIZE}px`,
        [IndentSizes.LG]: `${7 * BASE_SIZE}px`,
        [IndentSizes.XLG]: `${8 * BASE_SIZE}px`,
        [IndentSizes.XXLG]: `${9 * BASE_SIZE}px`,
    },
}

export const fontSizes: Record<Breakpoints, Record<FontSizes, string>> = {
    [Breakpoints.desktopXXLG]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopXLG]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopLG]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopMD]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
    [Breakpoints.desktopSM]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
    [Breakpoints.tabletLG]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
    [Breakpoints.tabletSM]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
    [Breakpoints.phone]: {
        [FontSizes.H1]: `${7 * BASE_SIZE}px`,
        [FontSizes.H2]: `${6 * BASE_SIZE}px`,
        [FontSizes.H3]: `${5 * BASE_SIZE}px`,
        [FontSizes.text]: `${4 * BASE_SIZE}px`,
        [FontSizes.caption]: `${4 * BASE_SIZE}px`,
    },
};

export const zIndex = {
    zIndexGlobal: 10000,
    zIndexModal: 1000,
    zIndexHeader: 100,
    zIndexFrontItem: 10,
    zIndexBackItem: -1,
};
