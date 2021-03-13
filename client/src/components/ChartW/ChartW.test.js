import { render, screen } from "@testing-library/react";
import ChartW from "./ChartW";

test("renders learn react link", () => {
  render(<ChartW />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
