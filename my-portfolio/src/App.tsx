import { BrowserRouter } from "react-router-dom";
import { Router } from "./components/Router/Router";
import "./App.css";

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
