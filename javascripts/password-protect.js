(function () {
  const CORRECT_PASSWORD = "balenciaga!!!"; // Note: Visible in client source code

  // Keep body hidden immediately using CSS injection to prevent content leaks
  const styleTag = document.createElement("style");
  styleTag.id = "gate-hide-style";
  styleTag.innerHTML = "body { display: none !important; }";
  document.head.appendChild(styleTag);

  function revealContent() {
    const hiddenStyle = document.getElementById("gate-hide-style");
    if (hiddenStyle) hiddenStyle.remove();
    document.body.style.display = "";
  }

  function checkPassword() {
    // 1. Session check
    if (sessionStorage.getItem("authenticated") === "true") {
      revealContent();
      return;
    }

    // 2. Password prompt with loop (prevents page reloads that trigger IP bans)
    let userPass = prompt("Enter the password to access the CW 10 Syllabus:");

    if (userPass === CORRECT_PASSWORD) {
      sessionStorage.setItem("authenticated", "true");
      revealContent();
    } else if (userPass !== null) {
      // User entered wrong password
      alert("Halt, rogue! It seems you’ve wandered into the forbidden wing of the library without the secret cipher. While we admire your adventurous spirit & your blatant disregard for digital velvet ropes, these pages remain strictly off-limits to non-CW 10 eyes.");
      
      // Re-trigger prompt without reloading page or destroying document DOM
      setTimeout(checkPassword, 100);
    } else {
      // User clicked "Cancel"
      document.body.innerHTML = "<div style='text-align:center; margin-top:100px; font-family:sans-serif;'><h1>Access Denied</h1><p>A valid password is required to view this syllabus.</p><button onclick='location.reload()' style='padding:8px 16px; cursor:pointer;'>Try Again</button></div>";
      revealContent();
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", checkPassword);
  } else {
    checkPassword();
  }
})();
