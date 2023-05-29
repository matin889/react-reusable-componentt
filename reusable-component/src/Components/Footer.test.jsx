import Footer from "./Footer";
import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";

describe("Check if fotter defined", () => {
  it("see if everything is defined", () => {
    const footer = render(<Footer />);
    expect(footer).toBeDefined();
  });
});
