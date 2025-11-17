import React from "react";
import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Reservations from "../Reservations";

// Mock global fetchAPI and submitAPI
global.fetchAPI = jest.fn(() => ["17:00", "18:00", "19:00"]);
global.submitAPI = jest.fn(() => true);

describe("Reservations Component", () => {

  describe("Form Rendering", () => {
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
  });

  describe("Available Times", () => {
    test("updates available times when date changes", async () => {
      render(
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      );

      const dateInput = screen.getByLabelText(/Select Date/i);
      fireEvent.change(dateInput, { target: { value: "2025-11-20" } });

      await waitFor(() => {
        const timeSelect = screen.getByLabelText(/Select Time/i);
        expect(timeSelect).toHaveTextContent("17:00");
        expect(timeSelect).toHaveTextContent("18:00");
        expect(timeSelect).toHaveTextContent("19:00");
      });
    });
  });

  describe("Form Submission", () => {
    test("calls submitAPI with form data when submitted", async () => {
      render(
        <MemoryRouter>
          <Reservations />
        </MemoryRouter>
      );

      fireEvent.change(screen.getByLabelText(/Name/i), { target: { value: "John" } });
      fireEvent.change(screen.getByLabelText(/Surname/i), { target: { value: "Doe" } });
      fireEvent.change(screen.getByLabelText(/Email/i), { target: { value: "john@example.com" } });
      fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "2" } });
      fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: "2025-11-20" } });

      // Wait for fetchAPI to populate times
      await waitFor(() => {
        fireEvent.change(screen.getByLabelText(/Select Time/i), { target: { value: "17:00" } });
      });

      const submitButton = screen.getByRole("button", { name: /Submit Reservation/i });
      fireEvent.click(submitButton);

      await waitFor(() => {
        expect(global.submitAPI).toHaveBeenCalledWith(
          expect.objectContaining({
            name: "John",
            surname: "Doe",
            email: "john@example.com",
            guests: "2",
            date: "2025-11-20",
            time: "17:00",
          })
        );
      });
    });
  });
});
