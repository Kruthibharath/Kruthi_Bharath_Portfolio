import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("App", () => {
  /*Rendering:*/
  test("renders App component without fail", () => {
    render(<App />);
  });

  /*Child Component Rendering:
  test("renders Router component", () => {
    render(<App />);
    screen.debug();
    const routerComponent = screen.getByTestId("routerComponent");
    expect(routerComponent).toBeInTheDocument();
  });*/
});
