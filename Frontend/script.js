let formHandle = document.getElementById("loginForm");

formHandle.addEventListener("submit", (e) => {
  e.preventDefault();

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");

  emailError.textContent = "";
  passwordError.textContent = "";

  let isValid = true;

  if (email === "") {
    emailError.textContent = "Email is required";
    isValid = false;
  } else if (!email.includes("@")) {
    emailError.textContent = "Enter a valid email";
    isValid = false;
  }

  if (password === "") {
    passwordError.textContent = "Password is required";
    isValid = false;
  } else if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  if (isValid) {
    console.log("Form is valid Babu");

    console.log("Email:", email);
    console.log("Password:", password);

    alert(`Email: ${email}\nPassword: ${password}`);
  }
});
