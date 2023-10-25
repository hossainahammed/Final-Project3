function toggleLoginForm() {
    var loginForm = document.getElementById("loginForm");
    loginForm.style.display = loginForm.style.display === "block" ? "none" : "block";
    // Clear the input fields on each access
    document.querySelector('.login-dropdown-content input[type="text"]').value = '';
    document.querySelector('.login-dropdown-content input[type="password"]').value = '';
}

function login() {
    //  login validation logic here
    var idNumber = document.querySelector('.login-dropdown-content input[type="text"]').value;
    var password = document.querySelector('.login-dropdown-content input[type="password"]').value;

    // For demonstration purposes, we assume the login is successful if both fields are non-empty
    if (idNumber.trim() == '1234' && password.trim() == 'H1234') {
        alert('Login successful!');

        // Redirect to the new page after successful login
       window.location.href = 'USS2 (2).html';
    } else {
        alert('Invalid login information. Please try again.');
    }
}

function togglePasswordVisibility() {
        var passwordInput = document.getElementById("passwordInput");
        var showPasswordCheckbox = document.getElementById("showPassword");

        if (showPasswordCheckbox.checked) {
            passwordInput.type = "text";
        } else {
            passwordInput.type = "password";
        }
      }
function resetForm() {
        // Clear the input fields
        document.querySelector('.login-dropdown-content input[type="text"]').value = '';
        document.querySelector('.login-dropdown-content input[type="password"]').value = '';
   }
