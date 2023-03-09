import React from "react";
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import Home from "../components/Home";

describe("Home component", () => {
  test("renders the banner title and text", () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const bannerTitle = screen.getByText(
      /Welcome to Our Food Donation Community/i
    );
    const bannerText = screen.getByText(
      /We are a community of volunteers dedicated to fighting hunger and reducing food waste./i
    );
    expect(bannerTitle).toBeInTheDocument();
    expect(bannerText).toBeInTheDocument();
  });

  test('renders the "Donate Now" button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const donateButton = screen.getByRole("link", { name: /Donate Now/i });
    expect(donateButton).toBeInTheDocument();
  });

  test('renders the "Sign Up Now" button', () => {
    render(
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    );
    const signUpButton = screen.getByRole("link", { name: /Sign Up Now/i });
    expect(signUpButton).toBeInTheDocument();
  });
});
