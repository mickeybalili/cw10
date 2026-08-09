(function () {
  // Set your desired password here
  const CORRECT_PASSWORD = "Balenciaga!!!";

  // Check if the user has already authenticated during this session
  if (sessionStorage.getItem("authenticated") !== "true") {
    // Hide page body while waiting for input
    document.documentElement.style.display = "none";

    window.addEventListener("DOMContentLoaded", () => {
      let userPass = prompt("Enter the password to access this documentation:");

      if (userPass === CORRECT_PASSWORD) {
        sessionStorage.setItem("authenticated", "true");
        document.documentElement.style.display = "block";
      } else {
        alert("Incorrect password. Access denied.");
        document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>Access Denied</h1>";
        document.documentElement.style.display = "block";
      }
    });
  }
})();
