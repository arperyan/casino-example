import { Theme, lightTheme } from "@rainbow-me/rainbowkit";
import merge from "lodash.merge";

export const myTheme = merge(lightTheme(), {
  colors: {
    accentColor: "var(--color-primary)",
    accentColorForeground: "var(--color-white)",
    connectButtonBackground: "var(--color-primary)",
    modalText: "var(--color-white)",
  },
} as Theme);
