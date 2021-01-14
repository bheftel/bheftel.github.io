import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/learn react/i);

  // todo - need to load the jest extender things`
  // expect(linkElement).toBeInTheDocument();
});
