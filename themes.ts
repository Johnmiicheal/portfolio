// theme.ts

// 1. import `extendTheme` function
import { extendTheme, type ThemeConfig } from "@chakra-ui/react";
import "@fontsource/rubik/300.css";
import "@fontsource/rubik/400.css";
import "@fontsource/rubik/500.css";
import "@fontsource/rubik/600.css";
import "@fontsource/rubik/700.css";
import "@fontsource/rubik/800.css";
import "@fontsource/rubik/900.css";
import "@fontsource/rubik/300-italic.css";
import "@fontsource/rubik/400-italic.css";
import "@fontsource/rubik/500-italic.css";
import "@fontsource/rubik/600-italic.css";
import "@fontsource/rubik/700-italic.css";
import "@fontsource/rubik/800-italic.css";
import "@fontsource/rubik/900-italic.css";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

// 3. extend the theme
const theme = extendTheme({
  config,
  fonts: { heading: "Rubik", body: "Rubik" },
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
