import { render, fireEvent } from "@testing-library/react";
import Search from "./Search";

describe("Search component", () => {
  const donations = [
    { foodItem: "Apples", quantity: 5, expiration: "2023-03-10" },
    { foodItem: "Bananas", quantity: 3, expiration: "2023-03-05" },
    { foodItem: "Oranges", quantity: 2, expiration: "2023-03-07" },
    { foodItem: "Pears", quantity: 4, expiration: "2023-03-15" },
  ];

  it("should render the search input", () => {
    const { getByPlaceholderText } = render(<Search donations={donations} />);
    const input = getByPlaceholderText("Search donations");
    expect(input).toBeInTheDocument();
  });

  it("should filter donations based on search term", () => {
    const { getByPlaceholderText, getByText, queryByText } = render(
      <Search donations={donations} />
    );

    const input = getByPlaceholderText("Search donations");
    fireEvent.change(input, { target: { value: "apples" } });

    expect(getByText("Apples - 5 - 2023-03-10")).toBeInTheDocument();
    expect(queryByText("Bananas - 3 - 2023-03-05")).toBeNull();
    expect(queryByText("Oranges - 2 - 2023-03-07")).toBeNull();
    expect(queryByText("Pears - 4 - 2023-03-15")).toBeNull();
  });

  it("should ignore case when filtering donations", () => {
    const { getByPlaceholderText, getByText } = render(
      <Search donations={donations} />
    );

    const input = getByPlaceholderText("Search donations");
    fireEvent.change(input, { target: { value: "APPLES" } });

    expect(getByText("Apples - 5 - 2023-03-10")).toBeInTheDocument();
  });

  it("should display all donations if search term is empty", () => {
    const { getByPlaceholderText, getByText } = render(
      <Search donations={donations} />
    );

    const input = getByPlaceholderText("Search donations");
    fireEvent.change(input, { target: { value: "" } });

    expect(getByText("Apples - 5 - 2023-03-10")).toBeInTheDocument();
    expect(getByText("Bananas - 3 - 2023-03-05")).toBeInTheDocument();
    expect(getByText("Oranges - 2 - 2023-03-07")).toBeInTheDocument();
    expect(getByText("Pears - 4 - 2023-03-15")).toBeInTheDocument();
  });
});
