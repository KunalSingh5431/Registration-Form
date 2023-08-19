function validateForm(event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById("confirmPassword").value;

    const usernameError = document.getElementById("usernameError");
    const emailError = document.getElementById("emailError");
    const passwordError = document.getElementById("passwordError");
    const confirmPasswordError = document.getElementById("confirmPasswordError");

    usernameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    if (username.length < 5) {
      usernameError.textContent = "Username must be at least 5 characters long.";
      return;
    }

    if (password !== confirmPassword) {
      confirmPasswordError.textContent = "Passwords do not match.";
      return;
    }

    alert("Registration successful!");
  }

  