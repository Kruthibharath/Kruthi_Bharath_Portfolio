import { HashRouter } from "react-router-dom";
import Router from "./src/components/Router/Router";

function App() {
  return (
    <>
      <HashRouter>
        <Router data-testid="routerComponent" />
      </HashRouter>
    </>
  );
}
export default App;
