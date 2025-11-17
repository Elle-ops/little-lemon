
export function initializeTimes(date) {
  if (typeof fetchAPI !== "undefined") {
    return fetchAPI(date);
  } else {
    // For Jest / testing environment
    return ["17:00", "18:00", "19:00"];
  }
}

// Update times for a given date
export function updateTimes(date) {
  if (typeof fetchAPI !== "undefined") {
    return fetchAPI(date);
  } else {
    return ["17:00", "18:00", "19:00"];
  }
}
