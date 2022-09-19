import { injectGlobal } from "@emotion/css";
import { resetStyles } from "./reset.style";

export const initGlobalStyles = injectGlobal`
  ${resetStyles}
  
  body {
    scroll-behavior: smooth;
  }
`;
