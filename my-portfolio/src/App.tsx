import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router/Router";

function App() {
  return (
    <>
      <BrowserRouter>
        <Router data-testid="routerComponent" />
      </BrowserRouter>
    </>
  );
}
export default App;
