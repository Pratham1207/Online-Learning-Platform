document.addEventListener("DOMContentLoaded", function () {
  const registrationForm = document.getElementById("registrationForm");
  const loginForm = document.getElementById("loginForm");
  const messageContainer = document.getElementById("messageContainer");

  if (registrationForm) {
    registrationForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get values from input fields
      const username = document.getElementById("regEmail").value;
      const password = document.getElementById("regPassword").value;
      const confirmPassword = document.getElementById("confirmPassword").value;

      // Validate username
      if (username.trim() === "") {
        showMessage("Please enter a email.", "error");
        return;
      }

      // Validate password
      if (password.trim() === "") {
        showMessage("Please enter a password.", "error");
        return;
      }
      if (password.length < 8) {
        showMessage("Password must be at least 8 characters long.", "error");
        return;
      }

      // Validate password complexity (example: at least one lowercase letter, one uppercase letter, one digit, and one special character)
      const passwordRegex =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/;
      if (!passwordRegex.test(password)) {
        showMessage(
          "Password must contain at least one lowercase letter, one uppercase letter, one digit, and one special character.",
          "error"
        );
        return;
      }

      // Validate confirm password
      if (password !== confirmPassword) {
        showMessage("Passwords do not match", "error");
        return;
      }

      // Store values in session storage
      sessionStorage.setItem("username", username);
      sessionStorage.setItem("password", password);

      showMessage("Registration successful!", "success");

      // Navigate to login page
      setTimeout(() => {
        window.location.href = "login.html";
      }, 2000);
    });
  } else {
    console.error("Registration form not found.");
  }

  if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
      event.preventDefault(); // Prevent form submission

      // Get values from input fields
      const username = document.getElementById("loginEmail").value;
      const password = document.getElementById("loginPassword").value;

      // Validate username
      if (username.trim() === "") {
        showMessage("Please enter a email.", "error");
        return;
      }

      // Validate password
      if (password.trim() === "") {
        showMessage("Please enter a password.", "error");
        return;
      }

      // Check authentication
      if (checkAuthentication(username, password)) {
        showMessage("Login successful!", "success"); // Display a success message
        // Redirect to index.html after successful login
        setTimeout(() => {
          window.location.href = "index.html"; // Replace with your desired destination
        }, 2000);
      } else {
        showMessage("Invalid username or password", "error"); // Display an error message
      }
    });
  } else {
    console.error("Login form not found.");
  }

  // Function to check authentication
  const checkAuthentication = (username, password) => {
    // Retrieve stored username and password from session storage
    const storedUsername = sessionStorage.getItem("username");
    const storedPassword = sessionStorage.getItem("password");

    // Compare entered username and password with stored values
    return username === storedUsername && password === storedPassword;
  };

  // Function to display messages on the webpage
  const showMessage = (message, type) => {
    const messageDiv = document.createElement("div");
    messageDiv.textContent = message;
    messageDiv.classList.add("message", type);
    messageContainer.appendChild(messageDiv);

    // Automatically remove the message after 5 seconds
    setTimeout(() => {
      messageDiv.remove();
    }, 5000);
  };
});
