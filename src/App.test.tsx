import { render } from "@testing-library/react";
import App from "./App.tsx";
import { describe, expect, it } from "@jest/globals";

describe("App", () => {
  it("should work as expected", () => {
    render(<App />);
    expect(1 + 1).toBe(2);
  });
});
