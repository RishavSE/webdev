let formHandle = document.getElementById("loginForm");

formHandle.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  try {
    const res = await fetch("http://localhost:5000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });
    const data = await res.json();
    console.log(data);

    if (data.success) {
      localStorage.setItem("email", email);
      localStorage.setItem("token":data.token);
      console.log("Email:", email);
      console.log("Password:", password);

      const successMessage = document.querySelector(".successLogin");
      successMessage.textContent = "Login successful!";
      setTimeout(() => {
        window.location.href = "index.html";
      }, 1000);
    }
    if (data.success === false) {
      const errorMessage = document.querySelector(".errorLogin");
      errorMessage.textContent = "Invalid email or password. Please try again.";
      setTimeout(() => {
        errorMessage.textContent = "";
      }, 1000);
    }
  } catch (error) {
    console.error("Error:", error);
  }

  // const emailError = document.getElementById("emailError");
  // const passwordError = document.getElementById("passwordError");

  // emailError.textContent = "";
  // passwordError.textContent = "";

  // let isValid = true;

  // if (email === "") {
  //   emailError.textContent = "Email is required";
  //   isValid = false;
  // } else if (!email.includes("@")) {
  //   emailError.textContent = "Enter a valid email";
  //   isValid = false;
  // }

  // if (password === "") {
  //   passwordError.textContent = "Password is required";
  //   isValid = false;
  // } else if (password.length < 6) {
  //   passwordError.textContent = "Password must be at least 6 characters";
  //   isValid = false;
  // }]

  // if (isValid) {
  //   console.log("Form is valid Babu");
  //   localStorage.setItem("email", email);
  //   console.log("Email:", email);
  //   console.log("Password:", password);

  //   const successMessage = document.querySelector(".successLogin");
  //   successMessage.textContent = "Login successful! redirecting.....";

  //   setTimeout(()=>{
  //     window.location.href = "index.html";
  //   },5000);

  //   alert(`Email: ${email}\nPassword: ${password}`);
  // }
});
