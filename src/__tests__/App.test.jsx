import { render, screen } from "@testing-library/react";
import App from "../App";

test('renders the App component', () => {
  render(<App />);
  const heading = screen.getByText(/vite \+ react/i); // Change the text to match the actual content
  expect(heading).toBeInTheDocument();
});
