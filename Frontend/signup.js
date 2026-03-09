let formHandle = document.querySelector(".loginForm");

formHandle.addEventListener("submit", async (e) => {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const mobile = document.getElementById("phone").value.trim();
  const password = document.getElementById("password").value.trim();

  let isvalid = true;

  if (email == "") {
    isvalid = false;
    alert("email is required");
    return;
  }

  if (!email.includes("@")) {
    alert("enter valid email");
    return;
  }

  if (password.length < 6) {
    alert("Please create strong Pass");
    return;
  }

  if (mobile.length != 10) {
    alert("Please enter valid Mobile no.");
    return;
  }

  try {
    const res = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        email: email,
        phone: mobile,
        password: password
      })
    });

    const data = await res.json();

    if (res.ok) {
      alert("Signup successfully");
      formHandle.reset();

    } else {
      alert(data.message);
    }

  } catch (error) {
    console.log("error", error);
  }
});
