// src/Bookings.test.js
import { initializeTimes, updateTimes } from "./Bookings";

describe("Bookings functions (initializeTimes / updateTimes)", () => {
  beforeEach(() => {
    global.fetchAPI = jest.fn((date) => {
      // return different sample arrays depending on date if you want
      return ["17:00", "17:30", "18:00"];
    });
  });

  afterEach(() => {
    jest.restoreAllMocks();
    delete global.fetchAPI;
  });

  test("initializeTimes returns times from fetchAPI", () => {
    const result = initializeTimes("2025-12-01");
    expect(global.fetchAPI).toHaveBeenCalledWith("2025-12-01");
    expect(result).toEqual(["17:00", "17:30", "18:00"]);
  });

  test("updateTimes returns times from fetchAPI", () => {
    const result = updateTimes("2025-12-02");
    expect(global.fetchAPI).toHaveBeenCalledWith("2025-12-02");
    expect(result).toEqual(["17:00", "17:30", "18:00"]);
  });
});
