import React from "react";
import { render } from "@testing-library/react-native";
import App from "./App";

describe("App", () => {
  it("should render", () => {
    render(<App />);
  });
});
