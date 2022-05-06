import * as React from "react";
import { ChakraProvider, extendTheme, ThemeConfig } from "@chakra-ui/react";

import SidebarWithHeader from "./NavBarHeader/NavBarHeader";
import ArticleList from "./components/Prova/Prova";

// 2. Add your color mode config
const config: ThemeConfig = {
  initialColorMode: 'dark',
  useSystemColorMode: false,
}

// 3. extend the theme
const theme = extendTheme({ config })

export const App = () => (
  <ChakraProvider theme={theme}>
    <SidebarWithHeader>
      <ArticleList></ArticleList>
    </SidebarWithHeader>
  </ChakraProvider>
);
