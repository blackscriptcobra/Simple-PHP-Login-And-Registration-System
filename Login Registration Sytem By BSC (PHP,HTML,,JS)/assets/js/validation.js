// Add your form validation logic here
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const registerForm = document.getElementById('registerForm');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const username = document.getElementById('username').value;
      const password = document.getElementById('password').value;
  
      // Perform validation logic
      if (username === '' || password === '') {
        showErrorMessage('Please enter both username and password.');
      } else {
        // Submit the form if validation passes
        this.submit();
      }
    });
  
    registerForm.addEventListener('submit', function(event) {
      event.preventDefault();
      const newUsername = document.getElementById('newUsername').value;
      const newPassword = document.getElementById('newPassword').value;
  
      // Perform validation logic
      if (newUsername === '' || newPassword === '') {
        showErrorMessage('Please enter both username and password.');
      } else if (newPassword.length < 6) {
        showErrorMessage('Password must be at least 6 characters long.');
      } else {
        // Submit the form if validation passes
        this.submit();
      }
    });
  
    function showErrorMessage(message) {
      const errorMessage = document.createElement('p');
      errorMessage.classList.add('error-message');
      errorMessage.textContent = message;
  
      // Append error message to form
      const form = document.querySelector('form');
      form.appendChild(errorMessage);
    }
  });
  document.getElementById("switchButton").addEventListener("click", function () {
    var formContainer = document.querySelector(".form-container");
    var formTitle = document.getElementById("formTitle");
    var loginForm = document.getElementById("loginForm");
    var registerForm = document.getElementById("registerForm");

    // Toggle between Login and Register forms
    if (formContainer.classList.contains("show-register")) {
        formContainer.classList.remove("show-register");
        formTitle.textContent = "Login";
        loginForm.style.display = "block";
        registerForm.style.display = "none";
        switchButton.textContent = "Switch to Register";
    } else {
        formContainer.classList.add("show-register");
        formTitle.textContent = "Register";
        loginForm.style.display = "none";
        registerForm.style.display = "block";
        switchButton.textContent = "Switch to Login";
    }
});