import Router from "./pages/Router";
import { GlobalStyle } from "./style/GlobalStyle";

function App(): JSX.Element {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
