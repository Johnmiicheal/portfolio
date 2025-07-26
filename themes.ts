// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import '@fontsource/geist-sans/100.css';
import '@fontsource/geist-sans/200.css';
import '@fontsource/geist-sans/300.css';
import '@fontsource/geist-sans/400.css';
import '@fontsource/geist-sans/500.css';
import '@fontsource/geist-sans/600.css';
import '@fontsource/geist-sans/700.css';
import '@fontsource/geist-sans/800.css';
import '@fontsource/geist-sans/900.css';

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: { heading: "Geist Sans", body: "Geist Sans" },
  styles: {
    body: {
      bg: "#0f0f0f",
    },
    global: {
      "@keyframes wiggle": {
        "0%, 7%": {
          transform: "rotateZ(0)"
        },
        "15%": {
          transform: "rotateZ(-25deg)"
        },
        "20%": {
          transform: "rotateZ(20deg)"
        },
        "25%": {
          transform: "rotateZ(-20deg)"
        },
        "30%": {
          transform: "rotateZ(15deg)"
        },
        "35%": {
          transform: "rotateZ(-10deg)"
        },
        "40%, 100%": {
          transform: "rotateZ(0)"
        }
      },
      "@keyframes bounce": {
        "0%, 20%, 53%, 80%, 100%": {
          animationTimingFunction: "cubic-bezier(0.215, 0.61, 0.355, 1)",
          transform: "scale(1)"
        },
        "40%, 43%": {
          animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          transform: "scale(1.15)"
        },
        "70%": {
          animationTimingFunction: "cubic-bezier(0.755, 0.05, 0.855, 0.06)",
          transform: "scale(1.08)"
        },
        "90%": {
          transform: "scale(1.03)"
        }
      }
    }
  },
  textStyles: {
    text: {
      _selection:{
        background: '#474747',
        color: '#FFFFFF'
      }
    }
  }
});

export default theme;
