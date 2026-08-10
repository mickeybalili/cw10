(function () {
  const CORRECT_PASSWORD = "balenciaga!!!";

  if (sessionStorage.getItem("authenticated") === "true") {
    return; // User is already authenticated
  }

  // Function to run the password gate
  function checkPassword() {
    let userPass = prompt("Enter the password to access the CW 10 Syllabus:");

    if (userPass === CORRECT_PASSWORD) {
      sessionStorage.setItem("authenticated", "true");
      document.body.style.display = ""; // Restores default stylesheet styling
    } else {
      alert("Halt, rogue! It seems you’ve wandered into the forbidden wing of the library without the secret cipher. While we admire your adventurous spirit & your blatant disregard for digital velvet ropes, these pages remain strictly off-limits to non-CW 10 eyes.");
      document.body.innerHTML = "<h1 style='text-align:center; margin-top:50px;'>Access Denied</h1>";
      document.body.style.display = "";
    }
  }

  // Ensure DOM is interactive before manipulating document.body
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", () => {
      document.body.style.display = "none";
      checkPassword();
    });
  } else {
    document.body.style.display = "none";
    checkPassword();
  }
})();
