// src/TimesContext.js
import React, { createContext, useState, useCallback } from "react";
import { initializeTimes } from "./Bookings";

export const TimesContext = createContext({
  availableTimes: [],
  refreshTimes: (date) => {},
});

export function TimesProvider({ children }) {
  const [availableTimes, setAvailableTimes] = useState([]);

  const refreshTimes = useCallback((date) => {
    if (!date) {
      setAvailableTimes([]);
      return;
    }

    try {
      const times = initializeTimes(date);
      setAvailableTimes(times || []);
    } catch (err) {
      // in case initializeTimes throws in test env
      console.error("Failed to load times:", err);
      setAvailableTimes([]);
    }
  }, []);

  return (
    <TimesContext.Provider value={{ availableTimes, refreshTimes }}>
      {children}
    </TimesContext.Provider>
  );
}
