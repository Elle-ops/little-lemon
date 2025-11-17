// src/components/Reservations.test.js
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen, fireEvent } from "@testing-library/react";
import Reservations from "./Reservations";

test("renders all form fields", () => {
  render(<Reservations />);

  expect(screen.getByPlaceholderText(/Name/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Surname/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Email/i)).toBeInTheDocument();
  expect(screen.getByText(/ Occasion/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Number of Guests/i)).toBeInTheDocument();
  expect(screen.getByPlaceholderText(/Message/i)).toBeInTheDocument();
  expect(screen.getByRole("button", { name: /submit/i })).toBeInTheDocument();
});

test("allows user to fill and submit the form", () => {
  render(<Reservations />);
  
  fireEvent.change(screen.getByPlaceholderText(/Name/i), { target: { value: "John" } });
  fireEvent.change(screen.getByPlaceholderText(/Surname/i), { target: { value: "Doe" } });
  fireEvent.change(screen.getByPlaceholderText(/Email/i), { target: { value: "john@example.com" } });
  fireEvent.change(screen.getByRole("combobox"), { target: { value: "birthday" } });
  fireEvent.change(screen.getByPlaceholderText(/Number of Guests/i), { target: { value: "4" } });
  fireEvent.change(screen.getByPlaceholderText(/Message/i), { target: { value: "Looking forward!" } });

  const consoleSpy = jest.spyOn(console, "log").mockImplementation();
  fireEvent.click(screen.getByRole("button", { name: /submit/i }));

  expect(consoleSpy).toHaveBeenCalledWith("Form submitted:", {
    name: "John",
    surname: "Doe",
    email: "john@example.com",
    occasion: "birthday",
    guests: "4",
    date: "",
    time: "",
    message: "Looking forward!",
  });

  consoleSpy.mockRestore();
});
