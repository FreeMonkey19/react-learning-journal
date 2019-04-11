process.env.NODE_ENV === "development";

function apiUrl() {
  if (process.env.NODE_ENV === "development") {
    return "http://localhost:4000";
  } else {
    return "https://secure-shore-26317.herokuapp.com";
  }
}

export default apiUrl;
