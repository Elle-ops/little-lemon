import { render, screen, fireEvent } from "@testing-library/react";
import Reservations from "./Reservations";

describe("Reservations Component", () => {
  test("renders all form fields", () => {
    render(<Reservations />);

    // Inputs
    expect(screen.getByPlaceholderText(/Enter your first name/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your surname/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Enter your email/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText(/Add any special requests/i)).toBeInTheDocument();

    // Selects
    expect(screen.getByLabelText(/Occasion/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Number of Guests/i)).toBeInTheDocument();

    // Date & Time
    expect(screen.getByLabelText(/Select Date/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Select Time/i)).toBeInTheDocument();

    // Button
    expect(screen.getByRole("button", { name: /Submit Reservation/i })).toBeInTheDocument();
  });

  test("fills and submits the form", () => {
    render(<Reservations />);

    // Mock console.log
    const consoleSpy = jest.spyOn(console, "log").mockImplementation();

    // Fill inputs
    fireEvent.change(screen.getByPlaceholderText(/Enter your first name/i), { target: { value: "John" } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your surname/i), { target: { value: "Doe" } });
    fireEvent.change(screen.getByPlaceholderText(/Enter your email/i), { target: { value: "john@example.com" } });
    fireEvent.change(screen.getByLabelText(/Occasion/i), { target: { value: "birthday" } });
    fireEvent.change(screen.getByLabelText(/Number of Guests/i), { target: { value: "4" } });
    fireEvent.change(screen.getByLabelText(/Select Date/i), { target: { value: "2025-12-25" } });
    fireEvent.change(screen.getByLabelText(/Select Time/i), { target: { value: "19:00" } });
    fireEvent.change(screen.getByPlaceholderText(/Add any special requests/i), { target: { value: "Window seat please" } });

    // Submit form
    fireEvent.click(screen.getByRole("button", { name: /Submit Reservation/i }));

    // Check console output
    expect(consoleSpy).toHaveBeenCalledWith("Reservation submitted:", {
      name: "John",
      surname: "Doe",
      email: "john@example.com",
      occasion: "birthday",
      guests: "4",
      date: "2025-12-25",
      time: "19:00",
      message: "Window seat please",
    });

    consoleSpy.mockRestore();
  });
});
