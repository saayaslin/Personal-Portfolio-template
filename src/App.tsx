// routes
import Router from "./routes";
// components
import ScrollToTop from "./components/ScrollToTop";
import ReactGA from "react-ga";
// providers
import ThemeProvider from "./theme/ThemeProvider";
// config
import { googleAnlyticId } from "./config";

// -----------------------------------------------------------------------------

ReactGA.initialize(googleAnlyticId);
ReactGA.pageview(window.location.pathname + window.location.search);

// -----------------------------------------------------------------------------

function App() {
  return (
    <ThemeProvider>
      <ScrollToTop />
      <Router />
    </ThemeProvider>
  );
}

export default App;
