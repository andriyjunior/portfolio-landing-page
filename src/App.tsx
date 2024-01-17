import { ThemeProvider } from "styled-components";
import { GlobalStyle, theme } from "theme";
import { About, Community, CommunityUpdates, Hero, Sponsors } from "sections";
import { MainLayout } from "layouts";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MainLayout>
        <Hero />
        <Sponsors />
        <Community />
        <About />
        <CommunityUpdates />
      </MainLayout>
    </ThemeProvider>
  );
}

export default App;
