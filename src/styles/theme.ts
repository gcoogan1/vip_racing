import { css } from "styled-components";

type FontType = {
  fontSize: string;
  fontFamily: string;
  fontWeight: number;
  lineHeight: string;
  fontStyle?: string;
  textTransform?: string;
};


export const fontCSS = (font: FontType) => css`
  font-size: ${font.fontSize};
  font-family: ${font.fontFamily};
  font-weight: ${font.fontWeight};
  line-height: ${font.lineHeight};
  font-style: ${font.fontStyle || "normal"};
  text-transform: ${font.textTransform || "none"};
`;


export type Theme = {
  colors: {
    primary: Record<string, string>;
    surface: Record<string, string>;
    accent: Record<string, string>;
  };
  typography: {
    title: Record<string, FontType>;
    subtitle: Record<string, FontType>;
    body: Record<string, FontType>;
  };
  border: {
    width: Record<string, string>;
    radius: Record<string, string>;
  };
  layout: {
    space: Record<string, string>;
  };
};


export const theme: Theme = {
  colors: {
    primary: {
      yellow: "#f1e447",
      red: "#de001b",
    },
    surface: {
      base: "#160e0b",
      text1: "#ffffff",
      text2: "#d0cfce",
      text3: "#a29f9d",
      line: "#5c5654",
    },
    accent: {
      gold: "#d0ba03",
      silver: "#7a7675",
      bronze: "#3c2617",
    },
  },
  typography: {
    title: {
      large: {
        fontSize: "48px",
        fontFamily: "'Zen Dots', sans-serif",
        fontWeight: 400,
        lineHeight: "56px",
      },
      medium: {
        fontSize: "36px",
        fontFamily: "'Zen Dots', sans-serif",
        fontWeight: 400,
        lineHeight: "40px",
      },
      small: {
        fontSize: "24px",
        fontFamily: "'Zen Dots', sans-serif",
        fontWeight: 400,
        lineHeight: "32px",
      },
    },
    subtitle: {
      large: {
        fontSize: "18px",
        fontFamily: "'Quantico', sans-serif",
        fontWeight: 700,
        lineHeight: "24px",
        fontStyle: "italic",
        textTransform: "uppercase",
      },
      medium: {
        fontSize: "14px",
        fontFamily: "'Quantico', sans-serif",
        fontWeight: 700,
        lineHeight: "20px",
        textTransform: "uppercase",
      },
    },
    body: {
      bold: {
        fontSize: "14px",
        fontFamily: "'Quantico', sans-serif",
        fontWeight: 700,
        lineHeight: "20px",
      },
      regular: {
        fontSize: "14px",
        fontFamily: "'Quantico', sans-serif",
        fontWeight: 400,
        lineHeight: "20px",
      },
      small: {
        fontSize: "12px",
        fontFamily: "'Quantico', sans-serif",
        fontWeight: 400,
        lineHeight: "16px",
      },
    },
  },
  border: {
    width: {
      thin: "1px",
      regular: "2px",
      thick: "4px",
    },
    radius: {
      small: "8px",
      medium: "16px",
      large: "32x",
      round: "999px",
    },
  },
  layout: {
    space: {
      xxsmall: "2px",
      xsmall: "4px",
      small: "8px",
      medSmall: "12px",
      medium: "16px",
      medLarge: "24px",
      large: "32px",
      xlarge: "64px",
    },
  },
};
