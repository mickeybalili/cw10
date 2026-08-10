(function () {
  // Set your desired password here
  const CORRECT_PASSWORD = "balenciaga!!!";

  // Check if the user has already authenticated during this session
  if (sessionStorage.getItem("authenticated") !== "true") {
    // Hide page body while waiting for input
    document.documentElement.style.display = "none";

    window.addEventListener("DOMContentLoaded", () => {
      let userPass = prompt("Enter the password to access the CW 10 Syllabus:");

      if (userPass === CORRECT_PASSWORD) {
        sessionStorage.setItem("authenticated", "true");
        document.documentElement.style.display = "block";
      } else {
        alert("Halt, rogue! It seems you’ve wandered into the forbidden wing of the library without the secret cipher. While we admire your adventurous spirit & your blatant disregard for digital velvet ropes, these pages remain strictly off-limits to non-CW 10 eyes.");
        document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>Access Denied</h1>";
        document.documentElement.style.display = "block";
      }
    });
  }
})();
