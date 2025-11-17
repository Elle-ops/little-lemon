import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "./Reservations";

// Mock global fetchAPI and submitAPI
global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
global.submitAPI = jest.fn(() => true);

describe("Reservations Component", () => {
  test("renders all form fields", () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    expect(screen.getByLabelText(/Name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Surname/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Email/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Message \/ Comment/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Submit Reservation/i })).toBeInTheDocument();
  });

  test("updates available times when date changes", () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    const dateInput = screen.getByLabelText(/Select Date/i);
    fireEvent.change(dateInput, { target: { value: "2025-11-20" } });

    // Time select should have options returned from fetchAPI
    const timeSelect = screen.getByLabelText(/Select Time/i);
    expect(timeSelect).toHaveTextContent("17:00");
    expect(timeSelect).toHaveTextContent("18:00");
    expect(timeSelect).toHaveTextContent("19:00");
  });

  test("calls submitAPI on form submit", () => {
    render(
      <MemoryRouter>
        <Reservations />
      </MemoryRouter>
    );

    // Fill minimal valid form data
    fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByLabelText(/Surname/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: "2025-11-20" } });
    fireEvent.change(screen.getByLabelText(/Select Time/i), { target: { value: "17:00" } });

    const submitButton = screen.getByRole("button", { name: /Submit Reservation/i });
    fireEvent.click(submitButton);

    expect(global.submitAPI).toHaveBeenCalled();
  });
});
