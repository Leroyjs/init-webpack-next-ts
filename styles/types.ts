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

export const enum IndentSizes {
    ZERO,
    XXSM,
    XSM,
    SM,
    MDSM,
    MD,
    MDLG,
    LG,
    XLG,
    XXLG,
}

export const enum FontSizes {
    H1,
    H2,
    H3,
    text,
    caption
}

export type IndentDirectionT =
    | "default"
    | "top"
    | "bottom"
    | "left"
    | "right"
    | "vertical"
    | "horizontal";

export type NamesTypeT = FontSizes | IndentSizes;

export type IndentsT = Record<Breakpoints, Record<IndentSizes, string>>;
export type FontSizesT = Record<Breakpoints, Record<FontSizes, string>>;

export type PaddingPropsT = {
    px?: IndentSizes;
    py?: IndentSizes;
    pt?: IndentSizes;
    pb?: IndentSizes;
    pl?: IndentSizes;
    pr?: IndentSizes;
    p?: IndentSizes;
};

export type MarginPropsT = {
    mx?: IndentSizes;
    my?: IndentSizes;
    mt?: IndentSizes;
    mb?: IndentSizes;
    ml?: IndentSizes;
    mr?: IndentSizes;
    m?: IndentSizes;
};
