import { render, screen, fireEvent } from "@testing-library/react";
import Card from ".";

describe("Card Component", () => {
  beforeEach(() => {
    render(
      <Card title="test" imageUrl="https://picsum.photos/id/234/200/300" />
    );
  });

  test("Card is successfully", () => {
    const img = screen.getByAltText("test");
    expect(img).toBeInTheDocument();
  });
  test("Card is successfully", () => {
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt");
    expect(img.alt).toEqual("test");
  });
  test("Card is successfully", () => {
    const img = screen.getByRole("img");
    expect(img).toHaveAttribute("alt");
    expect(img.alt).toEqual("test");
  });
});
describe("fire events", () => {
  const onClick = jest.fn();
  beforeEach(() => {
    render(
      <Card
        title="test"
        imageUrl="https://picsum.photos/id/234/200/300"
        onClick={onClick}
      />
    );
  });
  test("on click should work", () => {
    const img = screen.getByRole("img");
    fireEvent.click(img);
    expect(onClick).toBeCalledTimes(0);
  });
});
