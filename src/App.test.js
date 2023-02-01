import { render, screen } from '@testing-library/react';
import App from './App';

describe("App Component", () => {
  beforeEach(() => {render(<App />);});

  test("Header is successfully", () => {
    const header = screen.getByText(/Login/)
    expect(header).toBeInTheDocument();
  })

  test("Footer is successfully", () => {
    const footer = screen.getByText(/Copyright/)
    expect(footer).toBeInTheDocument();
  })

  test("Home is successfully", () => {
    const home = screen.getByText(/Popular Titles/)
    expect(home).toBeInTheDocument();
  })

});
