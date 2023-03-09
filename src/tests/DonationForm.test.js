import React from "react";
import { render, fireEvent } from "@testing-library/react";
import DonationForm from "./DonationForm";

describe("DonationForm", () => {
  it("should render a form with the correct inputs", () => {
    const { getByLabelText, getByText } = render(<DonationForm />);

    expect(getByLabelText("Food Item:")).toBeInTheDocument();
    expect(getByLabelText("Quantity:")).toBeInTheDocument();
    expect(getByLabelText("Expiration Date:")).toBeInTheDocument();
    expect(getByText("Donate")).toBeInTheDocument();
  });

  it("should call the onDonation function with the form values when submitted", () => {
    const onDonation = jest.fn();
    const { getByLabelText, getByText } = render(
      <DonationForm onDonation={onDonation} />
    );

    fireEvent.change(getByLabelText("Food Item:"), {
      target: { value: "Apples" },
    });
    fireEvent.change(getByLabelText("Quantity:"), { target: { value: "5" } });
    fireEvent.change(getByLabelText("Expiration Date:"), {
      target: { value: "2023-04-01" },
    });
    fireEvent.submit(getByText("Donate"));

    expect(onDonation).toHaveBeenCalledWith({
      foodItem: "Apples",
      quantity: "5",
      expiration: "2023-04-01",
    });
  });
});
